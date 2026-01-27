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
                                <h1 className={`tac`}>What is OpenSLP?</h1>
                                <hr />
                                {/*<p className="lead">*/}
                                {/*    <span className="font-bold">TLDR:</span> This website curates resources that SLPs may find useful.*/}
                                {/*</p>*/}
                                <p className={`lead xl:text-3xl tac font-bold`}>
                                    Hello hello! 👋
                                </p>
                                <p className={`tac lead`}>
                                    I'm Kevin. My partner is <a href="https://haerapark.com">Heather</a>.
                                    <br/>
                                    I'm the software engineer. She's the SLP.
                                    <br/>
                                    Together, we co-created OpenSLP.
                                    <br/>
                                    ❤️🫰
                                </p>
                                <h2>The Story</h2>
                                <p>
                                    Over the years, and by virtue of my
                                    proximity to Heather and her work, I've come
                                    to learn and appreciate more about what it
                                    takes to be an SLP: a keenly diagnostic
                                    mind, sharpened by a thousand hours of
                                    selective study across linguistics, phonetics,
                                    sociology, psychology, and anatomy. A
                                    compassionate heart. A deep reserve of
                                    patience and the ability to wear a dozen
                                    hats while juggling a hundred plates.{' '}
                                </p>
                                <p>
                                    Of course, this can vary by clinician and
                                    setting, but I've noticed that there seems to be a near-universal quality shared by
                                    all SLPs:{" "}
                                    <span className="italic">
                                        resourcefulness
                                    </span>
                                    . An ability to make <span className="italic">more</span> from <span className="italic">less</span>, to eke value out of the margins.
                                </p>
                                <p className={`lead`}>
                                    And resourcefulness is a virtue, to be sure - but I've always found it bittersweet.
                                </p>
                                <p>
                                    It is often an adaptation to scarcity.
                                </p>
                                <p>
                                    To wit, I have heard her say dozens of
                                    times:
                                </p>
                                <blockquote>
                                    I don't know,{' '}
                                    <span className="font-bold">
                                        but I'll figure it out.
                                    </span>
                                </blockquote>
                                <p>
                                    From using dollar-store baubles as tokens
                                    for external motivation, to using torn
                                    pieces of paper as a makeshift visual aid to
                                    assist with pronunciation. From repurposing
                                    a board-game (anyone down for some Pop The
                                    Pig? 🐷) to creating a completely new game
                                    out of thin air. All for her students.
                                </p>
                                <p>
                                    But of course, this very resourcefulness
                                    comes at a cost - a financial and time-consuming cost that many SLPs know
                                    all too well. From dusting off forgotten
                                    games pulled from the forgotten corner of
                                    the forgotten bookshelf, to scouring the
                                    internet for TPT deals, printable PDFs,
                                    flash cards. Sifting through ad-ridden blogs, template packs, and more - all to find something usable.
                                </p>

                                <h2>The Insight</h2>
                                <p>As a software engineer, I'm privileged to say that I've never had to endure this issue.</p>

                                <h2>Our Hope</h2>
                                <p></p>
                                <p>
                                    I created OpenSLP to help Heather and other
                                    SLPs/CFYs have access to all the great stuff
                                    that's out there.
                                </p>
                                <p></p>
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
