import SlideTemplate from '@/pages/slide-template';
import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    className?: string;
    isDev: boolean;
    resource: Resource;
};

const SlideHook: React.FC<Props> = ({
    isDev,
    resource,
    className = '',
}: Props) => {
    return (
        <SlideTemplate
            isDev={isDev}
            className={`gradient-highlight-lightest flex flex-col`}
        >
            <p className={`font-heading mb-24 slide-text-xl font-bold`}>
                Find more on OpenSLP.com
            </p>
            {/*<Divider className={`my-12`} />*/}
            <p
                className={`tac mb-8 font-medium slide-text-xl leading-18 tracking-tightish text-balance`}
            >
                We share cool stuff every week.
            </p>
            {/*<p className={`slide-text-xs italic text-neutral-500`}>There is literally no way for you to pay us for this.</p>*/}
            <img
                className={`absolute top-[500px]`}
                src={'/img/screenshot.png'}
            />
            {/*<p className={`tac slide-text-xl`}>👉 👉 👉 👉 👉 👉 👉</p>*/}
        </SlideTemplate>
    );
};

export default SlideHook;
