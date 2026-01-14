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
        adult: 'bg-green-100 text-green-800',
        all: 'bg-purple-100 text-purple-800',
    };

    return (
        <span
            className={`px-2 py-1 rounded-lg text-xs ${targetAudienceToColor[target_audience]}`}
        >
            {humanize(target_audience)}
        </span>
    );
};

export default LanguagePill;
