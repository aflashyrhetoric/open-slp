import AppLogo from '@/components/app-logo';
import { home, story } from '@/routes';
import type { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { LuBookmark } from 'react-icons/lu';

type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className = '' }: Props) => {
    const { resourceCount } = usePage<SharedData & { resourceCount: number }>()
        .props;

    return (
        <header
            className={`w-full px-5 pt-5 text-sm not-has-[nav]:hidden ${className}`}
        >
            <nav
                className="z-10 flex items-center justify-between shadow-md gap-4 rounded-lg px-5 py-4 outline"
                style={{
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(4px)',
                }}
            >
                <a href={home.url()}>
                    <AppLogo withVersion />
                </a>
                <p className={`ific hidden text-sm text-neutral-500 lg:inline`}>
                    <LuBookmark className={`mr-1 inline`} />
                    <span>Add OpenSLP to your bookmarks! </span>
                </p>
                <div className="font-body flex flex-col items-end">
                    <Link
                        href={story()}
                        className={`font-lora ific text-right text-xs font-medium text-balance text-neutral-600 lg:text-sm`}
                    >
                        {/*<CircleCheck className={`h-4`}  />*/}
                        About Us
                    </Link>
                    {/*<span className={`text-xs text-neutral-500 italic`}>*/}
                    {/*    {resourceCount} resources*/}
                    {/*</span>*/}
                </div>{' '}
                {/*{auth.user ? (*/}
                {/*    <Link*/}
                {/*        href={dashboard()}*/}
                {/*        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"*/}
                {/*    >*/}
                {/*        Dashboard*/}
                {/*    </Link>*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <Link*/}
                {/*            href={login()}*/}
                {/*            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"*/}
                {/*        >*/}
                {/*            Log in*/}
                {/*        </Link>*/}
                {/*        {canRegister && (*/}
                {/*            <Link*/}
                {/*                href={register()}*/}
                {/*                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"*/}
                {/*            >*/}
                {/*                Register*/}
                {/*            </Link>*/}
                {/*        )}*/}
                {/*    </>*/}
                {/*)}*/}
            </nav>
        </header>
    );
};

export default Header;
