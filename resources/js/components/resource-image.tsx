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
    const hasValidFavicon = !!favicon_href;
    const hasValidOgDescription = og_description && og_description !== '';
    return (
        <>
            {hasValidFavicon && (
                <div className={`fc bg-white/50 rounded h-5 w-5 ${className}`}>
                    <img
                        src={favicon_href}
                        alt={hasValidOgDescription ? og_description : ''}
                    />
                </div>
            )}

            {!hasValidFavicon && <div className={`fc h-5 w-5 bg-neutral-200 rounded ${className}`} />}
        </>
    );
};

export default ResourceImage;
