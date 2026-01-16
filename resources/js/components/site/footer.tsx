import AppLogo from '@/components/app-logo';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import React from 'react';
import { LuHandHelping, LuSmile } from 'react-icons/lu';

type Props = {
    className?: string;
};

const Footer: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div className={`w-full bg-gray-900 px-12 py-12 lg:px-24 ${className}`}>
            <div className={`grid12`}>
                <div className="cs-5">
                    <AppLogo light withVersion className={`mb-8`} />

                    <div className={`flex flex-col font-lora gap-y-3 mb-8 text-white`}>
                        <p className="text-lg">
                            <span className="mr-1 font-bold">Hello!</span>
                            <span className={`ific`}>I&apos;m Kevin! <LuSmile  className={`ml-1 rounded-full inline`}/></span>
                        </p>
                        <p className="text-base">
                            I'm not an SLP. My partner is. I created
                            OpenSLP to help her and other SLPs have easy access to quality resources.
                        </p>
                        <p className="text-base">
                            After an initial phase of gathering resources, OpenSLP will open up for community contributions.
                        </p>
                    </div>

                    <Alert
                        className={`cs-12 border-gray-600 bg-gray-800 text-white`}
                    >
                        <LuHandHelping />
                        <AlertTitle>Disclosure</AlertTitle>
                        <AlertDescription
                            className={`inline font-light text-neutral-100`}
                        >
                            OpenSLP is sponsored by{' '}
                            <a
                                className={`clip-gradient-text-highlight font-semibold tracking-tight`}
                                href="https://plosive.app"
                            >
                                Plosive
                            </a>
                            .
                        </AlertDescription>
                    </Alert>
                </div>
                <div className="cs-1" />
                <div className="grid12 cs-6">
                    <div className="cs-6">
                        <ul>
                            <li className={`mb-2 text-neutral-500`}>About</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div className="cs-6">
                        <ul>
                            <li className={`mb-2 text-neutral-500`}>About</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
