import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';

export default function ContributionGuidelines() {
    return (
        <>
            <HeadTag />
            <div className="flex min-h-screen flex-col">
                <Header />
                <div className={`p-5 sm:p-7 md:p-9`}>
                    <main className="grid12 mx-auto max-w-3xl px-0 py-10 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8 lg:py-16 xl:max-w-6xl">
                        <div className={`cs-12 w-full`}>
                            <div className="font-lora mx-auto prose prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                                <h1 className={`tac`}>
                                    Contribution Guidelines
                                </h1>
                                <hr />
                                <p className={`tac lead text-balance`}>
                                    Thank you for contributing to OpenSLP!
                                    <br />
                                </p>
                                <p>
                                    We only publish resources that both meet our
                                    quality standards{' '}
                                    <span className="italic">and</span> fit our
                                    vision for OpenSLP. Here are some guidelines
                                    to clarify what that means.
                                </p>
                                <hr />
                                <h2>Guidelines</h2>
                                <ol>
                                    <li>
                                        <span className="font-bold">
                                            Basic Standards
                                        </span>
                                        : No excessive ads, blatantly outdated
                                        or incorrect information, no piracy or paid materials or materials gained by bypassing sign-up gates, no
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
                                            Paid products are fine. Having a
                                            newsletter is fine. "Give me your
                                            e-mail to get the PDF" is not.
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
                                        sparks joy.
                                    </li>
                                </ol>
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
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
