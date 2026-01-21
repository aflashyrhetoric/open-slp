import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { PricingModel } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';
import { LuDot, LuSlash } from 'react-icons/lu';

type Props = {
    pricingModel: PricingModel;
};

const PricingPill: React.FC<Props> = ({ pricingModel }: Props) => {
    function getTextColor(pricingModel: PricingModel): string {
        switch(pricingModel) {
            case 'paid':
                return 'text-cyan-600';
            default:
                return 'text-neutral-500';
        }
    }

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
                <span className={`tracking-tight italic ific text-xs font-light ${getTextColor(pricingModel)}`}>
                    {humanize(pricingModel)}<LuDot className={`text-neutral-300 text-xs inline`} />
                </span>
            </TooltipTrigger>
            <TooltipContent>
                <p>{pricingModelToExplanation[pricingModel]}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default PricingPill;
