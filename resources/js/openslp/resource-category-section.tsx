import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceItem from '@/openslp/resource-item';
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
    return (
        <div className={`cs-12 bg-white outline rounded-xl fade-in ${className}`}>
            <div
                className={`tac bg-neutral-800 py-4 text-2xl rounded-t-xl font-medium text-white`}
                // style={{
                //     background: category.bg_color ?? '#374151',
                // }}
            >
                <h2 className={`font-lora`}>
                    <span className={`mr-2`}>{category.icon}</span>
                    {humanize(categoryName)}
                    {/*<span className={`ml-2`}>{category.icon}</span>*/}
                </h2>
            </div>
            {/*<p className={`text-neutral-800 text-lg rounded-b mb-2 p-4`}>{category.description}</p>*/}

            <div className="p-4">
                <Alert className={`bg-neutral-700`}>
                    {/*<LuCircleHelp />*/}
                    {/*<AlertTitle>What is OpenSLP?</AlertTitle>*/}
                    <AlertDescription
                        className={`text-base text-pretty text-white`}
                    >
                        {category.description}
                    </AlertDescription>
                </Alert>
            </div>

            <div className="mb-4 flex flex-col">
                <div className="flex flex-col gap-5">
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
    );
};

export default ResourceCategorySection;
