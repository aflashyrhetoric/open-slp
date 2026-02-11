import SlideTemplate from '@/pages/slide-template';
import { Resource } from '@/types/openslp/resource';
import React from 'react';

type Props = {
    className?: string;
    isDev: boolean;
    resource: Resource;
};

const SlideHowToUse: React.FC<Props> = ({
    isDev,
    resource,
    className = '',
}: Props) => {
    return (
        <SlideTemplate
            isDev={isDev}
            className={`gradient-highlight-lightest flex flex-col`}
        >
            <p className={`font-heading mb-10 slide-text-2xl text-balance font-bold`}>
                How To Use This Resource
            </p>
            <div className="fc grow">
                <ol
                    className={`mb-12 list-decimal slide-text-lg leading-18 tracking-tightish`}
                >
                    <li>Click the link in description.</li>
                    <li>Select an activity, like WH Questions.</li>
                    <li>Select a game, like "Build A Monster."</li>
                    <li>Click Play to enter the game.</li>
                    <li>Click Start to begin the game.</li>
                </ol>
            </div>
        </SlideTemplate>
    );
};

export default SlideHowToUse;
