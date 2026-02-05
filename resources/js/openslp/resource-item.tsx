import { incrementClickedCount as incrementClickedCountRoute } from '@/actions/App/Http/Controllers/HomeController';
import LanguagePill from '@/components/language-pill';
import PricingPill from '@/components/pricing-pill';
import ResourceImage from '@/components/resource-image';
import TargetAudiencePill from '@/components/target-audience-pill';
import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { show } from '@/routes/tags';
import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import React from 'react';
import { LuDownload, LuExternalLink } from 'react-icons/lu';
import VerifiedBadge from '@/components/verified-badge';

type Props = {
    className?: string;
    resource: Resource;
};

const ResourceItem: React.FC<Props> = ({ className = '', resource }: Props) => {
    const {
        // searchQuery,
        // setSearchQuery,
        // setPricing,
        // setAudience,
        // toggleFeature,
        // featuresFilters,
        collapseExtraData,
        // toggleCollapseExtraData,
    } = useResources();

    async function incrementClickedCount() {
        const route = incrementClickedCountRoute(resource.id);
        await axios.post(route.url);
    }

    return (
        <div
            className={`group relative w-full ${collapseExtraData ? 'p-3 hover:bg-neutral-100' : 'gradient-grayscale rounded-xl p-5 shadow-sm ring ring-neutral-400/50 hover:bg-neutral-100'} ${className}`}
        >
            <div className={`fic gap-x-1 overflow-hidden`}>
                <div
                    className={`flex w-full min-w-0 justify-start gap-3 ${collapseExtraData ? 'flex-row items-center' : 'mb-3 flex-col'}`}
                >
                    <div className={`flex justify-between`}>
                        <ResourceImage resource={resource} />
                        {!collapseExtraData && resource.verified && (
                            <div className={`p-1`}>
                                <VerifiedBadge />
                            </div>
                        )}
                    </div>
                    <h3 className="gap-x-1 text-sm leading-6 font-semibold text-pretty sm:text-base md:max-w-[89%] md:text-lg">
                        <a
                            className={`inline hover:cursor-pointer`}
                            onClick={incrementClickedCount}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            href={resource.href}
                        >
                            <span
                                className={`font-sans text-neutral-700 opacity-100 hover:underline ${collapseExtraData ? 'underline' : ''}`}
                            >
                                {resource.name}
                            </span>
                        </a>
                        {resource.has_downloadables && (
                            <span className={`ml-1 inline-flex text-sm`}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <LuDownload />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className={`text-base`}>
                                            This resource offers downloadables.
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </span>
                        )}
                    </h3>
                </div>
            </div>
            {/*{!collapseExtraData && (*/}
            <p className={`font-body text-sm text-neutral-600`}>
                {resource.notes}
            </p>
            {/*)}*/}
            {!collapseExtraData && (
                <div className={`fic mt-4 justify-between border-t pt-4`}>
                    <div className={`fic flex-wrap gap-1`}>
                        <PricingPill pricingModel={resource.pricing_model} />
                        <TargetAudiencePill resource={resource} />
                        <LanguagePill resource={resource} />
                        {resource.tags.map((tag) => (
                            <Link
                                key={`resource-tag-${tag.id}`}
                                href={show(tag.slug)}
                            >
                                <Badge variant="secondary">#{tag.name}</Badge>
                            </Link>
                        ))}
                    </div>
                    <a
                        href={resource.href}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        className={`cursor-pointer hover:text-blue-500`}
                    >
                        <LuExternalLink />
                    </a>
                </div>
            )}
        </div>
    );
};

export default ResourceItem;
