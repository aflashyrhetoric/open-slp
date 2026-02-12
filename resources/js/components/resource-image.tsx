import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

type Props = {
    resource: Resource;
    className?: string;
};

const ResourceImage: React.FC<Props> = ({
    className = '',
    resource,
}: Props) => {
    const { favicon_href } = resource;
    const { collapseExtraData } = useResources();
    const hasValidFavicon = !!favicon_href;

    const [validityOverride, setValidityOverride] = React.useState(false);

    return (
        <>
            {hasValidFavicon && !validityOverride && (
                <div
                    className={`fc rounded bg-white/50 shadow ${collapseExtraData ? 'size-4' : 'size-12 max-h-12 max-w-12'} ${className}`}
                >
                    <img
                        loading={'lazy'}
                        src={favicon_href}
                        alt=""
                        onError={() => {
                            setValidityOverride(true);
                        }}
                    />
                </div>
            )}

            {(validityOverride || !hasValidFavicon) && (
                <div
                    className={`fc ${collapseExtraData ? 'size-4' : 'size-12 max-h-12 max-w-12'} rounded bg-neutral-900 ${className}`}
                >
                    <LuExternalLink className={`text-white`}/>
                </div>
            )}
        </>
    );
};

export default ResourceImage;
