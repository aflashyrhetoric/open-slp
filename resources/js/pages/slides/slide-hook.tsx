import { AnimatedBeamMultipleOutputDemo } from '@/components/site/home-animated-beam';
import SlideTemplate from '@/pages/slide-template';
import { Resource } from '@/types/openslp/resource';
import React from 'react';
import Divider from '@/openslp/divider';

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
            <p className={`font-heading mb-10 slide-text-2xl font-bold`}>
                Hey SLPs.
            </p>
            {/*<Divider className={`my-12`} />*/}
            <p className={`tac mb-12 slide-text-md leading-18 tracking-tightish`}>
                We find and share resources you can use.
                <br /> <span className="font-bold">For Free.</span> Every Week.
            </p>
            {/*<p className={`slide-text-xs italic text-neutral-500`}>There is literally no way for you to pay us for this.</p>*/}

            <p className={`tac mb-10 slide-text-md`}>
                Swipe left to see this week's resource.
            </p>
            <img className={`absolute top-[575px]`}src={'/img/screenshot.png'} />
            {/*<p className={`tac slide-text-xl`}>👉 👉 👉 👉 👉 👉 👉</p>*/}
        </SlideTemplate>
    );
};

export default SlideHook;
