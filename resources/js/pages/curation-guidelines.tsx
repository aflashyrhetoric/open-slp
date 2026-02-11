import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { team } from '@/routes';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { LuLock } from 'react-icons/lu';

export default function CurationGuidelines() {
    const [password, setPassword] = useState('');
    const XAJFOE = 'chubbypuppy';

    if (password !== XAJFOE) {
        return (
            <div className={`fc h-screen w-screen`}>
                <FieldSet>
                    <FieldLabel className={`text-3xl`}>
                        Enter password to view
                    </FieldLabel>
                    <Input
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder={'Enter password to view'}
                    />
                </FieldSet>
            </div>
        );
    }

    return (
        <>
            <HeadTag />
            <div className="flex min-h-screen flex-col">
                <Header />
                <div className={`p-5 sm:p-7 md:p-9`}>
                    <main className="grid12 mx-auto max-w-3xl px-0 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8 lg:py-16 xl:max-w-6xl">
                        <div className={`cs-12 w-full`}>
                            <div className="font-lora mx-auto prose prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                                <h1 className={`tac`}>Curation Guidelines</h1>
                                <p
                                    className={`fc w-full gap-x-2 text-red-500 italic`}
                                >
                                    <LuLock />
                                    Internal Use Only.
                                </p>
                                <hr />
                                <p className={`tac lead`}>
                                    Thank you for contributing to OpenSLP!
                                    <br />
                                    These are the internal guidelines we use to
                                    curate resources.
                                </p>
                                <hr />
                                <h2>🎯 Mission Statement</h2>
                                <p className={`lead`}>
                                    <span className="font-bold">
                                        Short-Term:
                                    </span>{' '}
                                    To find great resources and make them easy
                                    to access for the SLP community through the
                                    OpenSLP platform.
                                    <br />
                                    <br />
                                    <span className="font-bold">
                                        Long-Term:
                                    </span>{' '}
                                    To build and facilitate a community of SLPs
                                    sharing resources, wisdom, and advice for
                                    the benefit of all.
                                </p>
                                <h2>🤠 Expectations</h2>
                                <p>
                                    For all of us, maintaining this platform is
                                    unpaid volunteer work. We know that.
                                </p>
                                <p>
                                    OpenSLP aims to be a community that meets
                                    SLPs where they are - that includes
                                    contributors. Feel free to drop in and out
                                    as you please. There is no hard quota or
                                    minimum expectation. Want to contribute
                                    twice a week? Great! Once every four months?
                                    Amazing!
                                </p>
                                <figure>
                                    <img
                                        src={'/img/dolphin.gif'}
                                        alt="Cowboy Hat Face Emoji"
                                        className={`rounded`}
                                    />
                                    <figcaption>
                                        How we want you to feel about being an
                                        OpenSLP Contributor 🤗
                                    </figcaption>
                                </figure>
                                <p>
                                    In lieu of that, what we{' '}
                                    <span className="italic">do</span> have is
                                    an expectation of quality and
                                    thoughtfulness. Our primary request is that
                                    when you <span className="italic">do</span>{' '}
                                    contribute a resource, that you do so very
                                    thoughtfully and according to our
                                    guidelines.
                                </p>
                                <h2>The 5 Rules</h2>
                                <p>
                                    We don't want{' '}
                                    <span className="font-bold">every</span>{' '}
                                    resource, we want{' '}
                                    <span className="font-bold">good</span>{' '}
                                    resources. To that end, omission is as
                                    important as inclusion.
                                </p>
                                <p className="lead">
                                    One excellent resource is better than ten
                                    mediocre ones!
                                </p>
                                <p>
                                    Therefore, a resource being considered for
                                    inclusion should follow ALL rules to ensure
                                    standards of quality.
                                </p>
                                <ol>
                                    <li>
                                        <span className="font-bold">
                                            Basic Standards
                                        </span>
                                        : No excessive ads, blatantly outdated
                                        or incorrect information, no piracy, no
                                        racism, sexism, ageism, homophobia, etc.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            No "Gates," Paywalls or Sign-Ups
                                        </span>
                                        : "Basic" resources, like newsletters or
                                        guides, should not be gated behind
                                        paywalls or sign-up forms.
                                        <p className={`text-base italic`}>
                                            Paid products are fine. "Give me
                                            your e-mail to get the PDF" is not.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            60 Second Rule
                                        </span>
                                        : If it's likely that an SLP exploring a
                                        resource will take more than sixty
                                        seconds to{' '}
                                        <span className="italic">
                                            understand
                                        </span>{' '}
                                        the benefit being offered, let's not
                                        include it for now.
                                        <p className={`text-base italic`}>
                                            Many resources are high-value, but
                                            hard to pick-up or understand. We
                                            still want those eventually, but
                                            we'll need a way to highlight them
                                            differently.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            No Ideological Content
                                        </span>
                                        : Some assets in this space contain
                                        ideological or religious content that
                                        may not be a great fit for a resource
                                        meant for broad use.
                                        <p className={`text-base italic`}>
                                            For example, a pack of flash cards
                                            that contain tons of cards specific
                                            to a religion.
                                        </p>
                                        <p className={`text-base italic`}>
                                            Note: It is OpenSLP's stance that
                                            resources relating to - or adjacent
                                            to - topics like diversity, equity,
                                            and inclusion are not "ideological,"
                                            but essential education. These
                                            resources are welcome and allowed.
                                        </p>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Most Importantly - Actually Useful
                                        </span>
                                        : A resource may satisfy all the
                                        criteria above - but if it's not useful,
                                        then what's the point? It should
                                        actually be something that is useful,
                                        solves a problem, or maybe even just
                                        sparks joy.{' '}
                                        <span className="font-bold text-cyan-600">
                                            {' '}
                                            An SLP must be involved in this
                                            assessment.
                                        </span>
                                    </li>
                                </ol>
                                <h2>💯 Best Practices</h2>
                                <p className={`lead`}>
                                    Here are some guidelines on how to enter
                                    resources in such a way that it maximizes
                                    usefulness to the SLPs who visit.
                                </p>
                                <ol>
                                    <li>
                                        <span className="font-bold">
                                            Direct Link
                                        </span>
                                        : Link directly to the resource if
                                        possible. For example: <br />
                                        <pre>
                                            <code>
                                                ✅ GOOD: whatever.com/guide.pdf
                                            </code>
                                            <br />
                                            <code>🚫 BAD: whatever.com</code>
                                        </pre>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Using Categories
                                        </span>
                                        : A resource can only be in ONE category
                                        (e.g. "Session Materials"). Check out
                                        the existing Resource Categories and see
                                        which one fits best. If none of them
                                        fit, create a new Resource Category!
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Using Tags (aka "hashtags")
                                        </span>
                                        : A resource can have MANY tags (e.g.
                                        "teletherapy-friendly" and "multilingual
                                        support"). Add Add/create a tag to a
                                        resource ONLY if you think it is
                                        something that an SLP would
                                        realistically want to see more of. If
                                        nothing else - please be very thoughtful
                                        about tags, and use them sparingly. They
                                        can become messy{' '}
                                        <span className="italic">
                                            very quickly.
                                        </span>{' '}
                                        Below are some examples.
                                        <p
                                            className={`lead font-sans font-semibold`}
                                        >
                                            Example 1: You found a resource
                                            that's great for teletherapy. Since
                                            SLPs may want to see a collection of
                                            other stuff that is also great for
                                            teletherapy, that is the perfect
                                            use-case for a Tag!
                                        </p>
                                        <pre>
                                            <code>
                                                ✅ INFORMATIVE TAG:
                                                teletherapy-friendly
                                            </code>
                                            <br />
                                            <code>
                                                ✅ ANOTHER INFORMATIVE TAG:
                                                great-for-teletherapy
                                            </code>
                                            <br />
                                            <code>
                                                🚫 LESS CLEAR TAG: teletherapy
                                            </code>
                                            <br />
                                            <code>
                                                🚫 VERBOSE TAG:
                                                really-good-for-teletherapy
                                            </code>
                                            <br />
                                            <code>
                                                🚫 OVERLY SPECIFIC TAG:
                                                teletherapy-articulation-games-for-sh-phoneme
                                            </code>
                                        </pre>
                                        <p
                                            className={`lead font-sans font-semibold`}
                                        >
                                            Example 2: You found a resource that
                                            would be very useful if it's printed
                                            out and laminated.
                                        </p>
                                        <pre>
                                            <code>
                                                ✅ INFORMATIVE TAG:
                                                lamination-recommended
                                            </code>
                                            <br />
                                            <code>
                                                🚫 LESS CLEAR TAG: lamination
                                            </code>
                                            <br />
                                            <code>
                                                🚫 VERBOSE TAG:
                                                laminate-this-and-stick-it-on-your-wall
                                            </code>
                                            <br />
                                            <code>
                                                🚫 OVERLY SPECIFIC TAG:
                                                laminatable-articulation-cheat-sheet-pdfs
                                            </code>
                                        </pre>
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Linking to collections or bundles
                                        </span>
                                        : Sometimes the resources are,
                                        themselves, collections of other links.
                                        In this case, use the Resource
                                        Collection category.
                                    </li>
                                </ol>
                                <h2>📁 Clarifying Categories vs Tags</h2>
                                <p>
                                    This can get confusing. Let's look at an
                                    example.
                                </p>
                                <p>
                                    Suppose you find an interactive website for
                                    speech games.
                                </p>
                                <p>
                                    That would belong to the
                                    <span className="font-bold">
                                        {' '}
                                        Session Materials - Interactive
                                    </span>{' '}
                                    category. It is not also a calendar, or a
                                    guide, or related to CEUs, etc.
                                </p>
                                <p>
                                    However, that resource may also fit certain{' '}
                                    <span className="italic">tags</span>, such
                                    as:
                                </p>
                                <ul>
                                    <li>#teletherapy-friendly</li>
                                    <li>#articulation</li>
                                    <li>#games</li>
                                </ul>
                                <p>
                                    Adding these tags allows us the system to
                                    better understand what these resources{' '}
                                    <span className="italic">are</span>, and
                                    lets us build features to help surface them
                                    more easily to SLPs. (For example, clicking
                                    a tag to see related resources.)
                                </p>
                                <h2>👯 Team Dynamics</h2>
                                <p>
                                    When you first join, we may review your
                                    first few submissions and give constructive
                                    feedback or tips just to ensure that you've
                                    got the hang of things. After that, you're
                                    free to add more as you see fit.
                                </p>
                                <p>
                                    If there are any unusual or atypical
                                    resources that you're not sure about, please
                                    ping us first - your submissions do reflect
                                    on OpenSLP as a whole.
                                </p>
                                <p>
                                    If ever we decide that a resource submission
                                    doesn't quite meet our criteria, we may
                                    remove it.
                                </p>
                                <h2>🤔 Great! What's Next?</h2>
                                <p className={`lead`}>
                                    Please let us know if you'd like your name
                                    to be added to the{' '}
                                    <Link prefetch href={team()}>
                                        OpenSLP Team Page
                                    </Link>{' '}
                                    as part of the Community Team section.
                                </p>
                                <p>
                                    If you do, please email us at
                                    contact@plosive.app:
                                </p>
                                <ul>
                                    <li>
                                        how you'd like your name to appear
                                        (fullname, first name only, nickname,
                                        with or without CCC's, etc.)
                                    </li>
                                    <li>
                                        optionally, a photo you'd like to use
                                        (you, your pet, your car, whatever you
                                        like!)
                                    </li>
                                    <li>
                                        optionally, a short bio about yourself
                                    </li>
                                    <li>
                                        optionally, social media links that you
                                        may want to share (websites, LinkedIn,
                                        etc)
                                    </li>
                                </ul>
                                <p>
                                    We will include whatever you do or do not
                                    choose to send.
                                </p>
                                <p>
                                    Lastly, we understand some SLPs may want to
                                    use this as part of their tenure portfolios
                                    and overall online profiles - please feel
                                    free to do so.
                                </p>

                                <h2>❤️ That's all.</h2>
                                <p>
                                    Thank you for helping us build OpenSLP into
                                    something meaningful for the community.
                                </p>
                                <figure>
                                    <img
                                        src={'/img/smiling-cat.gif'}
                                        alt="smiling cat"
                                        className={`rounded`}
                                    />
                                </figure>
                            </div>
                        </div>
                    </main>
                </div>

                <Footer className={`flex-1 grow`} />
            </div>
        </>
    );
}
