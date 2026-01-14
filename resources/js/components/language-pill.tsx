import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    resource: Resource;
};

const LanguagePill: React.FC<Props> = ({ resource }: Props) => {
    const { supports_english, supports_korean, supports_spanish } = resource;

    return (
        <div className={`flex gap-1 text-xs`}>
            {supports_english && (
                <div
                    className={`bg-neutral-200 px-1 rounded py-1 text-[10px] text-neutral-800`}
                >
                    EN
                </div>
            )}
            {supports_spanish && (
                <div
                    className={`bg-neutral-200 px-1 rounded py-1 text-[10px] text-neutral-800`}
                >
                    ES
                </div>
            )}
            {supports_korean && (
                <div
                    className={`bg-neutral-200 px-1 rounded py-1 text-[10px] text-neutral-800`}
                >
                    KR
                </div>
            )}
        </div>
    );
};

export default LanguagePill;
