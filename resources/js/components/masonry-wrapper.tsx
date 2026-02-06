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

    const columnCount = getColumnCount();

    return (
        <div className="cs-12 px-4 pt-8 md:px-9">
            {filteredResourcesByCategory?.length > 0 ? (
                <Masonic
                    key={crypto.randomUUID()}
                    items={filteredResourcesByCategory}
                    columnCount={columnCount}
                    columnGutter={24}
                    render={ResourceCategorySectionWrapperInner}
                />
            ) : (
                <div
                    className={`fc gap-4 flex-col rounded-md bg-neutral-100 p-10 text-center text-neutral-700`}
                >
                    <p className={`text-4xl`}>🤔</p>
                    <p className={`text-2xl font-bold`}>No resources found.</p>
                    <p className={`text-base`}>
                        Try adjusting your filters to be less specific.
                    </p>
                </div>
            )}
        </div>
    );
}
