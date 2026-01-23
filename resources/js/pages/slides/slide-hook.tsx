import { AnimatedBeamMultipleOutputDemo } from '@/components/site/home-animated-beam';
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
            className={`gradient-highlight-lightest fc flex-col`}
        >
            <p className={`font-heading mb-10 slide-text-xl font-bold`}>
                Hey SLPs.
            </p>
            <p className={`tac mb-15 slide-text-lg leading-18 tracking-tightish`}>
                We share resources you can use.
                <br /> Every week. For free.
            </p>
            <p className={`slide-text-xs italic text-neutral-500`}>There is literally no way for you to pay us for this.</p>

            <p className={`tac mb-10 slide-text-md`}>
                Swipe left to see this week's resource.
            </p>
            <p className={`tac slide-text-md`}>→ → → → → → →</p>
            {/*<p className={`tac slide-text-xl`}>👉 👉 👉 👉 👉 👉 👉</p>*/}
        </SlideTemplate>
    );
};

export default SlideHook;
