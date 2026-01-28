import AppLogo from '@/components/app-logo';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { story, team } from '@/routes';
import { Link } from '@inertiajs/react';
import React from 'react';
import { LuExternalLink, LuHandHelping, LuSmile } from 'react-icons/lu';
import AppLogoIcon from '@/components/app-logo-icon';
import NewsletterSignup from '@/components/site/newsletter-signup';
import { IoLogoDiscord } from 'react-icons/io5';
import { AiOutlineDiscord } from 'react-icons/ai';

type Props = {
    className?: string;
};

const Footer: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div className={`w-full bg-gray-900 px-5 md:px-12 py-12 lg:px-24 ${className}`}>
            <div className={`grid12 gap-y-5 md:gap-y-0`}>
                <div className="cs-12 md:cs-5">
                    <AppLogoIcon className={`size-36 mb-8`}/>
                    <AppLogo light withVersion className={`mb-8`} />
                    <div
                        className={`font-lora mb-8 flex flex-col gap-y-3 text-white`}
                    >
                        <p className="text-lg xl:text-2xl">
                            <span className="mr-1 font-bold clip-gradient-text-highlight">Hello!</span>
                            <span className={`ific`}>
                                I&apos;m Kevin!{' '}
                                <LuSmile
                                    className={`ml-1 inline rounded-full`}
                                />
                            </span>
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
                            collection. These resources are currently ONLY for
                            pediatric and school-based SLPs, but we plan to
                            expand. We will also explore ways to open up curation to the broader community.
                        </p>
                        <p className="text-base xl:text-xl">
                            I also developed a website called{' '}
                            <a
                                className={`ific gap-x-1 font-semibold tracking-tight`}
                                target={'_blank'}
                                rel={'noopener'}
                                href="https://plosive.app"
                            >
                                Plosive <LuExternalLink className={`inline`} />
                            </a>{' '}
                            to help SLPs manage their caseloads and paperwork
                            more efficiently.
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
                                className={`hidden lg:inline clip-gradient-text-highlight font-semibold tracking-tight`}
                                target={'_blank'}
                                rel={'noopener'}
                                href="https://plosive.app/discover"
                            >
                                Plosive
                            </a>
                            <a
                                className={`lg:hidden clip-gradient-text-highlight font-semibold tracking-tight`}
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
                <div className="grid12 cs-12 md:cs-6 gap-x-5 gap-y-10 md:gap-y-0 text-sm md:text-base lg:text-lg font-medium">
                    <div className="cs-12 md:cs-6">
                        <ul className={`flex flex-col gap-y-4`}>
                            <li
                                className={`font-bold tracking-tight text-neutral-200`}
                            >
                                About
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <Link prefetch disabled href={story()}>About Us & Roadmap</Link>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                <Link prefetch href={team()}>Team</Link>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                Contribution Guidelines
                                <span
                                    className={`text-sm font-light tracking-tight opacity-50`}
                                >
                                    - In Progress
                                </span>
                            </li>
                            <li className={`ific gap-x-2 text-neutral-300`}>
                                Join The Discord <AiOutlineDiscord />
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
                            <li className={`hidden lg:block ific gap-x-2 text-neutral-300`}>
                                <a
                                    className={`clip-gradient-text-highlight font-semibold tracking-tight`}
                                    target={'_blank'}
                                    rel={'noopener'}
                                    href="https://plosive.app/discover"
                                >
                                    Plosive - App For SLPs
                                </a>
                            </li>
                            <li className={`lg:hidden ific gap-x-2 text-neutral-300`}>
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
