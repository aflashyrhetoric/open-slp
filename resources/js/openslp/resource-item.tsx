import LanguagePill from '@/components/language-pill';
import PricingPill from '@/components/pricing-pill';
import ResourceImage from '@/components/resource-image';
import TargetAudiencePill from '@/components/target-audience-pill';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Resource } from '@/types/openslp/resource';
import { getDomainFromUrl } from '@/utils/string-utils';
import React from 'react';
import { LuDownload } from 'react-icons/lu';

type Props = {
    className?: string;
    resource: Resource;
};

const ResourceItem: React.FC<Props> = ({ resource }: Props) => {
    return (
        <div className={`group relative`}>
            <div className={`ific gap-x-2`}>
                <div className={`ific`}>
                    <ResourceImage resource={resource} className={`mr-1 `}/>
                    <h3 className="text-base leading-0 font-medium">
                        <a
                            className={`font-lora underline`}
                            href={resource.href}
                        >
                            {resource.name}
                        </a>
                    </h3>
                </div>
                {resource.has_downloadables && (
                    <p className={`fc text-sm`}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <LuDownload />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>This resource offers downloadables.</p>
                            </TooltipContent>
                        </Tooltip>
                    </p>
                )}
                <PricingPill pricingModel={resource.pricing_model} />
                <span className={`text-sm text-neutral-500 tracking-tight italic`}>
                    {getDomainFromUrl(resource.href)}

                    {resource.author && <span> - {resource.author}</span>}
                </span>
            </div>

            <div className={`fic my-1 gap-x-2`}>
                <TargetAudiencePill resource={resource} />
                <LanguagePill resource={resource} />
            </div>

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
