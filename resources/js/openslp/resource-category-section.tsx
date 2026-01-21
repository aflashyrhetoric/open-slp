import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceItem from '@/openslp/resource-item';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';
import { LuGhost } from 'react-icons/lu';

type Props = {
    category: ResourceCategory
    categoryName: string
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
        <div className={`cs-12 bg-white md:cs-6 lg:cs-4 ${className}`}>
            <div
                className={`tac rounded bg-neutral-900 py-4 text-xl font-bold text-white`}
            >
                <h2>{humanize(categoryName)}</h2>
            </div>
            <p className={`text-neutral-500 text-base p-2`}>{category.description}</p>
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
