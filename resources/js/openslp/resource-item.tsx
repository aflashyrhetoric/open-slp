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
        <div className={`group relative shadow p-3 rounded-lg`}>
            <div className={`ific gap-x-2`}>
                <div className={`ific`}>
                    <ResourceImage resource={resource} className={`mr-1`} />
                    <h3 className="text-base font-medium">
                        <a
                            className={`font-lora block max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap`}
                            href={resource.href}
                        >
                            <span
                                className={`font-lora text-black underline opacity-100`}
                            >
                                {resource.name}
                            </span>
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
                <span
                    className={`text-xs tracking-tight text-neutral-500 italic`}
                >
                    {getDomainFromUrl(resource.href)}

                    {resource.author && <span> - {resource.author}</span>}
                </span>
            </div>
            <p className={`font-body mt-1 mb-3 text-sm text-neutral-600`}>
                {resource.notes}
            </p>

            <div className={`fic my-1 justify-between`}>
                <span
                    className={`text-xs tracking-tight text-neutral-500 italic`}
                >
                    {<span> via {resource.author}</span>}
                </span>

                <div className={`fic gap-x-2`}>
                    <TargetAudiencePill resource={resource} />
                    <LanguagePill resource={resource} />
                </div>
            </div>

            {/*{resource.notes && (*/}
            {/*    <div*/}
            {/*        className={`absolute pointer-events-none left-full min-w-[275px] max-w-[500px] top-0 z-10 rounded-md translate-y-2 bg-black text-white p-3 border opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100`}*/}
            {/*    >*/}
            {/*        <p className={`text-base leading-5`}>*/}
            {/*            {resource.notes}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default ResourceItem;
