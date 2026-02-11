import AppLogo from '@/components/app-logo';
import AppLogoIcon from '@/components/app-logo-icon';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { about, home, team } from '@/routes';
import { Link } from '@inertiajs/react';
import React from 'react';
import { AiOutlineDiscord } from 'react-icons/ai';
import {
    LuAppWindowMac,
    LuExternalLink,
    LuHandHelping,
    LuHeart,
    LuHouse,
    LuMap,
} from 'react-icons/lu';

type Props = {
    className?: string;
};

const Footer: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div
            className={`w-full bg-gray-900 px-5 py-12 md:px-12 lg:px-24 ${className}`}
        >
            <div className={`grid12 gap-y-5 md:gap-y-0`}>
                <div className="cs-12 md:cs-5">
                    <AppLogoIcon className={`mb-8 size-36`} />
                    <AppLogo light withVersion className={`mb-8`} />
                    <div
                        className={`font-lora mb-8 flex flex-col gap-y-3 text-white`}
                    >
                        <p className="text-lg xl:text-2xl">
                            <span className="mr-1 clip-gradient-text-highlight font-bold">
                                Hello!
                            </span>
                            <span className={`ific`}>I&apos;m Kevin! </span>
                        </p>
                        <p className="text-base xl:text-xl">
                            I'm not an SLP, but{' '}
                            <a
                                className={`underline`}
                                href={'https://haerapark.com/'}
                                target={'_blank'}
                            >
                                my partner is
                            </a>
                            . I created OpenSLP to help her and other SLPs have
                            easy access to a variety of quality resources.
                        </p>
                        <p className="text-base xl:text-xl">
                            This is a curated,{' '}
                            <span className="italic">opinionated</span>{' '}
                            collection of resources made available to the
                            community, free-of-charge. The resources themselves
                            may be free or paid, but OpenSLP will always be free
                            to access.
                        </p>
                        <p className="text-base xl:text-xl">
                            If you're curious about an easier way to manage your workload, check out{" "}
                            <a
                                className={`ific gap-x-1 font-semibold tracking-tight`}
                                target={'_blank'}
                                rel={'noopener'}
                                href="https://plosive.app"
                            >
                                Plosive <LuExternalLink className={`inline`} />
                            </a>
                            {', '}a web application to help SLPs manage their
                            paperwork, scheduling, and report-writing more
                            efficiently.
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
                            OpenSLP is a free community resource maintained by{' '}
                            <a
                                className={`hidden clip-gradient-text-highlight font-semibold tracking-tight lg:inline`}
                                target={'_blank'}
                                rel={'noopener'}
                                href="https://plosive.app/discover"
                            >
                                Plosive
                            </a>
                            <a
                                className={`clip-gradient-text-highlight font-semibold tracking-tight lg:hidden`}
                                target={'_blank'}
                                rel={'noopener'}
                                href="https://plosive.app"
                            >
                                Plosive
                            </a>
                            .
                        </AlertDescription>
                    </Alert>
                </div>
                <div className="cs-12 md:cs-1" />
                <div className="grid12 cs-12 gap-x-5 gap-y-10 text-sm font-medium md:cs-6 md:gap-y-0 md:text-base lg:text-lg">
                    <div className="cs-12 md:cs-6">
                        <ul className={`flex flex-col gap-y-4`}>
                            <li
                                className={`font-bold tracking-tight text-neutral-200`}
                            >
                                About
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <LuHouse />
                                <Link prefetch disabled href={home()}>
                                    Home
                                </Link>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <LuMap />
                                <Link prefetch disabled href={about()}>
                                    About Us & Roadmap
                                </Link>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <LuHeart />
                                <Link prefetch href={team()}>
                                    Team
                                </Link>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <LuHandHelping />
                                Contribution Guidelines
                                <span
                                    className={`text-sm font-light tracking-tight opacity-50`}
                                >
                                    - In Progress
                                </span>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <AiOutlineDiscord />
                                Join The Discord
                                <span
                                    className={`text-sm font-light tracking-tight opacity-50`}
                                >
                                    - In Progress
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="cs-12 md:cs-6">
                        <ul className={`space-y-2`}>
                            <li
                                className={`font-bold tracking-tight text-neutral-200`}
                            >
                                Links
                            </li>
                            <li
                                className={`ific hidden gap-x-2 text-neutral-300 lg:block`}
                            >
                                <a
                                    className={`clip-gradient-text-highlight font-semibold tracking-tight`}
                                    target={'_blank'}
                                    rel={'noopener'}
                                    href="https://plosive.app/discover"
                                >
                                    <LuAppWindowMac className={`mr-2 inline`} />
                                    Plosive - App For SLPs
                                </a>
                            </li>
                            <li
                                className={`ific gap-x-2 text-neutral-300 lg:hidden`}
                            >
                                <a
                                    className={`clip-gradient-text-highlight font-semibold tracking-tight`}
                                    target={'_blank'}
                                    rel={'noopener'}
                                    href="https://plosive.app"
                                >
                                    Plosive - App For SLPs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
