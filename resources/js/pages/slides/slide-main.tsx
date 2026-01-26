import Divider from '@/openslp/divider';
import SlideTemplate from '@/pages/slide-template';
import { Resource } from '@/types/openslp/resource';
import { useState } from 'react';

type Props = {
    className?: string;
    isDev: boolean;
    resource: Resource;
};

export default function SlideMain({ isDev, resource, className = '' }: Props) {
    const [iframeOk, setIframeOk] = useState(true);
    const [imgOk, setImgOk] = useState(true);

    const isAPdf = resource.href?.toLowerCase().endsWith('.pdf');

    return (
        <SlideTemplate
            isDev={isDev}
            className={`gradient-highlight-lightest fc flex-col`}
        >
            {isAPdf && iframeOk && resource.href && (
                <iframe
                    src={isAPdf ? `${resource.href}#toolbar=0` : resource.href}
                    className={`mb-10 h-[500px] w-[80%] rounded-xl border-4 border-neutral-200 shadow-lg`}
                    onError={() => setIframeOk(false)}
                />
            )}
            {imgOk && resource.og_image && (
                <img
                    src={resource.og_image}
                    alt=""
                    className={`min-h-[400px] max-h-[400px] mb-5`}
                    // style={{ width: '100%', height: 'auto' }}
                    onError={() => setImgOk(false)}
                />
            )}
            {/*<span className={`slide-text-2xl`}>{resource.category?.icon}</span>*/}
            <span className={`mb-5 font-sans tac slide-text-xl font-bold`}>
                {resource.name}
            </span>
            <p
                className={`text-lora tac max-w-[80%] slide-text-md leading-[60px] text-pretty`}
            >
                {resource.notes}
            </p>
            <Divider className={`my-12`} />
        </SlideTemplate>
    );
}
