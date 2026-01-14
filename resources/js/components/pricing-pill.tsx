import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { PricingModel } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';

type Props = {
    pricingModel: PricingModel
};

const PricingPill: React.FC<Props> = ({ pricingModel }: Props) => {
    const pricingModelToColor: Record<PricingModel, string> = {
        free: 'bg-green-100 text-green-800',
        freemium: 'bg-yellow-100 text-yellow-800',
        paid_trial: 'bg-blue-100 text-blue-800',
        paid_with_drops: 'bg-blue-100 text-blue-800',
        paid: 'bg-blue-100 text-blue-800',
        mixed: 'bg-neutral-100 text-neutral-800',
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
                <div
                    className={`fc px-2 py-1 text-xs ${pricingModelToColor[pricingModel]}`}
                >
                    {humanize(pricingModel)}
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>{pricingModelToExplanation[pricingModel]}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default PricingPill;
