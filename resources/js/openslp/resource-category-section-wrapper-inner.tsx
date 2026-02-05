import ResourceCategorySection from '@/openslp/resource-category-section';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import { ResourcesByCategory } from '@/stores/useResources';

type Props = {
    index?: number;
    data: ResourcesByCategory;
    width?: number;
};

export default function ResourceCategorySectionWrapperInner({
    // index,
    data,
    // width,
}: Props) {
    const { category, resourcesInCategory } = data;
    return (
        <ResourceCategorySection
            category={category}
            categoryName={category.name}
            resources={resourcesInCategory}
            // className={className}
        />
    );
}
