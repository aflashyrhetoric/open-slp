import AppLogo from '@/components/app-logo';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { type SharedData } from '@/types';
import { Resource } from '@/types/openslp/resource';
import { Head, usePage } from '@inertiajs/react';
import { unique } from 'radash';

export default function Welcome({
    canRegister = true,
    resources,
}: {
    canRegister?: boolean;
    resources: Resource[];
}) {
    const { auth } = usePage<SharedData>().props;

    const allResourceCategories = resources.map((r) => r.category);

    const uniqueArticleCategories = unique(allResourceCategories);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            {/*<div className="w-full max-w-full bg-[#FDFDFC] text-[#1b1b18]">*/}
            <div className="p-4 ">
                <header className="mb-6 w-full text-sm not-has-[nav]:hidden">
                    <nav className="flex items-center justify-start gap-4">
                        <AppLogo />
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
                {/*<div className="w-full max-w-full opacity-100 transition-opacity duration-750 starting:opacity-0">*/}
                <div className={``}>
                    <main className="grid12 gap-5 w-full max-w-full">
                        {uniqueArticleCategories.map((category, key) => (
                            <ResourceCategorySection
                                key={`category-${category}-${key}`}
                                category={category}
                                resources={resources}
                            />
                        ))}
                    </main>
                </div>
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
