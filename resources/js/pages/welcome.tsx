import AppLogo from '@/components/app-logo';
import Footer from '@/components/site/footer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { type SharedData } from '@/types';
import { Resource } from '@/types/openslp/resource';
import { Head, usePage } from '@inertiajs/react';
import { unique } from 'radash';
import { LuCircleHelp } from 'react-icons/lu';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';

export default function Welcome({
    canRegister = true,
    resources,
    resourceCount = 0,
}: {
    canRegister?: boolean;
    resources: Resource[];
    resourceCount: number;
}) {
    const { auth } = usePage<SharedData>().props;

    const allResourceCategories = resources.map((r) => r.category);

    const uniqueArticleCategories = unique(allResourceCategories);

    return (
        <>
            <HeadTag title={"Welcome"} />
            <div className="flex min-h-screen flex-col">
                <Header />
                <div className={`p-9`}>
                    <main className="grid12 w-full max-w-full gap-5">
                        <Alert className={`cs-12`}>
                            <LuCircleHelp />
                            <AlertTitle>What is OpenSLP?</AlertTitle>
                            <AlertDescription>
                                Started in 2026, we finds useful resources across the web for SLPs to use - from downloadable goodies to amazing apps.
                            </AlertDescription>
                        </Alert>



                        {uniqueArticleCategories.map((category, key) => (
                            <ResourceCategorySection
                                key={`category-${category}-${key}`}
                                category={category}
                                resources={resources}
                            />
                        ))}
                    </main>
                </div>

                <Footer className={`grow flex-1`} />
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
