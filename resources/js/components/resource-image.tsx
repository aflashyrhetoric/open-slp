import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    resource: Resource;
    className?: string
};

const ResourceImage: React.FC<Props> = ({ className = "", resource }: Props) => {
    const { og_description, og_image } = resource;
    const hasValidOgImage = og_image && og_image !== '';
    const hasValidOgDescription = og_description && og_description !== '';
    return (
        <>
            {hasValidOgImage && (
                <div
                    className={` ${className}`}
                >
                    <img src={og_image} className={`h-6 w-6 rounded`} alt={hasValidOgDescription ? og_description : ""} />
                </div>
            )}
            {!hasValidOgImage && (
                <div
                    className={` ${className}`}
                >
                    {/* Invisible square to fill up space*/}
                    <div className={`h-6 bg-neutral-100 rounded w-6`} />
                </div>
            )}
        </>
    );
};

export default ResourceImage;
