import { incrementClickedCount as incrementClickedCountRoute } from '@/actions/App/Http/Controllers/HomeController';
import LanguagePill from '@/components/language-pill';
import PricingPill from '@/components/pricing-pill';
import ResourceImage from '@/components/resource-image';
import TargetAudiencePill from '@/components/target-audience-pill';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import { getDomainFromUrl } from '@/utils/string-utils';
import axios from 'axios';
import React from 'react';
import { LuDownload } from 'react-icons/lu';

type Props = {
    className?: string;
    resource: Resource;
};

const ResourceItem: React.FC<Props> = ({ resource }: Props) => {
    const {
        searchQuery,
        setSearchQuery,
        setPricing,
        setAudience,
        toggleFeature,
        featuresFilters,
        collapseExtraData,
        toggleCollapseExtraData,
    } = useResources();

    async function incrementClickedCount() {
        const route = incrementClickedCountRoute(resource.id);
        await axios.post(route.url);
    }

    return (
        <div className={`group relative px-3 py-1`}>
            <div className={`ific gap-x-1`}>
                <div className={`ific`}>
                    <ResourceImage resource={resource} className={`mr-1`} />
                    <h3 className="max-w-[230px] text-sm leading-5 font-semibold sm:max-w-[220px] sm:text-base md:max-w-[300px] md:text-lg lg:max-w-[400px] xl:max-w-[410px]">
                        <a
                            className={`block overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-pointer`}
                            onClick={incrementClickedCount}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            href={resource.href}
                        >
                            <span
                                className={`font-sans text-neutral-700 underline opacity-100`}
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
            </div>
            {!collapseExtraData && (
                <div className={`fic my-1 space-x-1`}>
                    <PricingPill pricingModel={resource.pricing_model} />
                    <span
                        className={`hidden text-xs tracking-tight text-neutral-500 italic lg:inline`}
                    >
                        {getDomainFromUrl(resource.href)}
                    </span>
                    {!resource.author && <span />}
                    {resource.author && (
                        <span
                            className={`text-xs tracking-tight text-neutral-500 italic`}
                        >
                            {!resource.author_page_href && (
                                <span> via {resource.author}</span>
                            )}
                        </span>
                    )}

                    <div className={`fic gap-x-2`}>
                        <TargetAudiencePill resource={resource} />
                        <LanguagePill resource={resource} />
                    </div>
                </div>
            )}
            {!collapseExtraData && (
                <p className={`font-body text-sm text-neutral-600`}>
                    {resource.notes}
                </p>
            )}
        </div>
    );
};

export default ResourceItem;
