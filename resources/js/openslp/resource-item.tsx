import PricingPill from '@/components/pricing-pill';
import { Resource } from '@/types/openslp/resource';
import React from 'react';
import { LuDownload } from 'react-icons/lu';

type Props = {
    className?: string;
    resource: Resource;
};

const ResourceItem: React.FC<Props> = ({ resource }: Props) => {
    return (
        <div className={`group relative`}>
            <div className={`ific`}>
                <h3 className="mr-2 text-lg font-semibold">
                    <a className={`underline`} href={resource.href}>
                        {resource.name}
                    </a>
                </h3>
                <PricingPill pricingModel={resource.pricing_model} />
            </div>

            {resource.author && <p className={`text-xs`}>{resource.author}</p>}
            {resource.has_downloadables && (
                <p className={`ific mx-1`}>
                    <LuDownload />
                </p>
            )}

            {resource.notes && (
                <div
                    className={`absolute -top-1/2 right-5 translate-y-2 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100`}
                >
                    poop
                </div>
            )}
        </div>
    );
};

export default ResourceItem;
