import useMediaQuery from '@/hooks/use-media-query';
import ResourceCategorySectionWrapperInner from '@/openslp/resource-category-section-wrapper-inner';
import { ResourcesByCategory } from '@/stores/useResources';
import { Masonry as Masonic } from 'masonic';

type Props = {
    className?: string;
    filteredResourcesByCategory: ResourcesByCategory[];
};

export default function MasonryWrapper({
    filteredResourcesByCategory,
    className = '',
}: Props) {
    const { isSmall, isMedium, isLarge, is2XLarge, isXLarge } = useMediaQuery();

    function getColumnCount() {
        if (is2XLarge) {
            return 4;
        } else if (isXLarge) {
            return 3;
        } else if (isLarge) {
            return 3;
        } else if (isMedium) {
            return 2;
        } else if (isSmall) {
            return 1;
        } else {
            return 1;
        }
    }

    const columnCount = getColumnCount()

    return (
        <div className="cs-12 pt-8 px-4 md:px-9">
            <Masonic
                items={filteredResourcesByCategory}
                columnCount={columnCount}
                columnGutter={24}
                render={ResourceCategorySectionWrapperInner}
            />
        </div>
    );
}
