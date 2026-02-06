import ResourceCategorySection from '@/openslp/resource-category-section';
import { ResourcesByCategory, useResources } from '@/stores/useResources';
import ResourceCategoryCTA from '@/openslp/resource-category-cta';
import { usePage } from '@inertiajs/react';

type Props = {
    index?: number;
    data: ResourcesByCategory;
    width?: number;
};

export default function ResourceCategorySectionWrapperInner({
    index,
    data,
    // width,
}: Props) {
    const {tag} = usePage().props;
    const { category, resourcesInCategory } = data;
    const { filteredResourcesByCategory } = useResources();

    const numberOfCategories = filteredResourcesByCategory.length;

    const indexOfMidpoint = Math.floor((numberOfCategories / 4) * 1);

    const isTagPage = tag !== undefined;

    return (
        <>
            {index === indexOfMidpoint && !isTagPage && (
                <ResourceCategoryCTA  />
            )}
            <ResourceCategorySection
                category={category}
                categoryName={category.name}
                resources={resourcesInCategory}
                // className={className}
            />
        </>
    );
}
