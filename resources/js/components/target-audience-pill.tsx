import { Resource } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { LuDot } from 'react-icons/lu';

type Props = {
    resource: Resource;
};

const LanguagePill: React.FC<Props> = ({ resource }: Props) => {
    const { target_audience } = resource;

    const targetAudienceToColor = {
        pediatric: 'bg-blue-100 text-blue-800',
        medical: 'bg-green-100 text-green-800',
        all: 'bg-green-100 text-purple-800',
    };

    const resolvedText = target_audience === "all" ? "All" : humanize(target_audience);

    const targetAudienceToDescription = {
        pediatric: 'This resource is most relevant to SLPs working with pediatric populations.',
        medical: 'This resource is most relevant to SLPs working in medical settings.',
        all: 'Relevant to all SLPs.',
    };

    return (
        <span
            className={`px-2 py-1 tracking-tight rounded-lg text-xs ${targetAudienceToColor[target_audience]}`}
        >
            <Tooltip>
            <TooltipTrigger asChild>
                <span className={`tracking-tight ific font-light`}>
            {resolvedText}
                </span>
            </TooltipTrigger>
            <TooltipContent>
                <p>{targetAudienceToDescription[target_audience]}</p>
            </TooltipContent>
        </Tooltip>

        </span>
    );
};

export default LanguagePill;
