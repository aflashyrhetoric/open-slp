import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { type SharedData } from '@/types';
import { Resource } from '@/types/openslp/resource';
import { usePage } from '@inertiajs/react';
import { unique } from 'radash';

export default function Story({
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
            <HeadTag />
            <div className="flex min-h-screen flex-col">
                <Header />
                <div className={`p-9`}>
                    <main className="grid12 mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8 lg:py-16 xl:max-w-6xl">
                        {/*<Alert className={`cs-12`}>*/}
                        {/*    <LuCircleHelp />*/}
                        {/*    <AlertTitle>What is OpenSLP?</AlertTitle>*/}
                        {/*    <AlertDescription>*/}
                        {/*        Started in 2026, we finds useful resources*/}
                        {/*        across the web for SLPs to use - from*/}
                        {/*        downloadable goodies to amazing apps.*/}
                        {/*    </AlertDescription>*/}
                        {/*</Alert>*/}

                        <div className={`cs-12 w-full`}>
                            <div className="font-lora mx-auto prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                                <h1>What is this?</h1>
                                <p className="lead">
                                    <span className="font-bold">TLDR:</span> This website curates resources that SLPs may find useful.
                                </p>
                                <p>
                                    Hello! I'm Kevin. I'm not an SLP, but my
                                    partner is. I'm a software engineer.
                                </p>
                                {/*<p>We need more community.</p>*/}
                                {/*<p><span className="font-bold">So, what is OpenSLP?</span></p>*/}
                                {/*<blockquote>"So, you just get all of that for free?"</blockquote>*/}
                                {/*<p>Yes. And that's not okay.</p>*/}
                                {/*<h2>Simple Mission Statement</h2>*/}
                                {/*<p className={`lead`}>I want to use some of the same</p>*/}
                            </div>
                        </div>
                    </main>
                </div>

                <Footer className={`flex-1 grow`} />
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
