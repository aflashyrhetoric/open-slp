import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import Divider from '@/openslp/divider';
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
                <div className={`p-5 sm:p-7 md:p-9`}>
                    <main className="grid12 mx-auto max-w-3xl px-0 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8 lg:py-16 xl:max-w-6xl">
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
                            <div className="font-lora mx-auto prose prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                                <h1 className={`tac`}>What is OpenSLP?</h1>
                                <p className={`tac text-neutral-400 italic`}>About us and our plan/roadmap.</p>
                                <hr />
                                {/*<p className="lead">*/}
                                {/*    <span className="font-bold">TLDR:</span> This website curates resources that SLPs may find useful.*/}
                                {/*</p>*/}
                                <p className={`lead tac font-bold xl:text-3xl`}>
                                    Hello hello! 👋
                                </p>
                                <p className={`tac lead`}>
                                    I'm Kevin.{" "}
                                    <br className={`sm:hidden`}/>
                                    My partner is{' '}
                                    <a
                                        target={'_blank'}
                                        rel={'nofollow noopener'}
                                        href="https://haerapark.com"
                                    >
                                        Heather
                                    </a>
                                    .
                                    <br />
                                    I'm the software engineer. She's the SLP.
                                    <br />
                                    We co-created OpenSLP.
                                    <br />
                                    🫰
                                </p>
                                <div className={`fc w-full mt-8`}>
                                    <Divider className={`opacity-30`} />
                                </div>
                                <h2>The Super Short Version</h2>
                                <p className={`lead`}>
                                    WE FIND COOL STUFF AND SHARE THEM WITH SLPS
                                    FOR FREE AND WE WANT TO BUILD UP A
                                    COMMUNITY. 🤗
                                </p>
                                <h2>The Short Version</h2>
                                <ul>
                                    <li>
                                        We collect and curate quality resources
                                        and share them with you via OpenSLP.com
                                        and our newsletter.
                                    </li>
                                    <li>
                                        The long-term vision is to build up and
                                        sustain a community.
                                    </li>
                                    <li>OpenSLP is 100% free.</li>
                                </ul>

                                <h2>The Much, Much Longer Version</h2>
                                <p>Let's start with the problem.</p>
                                <p>
                                    Over the years, and by virtue of my
                                    proximity to Heather and her career, I've
                                    come to learn more about what it takes to be
                                    an SLP: a keenly diagnostic mind honed by
                                    thousands of hours of selective study across
                                    linguistics, phonetics, sociology,
                                    psychology, and anatomy. All complemented by
                                    a diplomatic eye, a compassionate heart,
                                    deep reserves of patience, and the ability
                                    to wear a dozen hats while juggling a
                                    hundred plates.
                                </p>
                                <p className={`lead`}>
                                    And yet - SLPs often find themselves
                                    constantly sparring with a lack of
                                    resources, information and clarity.
                                </p>
                                <p>
                                    Worse still - the resources that{' '}
                                    <span className="italic">are</span>{' '}
                                    available can be low-quality, out of date,
                                    hidden behind paywalls, or wedged at the
                                    bottom of an ad-riddled blog.
                                </p>
                                <p>
                                    <span className="font-bold">
                                        This should not be so.{' '}
                                    </span>
                                    Anyone in my field - tech - knows that
                                    software engineers have a distinct privilege
                                    of benefiting from an incredible landscape
                                    of quality, neatly-catalogued resources -
                                    much of it free. We have{' '}
                                    <a
                                        target={'_blank'}
                                        href="https://roadmap.sh/"
                                    >
                                        roadmaps
                                    </a>{' '}
                                    for learning new technologies, massive{' '}
                                    <a
                                        target={'_blank'}
                                        href="https://github.com/sorrycc/awesome-javascript"
                                    >
                                        community-curated resource lists
                                    </a>
                                    , and{' '}
                                    <a
                                        target={'_blank'}
                                        href="https://www.boot.dev/"
                                    >
                                        collaborative learning communities
                                    </a>
                                    .
                                </p>
                                <p className={`lead font-bold`}>
                                    What if this existed for SLPs as well?
                                </p>
                                <h2>The Plan</h2>
                                <p className={`lead`}>One thing at a time.</p>
                                <p>
                                    Trying to do everything at once is a
                                    surefire way to achieve nothing at all. So
                                    we're going to operate with a lean roadmap,
                                    paced steadily.{' '}
                                    <span className="font-bold">
                                        Simply put, that means OpenSLP is going
                                        to kiiiinda suck at first.
                                    </span>{' '}
                                    At time of writing, we only have 17
                                    resources - and like 5 of them are just
                                    calendar PDFs. But that's okay - gotta trust
                                    the process. 🤗
                                </p>
                                <p>
                                    To start, it doesn't make sense to reinvent
                                    the wheel. One of our primary goals is to
                                    provide a useful batch of resources to SLPs
                                    who visit our site. There are many useful
                                    resources out there that{' '}
                                    <span className="italic">do</span> meet the
                                    mark. So, phase one is to gather an initial
                                    bulk of lots of useful resources across many
                                    categories.
                                </p>
                                <h3>Phase 1: Gather The Goodies 🍎🍫🌹🧸</h3>
                                <p>
                                    <span className="font-bold">Goal:</span>{' '}
                                    Gather and curate an initial batch of
                                    resources that would be useful for CFYs and
                                    SLPs.
                                </p>
                                <p>
                                    This will be a mix of free and paid
                                    resources, and can include:
                                </p>
                                <ul>
                                    <li>session materials</li>
                                    <li>links to CEU course platforms</li>
                                    <li>popular SLP-oriented podcasts</li>
                                    <li>
                                        miscellaneous resources like printable
                                        calendar PDFs
                                    </li>
                                    <li>TPT resources created by others</li>
                                </ul>
                                <p>
                                    This alone will take{' '}
                                    <span className="italic">quite</span> some
                                    time - so please be patient with us as we
                                    build up OpenSLP. Also - please share this
                                    site with your colleagues!
                                </p>
                                <p className={`italic`}>
                                    <span className="font-bold">
                                        Real Quick:
                                    </span>{' '}
                                    It's worth noting that this is not a
                                    for-profit project. We do not use affiliate
                                    links or accept payment for a resource to be
                                    featured on this site.
                                </p>
                                <h3>Phase 2: Outreach</h3>
                                <p>
                                    <span className="font-bold">Goal:</span>{' '}
                                    Have real conversations with current CFYs
                                    and boots-on-the-ground SLPs. Conduct
                                    research. Learn and observe.
                                </p>
                                <p>
                                    <span className="font-bold">Goal:</span>{' '}
                                    Create a Discord community chat.
                                </p>
                                <p>
                                    A website built for a community cannot be
                                    built in isolation. Heather and I will
                                    spearhead some of the initial operations,
                                    but we will eventually want to reach out to
                                    CFYs and SLPs for a variety of questions -
                                    about their experience, their pain points,
                                    and what type of challenges they face that{' '}
                                    <span className="italic">could</span>{' '}
                                    theoretically be made easier. We may request
                                    interviews or email feedback. If there is
                                    interest, we'll likely begin opening up
                                    applications for help with moderating the
                                    Discord and curating resources.
                                </p>
                                <h3>Phase 3: Build, build, build</h3>
                                <p>
                                    <span className="font-bold">Goal:</span>{' '}
                                    Lean into our research to begin slowly
                                    creating resources ourselves.
                                </p>
                                <p>
                                    <span className="font-bold">Goal:</span> ???
                                </p>
                                <p>We'll share more when the time comes.</p>

                                <hr />
                                <p className={`tac`}>
                                    Our plan and roadmap is still under construction.
                                </p>
                                <hr />
                                {/*<p>*/}
                                {/*    In the future, we plan to create a Discord*/}
                                {/*    to facilitate a more real-time community*/}
                                {/*    online. We'd love to be able to create*/}
                                {/*    no-bs, high-quality guides to help CFYs find*/}
                                {/*    their footing, as well as a place to allow*/}
                                {/*    established clinicians to share tips on*/}
                                {/*    lesson plans, goal ideation, workflow*/}
                                {/*    discussions.*/}
                                {/*</p>*/}

                                {/*<h2>On My Role</h2>*/}
                                {/*<p>*/}
                                {/*    Kevin here! As a non-SLP, I'd like to*/}
                                {/*    clarify my role. To start: I am not the one*/}
                                {/*    who is curating resources. My main role*/}
                                {/*    there is to{' '}*/}
                                {/*    <span className="italic">filter out</span>{' '}*/}
                                {/*    resources that may not meet general quality*/}
                                {/*    standards. For example, resources that are*/}
                                {/*    clearly outdated, locked behind shady*/}
                                {/*    paywalls, etc. Generally, resource curation*/}
                                {/*    is done in two ways: firstly, I may visit*/}
                                {/*    SLP-focused forums and add selections that*/}
                                {/*    are already seemingly popular and approved.*/}
                                {/*    For example, a podcast that has dozens of*/}
                                {/*    upvotes on an SLP Reddit forum. Secondly,*/}
                                {/*    Heather may add resources herself. Our*/}
                                {/*    curation process will probably become more*/}
                                {/*    formalized, but for now, we're just trying*/}
                                {/*    to add some useful stuff,{' '}*/}
                                {/*    <span className="italic">fast.</span>*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    Next, I am the primary coordinator for the*/}
                                {/*    site and platform overall.{' '}*/}
                                {/*</p>*/}

                                {/*<h2>On Fixing What's Fixable</h2>*/}
                                {/*<p>*/}
                                {/*    There's a lot wrong with the state of the*/}
                                {/*    world right now.{' '}*/}
                                {/*</p>*/}

                                {/*<p>*/}
                                {/*    From using dollar-store baubles as tokens*/}
                                {/*    for external motivation, to using torn*/}
                                {/*    pieces of paper as a makeshift visual aid to*/}
                                {/*    assist with pronunciation. From repurposing*/}
                                {/*    a board-game (anyone down for some Pop The*/}
                                {/*    Pig? 🐷) to creating a completely new game*/}
                                {/*    out of thin air.*/}
                                {/*</p>*/}
                                {/*<p>*/}
                                {/*    It seems*/}
                                {/*    <span className="italic">*/}
                                {/*        resourcefulness*/}
                                {/*    </span>*/}
                                {/*    . An ability to make{' '}*/}
                                {/*    <span className="italic">more</span> from{' '}*/}
                                {/*    <span className="italic">less</span>, to eke*/}
                                {/*    value out of the margins.*/}
                                {/*</p>*/}
                                {/*<p className={`lead`}>*/}
                                {/*    And resourcefulness is a virtue, to be sure*/}
                                {/*    - but I've always found it bittersweet.*/}
                                {/*</p>*/}
                                {/*<p>It is often an adaptation to scarcity.</p>*/}
                                {/*<p>*/}
                                {/*    To wit, I have heard her say dozens of*/}
                                {/*    times:*/}
                                {/*</p>*/}
                                {/*<blockquote>*/}
                                {/*    I don't know,{' '}*/}
                                {/*    <span className="font-bold">*/}
                                {/*        but I'll figure it out.*/}
                                {/*    </span>*/}
                                {/*</blockquote>*/}
                                {/*<p>*/}
                                {/*    But of course, this very resourcefulness*/}
                                {/*    comes at a cost - a financial and*/}
                                {/*    time-consuming cost that many SLPs know all*/}
                                {/*    too well. From dusting off forgotten games*/}
                                {/*    pulled from the forgotten corner of the*/}
                                {/*    forgotten bookshelf, to scouring the*/}
                                {/*    internet for TPT deals, printable PDFs,*/}
                                {/*    flash cards. Sifting through ad-ridden*/}
                                {/*    blogs, template packs, and more - all to*/}
                                {/*    find something usable.*/}
                                {/*</p>*/}

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
