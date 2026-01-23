import AppLogoIcon from '@/components/app-logo-icon';
import Divider from '@/openslp/divider';
import SlideTemplate from '@/pages/slide-template';
import React from 'react';
import { Resource } from '@/types/openslp/resource';

type Props = {
    className?: string;
    isDev: boolean;
    resource: Resource
};

export default function SlideMain({ isDev, resource, className = '' }: Props) {
    return (
        <SlideTemplate
            isDev={isDev}
            className={`gradient-highlight-lightest fc flex-col`}
        >
            <span className={`slide-text-2xl`}>{resource.category?.icon}</span>
            <span className={`mb-5 font-sans slide-text-xl font-bold`}>
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
};
