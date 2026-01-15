import React from 'react';
import { Resource } from '@/types/openslp/resource';
import ResourceItem from '@/openslp/resource-item';
import { humanize } from '@/utils/string-utils';

type Props = {
    category: string;
    resources: Resource[];
};

const ResourceCategorySection: React.FC<Props> = ({ category, resources }: Props) => {
    return (
        <div className={`cs-12 md:cs-6 lg:cs-4 bg-white outline p-2`}>
            <div className={`mb-2 font-bold text-xl font-inter`}>
                <h2>
                    {humanize(category)}
                </h2>
            </div>
            <div className="mb-4 flex flex-col">
                <div className="flex flex-col gap-2 pt-5">
                    {resources.filter(r => r.category.toLowerCase() === category.toLowerCase()).map((resource) => (
                       <ResourceItem key={`resource-item-${category}-${resource.id}`} resource={resource} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourceCategorySection;
