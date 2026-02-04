import { Badge } from '@/components/ui/badge';
import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    resource: Resource;
};

const LanguagePill: React.FC<Props> = ({ resource }: Props) => {
    const { supports_english, supports_korean, supports_spanish } = resource;

    return (
        <>
            {supports_english && (
                <Badge className="flex gap-1 text-xs" variant="secondary">
                    EN
                </Badge>
            )}
            {supports_spanish && (
                <Badge className="flex gap-1 text-xs" variant="secondary">
                    ES
                </Badge>
            )}
            {supports_korean && (
                <Badge className="flex gap-1 text-xs" variant="secondary">
                    KR
                </Badge>
            )}
        </>
    );
};

export default LanguagePill;
