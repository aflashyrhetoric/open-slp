import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceItem from '@/openslp/resource-item';
import { useResources } from '@/stores/useResources';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';
import { LuGhost } from 'react-icons/lu';

type Props = {
    category: ResourceCategory;
    categoryName: string;
    resources: Resource[];
    className?: string;
};

const ResourceCategorySection: React.FC<Props> = ({
    category,
    categoryName,
    resources,
    className = '',
}: Props) => {
    const { collapseExtraData } = useResources();

    return (
        <div className={`cs-12 fade-in ${className}`}>
            <div
                className={`fc px-4 text-2xl font-medium text-neutral-800`}
                // style={{
                //     background: category.bg_color ?? '#374151',
                // }}
            >
                <h2 className={`font-lora`}>
                    <span className={`mr-2`}>{category.icon}</span>
                    {humanize(categoryName)}
                </h2>
            </div>
            <div className={`rounded pb-[1px] fade-in`}>
                <div>
                    <div className="mb-1 p-4">
                        <div className={`fc font-lora flex-col`}>
                            <span className={`tac`}>
                                {category.description}
                            </span>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-col">
                        <div
                            className={`grid12 ${collapseExtraData ? 'gradient-grayscale  ring ring-neutral-300 rounded-md shadow-sm gap-0' : 'gap-5'}`}
                        >
                            {resources.length === 0 && (
                                <Alert className={`cs-12`}>
                                    <LuGhost />
                                    <AlertTitle>No resources found.</AlertTitle>
                                    <AlertDescription>
                                        Try adjusting your filters.
                                    </AlertDescription>
                                </Alert>
                            )}
                            {resources.map((resource) => (
                                <ResourceItem
                                    key={`resource-item-${categoryName}-${resource.id}`}
                                    resource={resource}
                                    className={`cs-12`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceCategorySection;
