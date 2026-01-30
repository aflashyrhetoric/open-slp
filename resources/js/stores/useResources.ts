import {
    PricingModel,
    Resource,
    ResourceCategory,
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
    pricing: PricingModel | null;
    audience: TargetAudience | null;
    features: {
        hasDownloadables: boolean;
        usesAi: boolean;
        updatesRegularly: boolean;
    };
};

type Actions = {
    setResources: (resources: Resource[]) => void;
    setSearchQuery: (query: string) => void;

    setPricing: (pricing: PricingModel | null) => void;
    setAudience: (audience: TargetAudience | null) => void;
    toggleFeature: (feature: keyof State['features']) => void;

    clearFilters: () => void;
};

type ResourcesState = State & Actions;

const initialFiltersState: Pick<State, 'pricing' | 'audience' | 'features'> = {
    pricing: null,
    audience: null,
    features: {
        hasDownloadables: false,
        usesAi: false,
        updatesRegularly: false,
    },
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
    const { pricing, audience, features } = state;

    return resources.filter((r) => {
        if (pricing && r.pricing_model !== pricing) return false;

        if (audience && r.target_audience !== audience && r.target_audience !== 'all') {
            return false;
        }

        if (features.hasDownloadables && !r.has_downloadables) return false;
        if (features.usesAi && !r.uses_ai) return false;
        if (features.updatesRegularly && !r.updates_regularly) return false;

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

function computeFilteredResourcesByCategory(state: State): ResourcesByCategory[] {
    const discreteFiltered = applyDiscreteFilters(state.resources, state);

    if (!state.searchQuery.trim()) {
        return groupByCategory(discreteFiltered);
    }

    const fuse = new Fuse(discreteFiltered, fuseOptions);
    const fuseResults = fuse.search(state.searchQuery).map((result) => result.item);

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
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),

            setSearchQuery: (query) =>
                set((state) => {
                    state.searchQuery = query;
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),

            setPricing: (pricing) =>
                set((state) => {
                    state.pricing = pricing;
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),

            setAudience: (audience) =>
                set((state) => {
                    state.audience = audience;
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),

            toggleFeature: (feature) =>
                set((state) => {
                    state.features[feature] = !state.features[feature];
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),

            clearFilters: () =>
                set((state) => {
                    state.pricing = initialFiltersState.pricing;
                    state.audience = initialFiltersState.audience;
                    state.features = { ...initialFiltersState.features };
                    state.filteredResourcesByCategory = computeFilteredResourcesByCategory(state);
                }),
        })),
        { name: 'resources' },
    ),
);
