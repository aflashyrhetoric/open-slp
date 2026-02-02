import {
    PricingModel,
    Resource,
    ResourceCategory,
    SLPType,
} from '@/types/openslp/resource';
import Fuse, { IFuseOptions } from 'fuse.js';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TargetAudience = 'pediatric' | 'medical' | 'all';

type ResourcesByCategory = {
    category: ResourceCategory;
    resourcesInCategory: Resource[];
};

type State = {
    searchQuery: string;
    resources: Resource[];
    filteredResourcesByCategory: ResourcesByCategory[];

    // Filters
    pricingFilters: PricingModel[];
    audienceFilters: SLPType[];
    featuresFilters: {
        hasDownloadables: boolean;
        usesAi: boolean;
        updatesRegularly: boolean;
    };

    // UI Preferences
    collapseExtraData: boolean

};

type Actions = {
    setResources: (resources: Resource[]) => void;
    setSearchQuery: (query: string) => void;

    setPricing: (pricing: PricingModel[]) => void;
    setAudience: (audience: TargetAudience[]) => void;
    toggleFeature: (feature: keyof State['featuresFilters']) => void;

    clearFilters: () => void;

    toggleCollapseExtraData: () => void;
};

type ResourcesState = State & Actions;

const initialFiltersState: {
    pricingFilters: PricingModel[];
    audienceFilters: SLPType[];
    featuresFilters: {
        hasDownloadables: boolean;
        usesAi: boolean;
        updatesRegularly: boolean;
    };
    collapseExtraData: boolean;
} = {
    pricingFilters: [],
    audienceFilters: [],
    featuresFilters: {
        hasDownloadables: false,
        usesAi: false,
        updatesRegularly: false,
    },
    collapseExtraData: false
};

const fuseOptions: IFuseOptions<Resource> = {
    keys: [
        { name: 'target_audience', weight: 5 },
        { name: 'pricing_model', weight: 9 },
        { name: 'name', weight: 3 },
        { name: 'author', weight: 1.5 },
        { name: 'keywords', weight: 1.5 },
        { name: 'notes', weight: 1 },
        // { name: 'og_title', weight: 1 },
        // { name: 'og_description', weight: 0.8 },
        { name: 'category.name', weight: 0.8 },
    ],
    threshold: 0.38,
    ignoreLocation: true,
};

function applyDiscreteFilters(resources: Resource[], state: State): Resource[] {
    const { pricingFilters, audienceFilters, featuresFilters } = state;

    return resources.filter((r) => {
        if (
            pricingFilters.length > 0 &&
            !pricingFilters.includes(r.pricing_model)
        ) {
            return false;
        }

        if (audienceFilters.length > 0 && !audienceFilters.includes('all')) {
            if (!audienceFilters.includes(r.target_audience)) {
                return false;
            }
        }

        if (featuresFilters.hasDownloadables && !r.has_downloadables)
            return false;
        if (featuresFilters.usesAi && !r.uses_ai) return false;
        if (featuresFilters.updatesRegularly && !r.updates_regularly)
            return false;

        return true;
    });
}

function groupByCategory(resources: Resource[]): ResourcesByCategory[] {
    const categoryMap = new Map<number, ResourcesByCategory>();

    for (const resource of resources) {
        const categoryId = resource.category.id;

        if (!categoryMap.has(categoryId)) {
            categoryMap.set(categoryId, {
                category: resource.category,
                resourcesInCategory: [],
            });
        }

        categoryMap.get(categoryId)!.resourcesInCategory.push(resource);
    }

    return Array.from(categoryMap.values()).sort(
        (a, b) => a.category.position - b.category.position,
    );
}

function computeFilteredResourcesByCategory(
    state: State,
): ResourcesByCategory[] {
    const discreteFiltered = applyDiscreteFilters(state.resources, state);

    if (!state.searchQuery.trim()) {
        return groupByCategory(discreteFiltered);
    }

    const fuse = new Fuse(discreteFiltered, fuseOptions);
    const fuseResults = fuse
        .search(state.searchQuery)
        .map((result) => result.item);

    return groupByCategory(fuseResults);
}

export const useResources = create<ResourcesState>()(
    devtools(
        immer((set) => ({
            searchQuery: '',
            resources: [],
            filteredResourcesByCategory: [],
            ...initialFiltersState,

            setResources: (resources) =>
                set((state) => {
                    state.resources = resources;
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            setSearchQuery: (query) =>
                set((state) => {
                    state.searchQuery = query;
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            setPricing: (pricing) =>
                set((state) => {
                    state.pricingFilters = pricing;
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            setAudience: (audience) =>
                set((state) => {
                    state.audienceFilters = audience;
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            toggleFeature: (feature) =>
                set((state) => {
                    state.featuresFilters[feature] =
                        !state.featuresFilters[feature];
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            clearFilters: () =>
                set((state) => {
                    state.pricingFilters = initialFiltersState.pricingFilters;
                    state.audienceFilters = initialFiltersState.audienceFilters;
                    state.featuresFilters = {
                        ...initialFiltersState.featuresFilters,
                    };
                    state.filteredResourcesByCategory =
                        computeFilteredResourcesByCategory(state);
                }),

            toggleCollapseExtraData: () =>
                set((state) => {
                    state.collapseExtraData = !state.collapseExtraData;
                }),
        })),
        { name: 'resources' },
    ),
);
