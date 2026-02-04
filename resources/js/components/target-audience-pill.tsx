import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Resource } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';

type Props = {
    resource: Resource;
};

const TargetAudiencePill: React.FC<Props> = ({ resource }: Props) => {
    const { target_audience } = resource;

    const targetAudienceToColor = {
        pediatric: 'bg-blue-100 text-blue-800',
        medical: 'bg-green-100 text-green-800',
        all: 'bg-cyan-100 text-cyan-800',
    };

    const resolvedText =
        target_audience === 'all' ? 'All' : humanize(target_audience);

    const targetAudienceToDescription = {
        pediatric:
            'This resource is most relevant to SLPs working with pediatric populations.',
        medical:
            'This resource is most relevant to SLPs working in medical settings.',
        all: 'Relevant to all SLPs.',
    };

    // ${targetAudienceToColor[target_audience]}

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge
                    className={`ific tracking-tight`}
                    variant={"secondary"}
                >
                    {resolvedText}
                </Badge>
            </TooltipTrigger>
            <TooltipContent>
                <p className={`text-base`}>{targetAudienceToDescription[target_audience]}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default TargetAudiencePill;
