import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { PricingModel } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';

type Props = {
    pricingModel: PricingModel;
};

const PricingPill: React.FC<Props> = ({ pricingModel }: Props) => {
    const pricingModelToColor: Record<PricingModel, string> = {
        free: 'bg-green-500 text-white',
        freemium: 'bg-yellow-500 text-white',
        paid_trial: 'bg-blue-500 text-white',
        paid_with_drops: 'bg-blue-500 text-white',
        paid: 'bg-cyan-500 text-white',
        mixed: 'bg-neutral-500 text-white',
    };

    const pricingModelToExplanation: Record<PricingModel, string> = {
        free: 'Completely free to use!',
        freemium: 'Free to use, with optional paid features.',
        paid_trial: 'Paid resource, with a free trial',
        paid_with_drops: 'Paid resource, with a free trial',
        paid: 'Paid resource.',
        mixed: 'This resource has both free and paid options.',
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge className={`${pricingModelToColor[pricingModel]}`}>
                    {humanize(pricingModel)}
                </Badge>
            </TooltipTrigger>
            <TooltipContent>
                <p>{pricingModelToExplanation[pricingModel]}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default PricingPill;
