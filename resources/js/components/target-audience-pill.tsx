import { Resource } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';
import React from 'react';

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

    const resolvedText = target_audience === "all" ? "All SLPs" : humanize(target_audience);

    return (
        <span
            className={`px-2 py-1 rounded-lg text-xs ${targetAudienceToColor[target_audience]}`}
        >
            {resolvedText}
        </span>
    );
};

export default LanguagePill;
