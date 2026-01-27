import AppLogo from '@/components/app-logo';
import type { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import React from 'react';
import { BadgeCheckIcon, CircleCheck } from 'lucide-react';

type Props = {
    className?: string;
};

const Header: React.FC<Props> = ({ className = '' }: Props) => {
    const { resourceCount } = usePage<SharedData & { resourceCount: number }>()
        .props;

    return (
        <header className={`w-full px-5 pt-5 text-sm not-has-[nav]:hidden ${className}`}>
            <nav className="flex z-10 items-center justify-between gap-4 rounded-lg py-4 px-5 outline"
                 style={{
                     background: 'rgba(255, 255, 255, 0.3)',
                     backdropFilter: 'blur(1px)',

                 }}
            >
                <AppLogo withVersion /> <span className={`hidden lg:inline text-sm text-neutral-500`}>Bookmark this page! 🤗</span>
                <div className="flex flex-col items-end font-body">
                    <span className={`text-xs text-balance lg:text-sm font-lora ific text-right text-neutral-600 font-medium`}>
                        {/*<CircleCheck className={`h-4`}  />*/}
                        Curated Resources For SLPs
                    </span>
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
