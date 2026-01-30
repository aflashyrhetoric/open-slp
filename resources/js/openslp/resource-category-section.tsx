import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceItem from '@/openslp/resource-item';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';
import { LuDiamond, LuGhost } from 'react-icons/lu';
import Divider from '@/openslp/divider';

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
    return (
        <div className={`cs-12 fade-in ${className}`}>
            <div
                className={`mb-3 text-2xl font-medium text-neutral-800`}
                // style={{
                //     background: category.bg_color ?? '#374151',
                // }}
            >
                <h2 className={`font-lora`}>
                    <span className={`mr-2`}>{category.icon}</span>
                    {humanize(categoryName)}
                </h2>
            </div>
            <div
                className={`gradient-highlight-lightest rounded pb-[1px] border border-amber-900 fade-in`}
            >
                <div>
                    <div className="p-4 mb-1">
                        <div className={`fc font-lora flex-col`}>
                            <span className={`tac mb-4`}>
                                {category.description}
                            </span>
                            <Divider />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-col">
                        <div className="flex flex-col gap-1">
                            {resources.length === 0 && (
                                <Alert>
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
