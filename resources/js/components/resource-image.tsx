import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    resource: Resource;
    className?: string;
};

const ResourceImage: React.FC<Props> = ({
    className = '',
    resource,
}: Props) => {
    const { og_description, favicon_href } = resource;
    const { collapseExtraData } = useResources();
    const hasValidFavicon = !!favicon_href;
    const hasValidOgDescription = og_description && og_description !== '';

    return (
        <>
            {hasValidFavicon && (
                <div
                    className={`fc rounded bg-white/50 shadow ${collapseExtraData ? 'size-4' : 'size-12'} ${className}`}
                >
                    <img
                        src={favicon_href}
                        alt={hasValidOgDescription ? og_description : ''}
                    />
                </div>
            )}

            {!hasValidFavicon && (
                <div
                    className={`fc ${collapseExtraData ? 'size-4' : 'size-12'} rounded bg-neutral-200 ${className}`}
                />
            )}
        </>
    );
};

export default ResourceImage;
