import React from 'react';
import { Resource } from '@/types/openslp/resource';
import ResourceItem from '@/openslp/resource-item';

type Props = {
    category: string;
    resources: Resource[];
};

const ResourceCategorySection: React.FC<Props> = ({ category, resources }: Props) => {
    return (
        <div className={`cs-4`}>
            <div className={`mb-2 font-bold text-xl font-inter`}>
                <h2>
                    {category}
                </h2>
            </div>
            <div className="mb-8 flex flex-col">
                {/*<div className="bgb p-8">*/}
                {/*    <p className="font-body mb-2">*/}
                {/*        Laravel has an incredibly rich ecosystem.*/}
                {/*        <br />*/}
                {/*        We suggest starting with the following.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="bg-neutral-100 p-5">
                    {resources.map((resource) => (
                       <ResourceItem key={`resource-item-${resource.id}`} resource={resource} />
                    ))}
                    {
                        <code>
                            <pre>
                                {JSON.stringify(resources, null, 2)}
                            </pre>
                        </code>
                    }
                </div>
            </div>
        </div>
    );
};

export default ResourceCategorySection;
