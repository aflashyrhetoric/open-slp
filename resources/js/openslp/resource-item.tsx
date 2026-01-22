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
    const route = 'incrementClickedCount';

    function incrementClickedCount() {
        fetch(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            route('incrementClickedCount', {
                id: resource.id,
            }),
        );
    }

    return (
        <div className={`group relative px-3 py-1`}>
            <div className={`ific gap-x-1`}>
                <div className={`ific`}>
                    <ResourceImage resource={resource} className={`mr-1`} />
                    <h3 className="text-sm sm:text-base md:text-lg leading-5 max-w-[230px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[400px] font-semibold">
                        <button
                            onClick={() => incrementClickedCount()}
                            className={`w-full max-w-full`}
                        >
                            <a
                                className={`block overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-pointer`}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                href={resource.href}
                            >
                                <span
                                    className={`font-sans text-black underline opacity-100`}
                                >
                                    {resource.name}
                                </span>
                            </a>
                        </button>
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
            <div className={`fic space-x-1`}>
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
                        {/*{resource.author_page_href && (*/}
                        {/*    <span>*/}
                        {/*        <a*/}
                        {/*            target={`_blank`}*/}
                        {/*            rel={`noopener noreferrer`}*/}
                        {/*            className={`underline`}*/}
                        {/*            href={resource.author_page_href}*/}
                        {/*        >*/}
                        {/*            via {resource.author}*/}
                        {/*        </a>{' '}*/}
                        {/*    </span>*/}
                        {/*)}*/}
                    </span>
                )}

                <div className={`fic gap-x-2`}>
                    <TargetAudiencePill resource={resource} />
                    <LanguagePill resource={resource} />
                </div>
            </div>
            <p className={`font-body mt-1 text-sm text-neutral-600`}>
                {resource.notes}
            </p>

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
