import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Divider from '@/openslp/divider';
import { type SharedData } from '@/types';
import { Resource } from '@/types/openslp/resource';
import { usePage } from '@inertiajs/react';
import { unique } from 'radash';
import { LuComponent, LuHandHelping } from 'react-icons/lu';

export default function Team({
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
                <div className={`p-5 md:p-7 lg:p-9`}>
                    <main className="grid12 mx-auto px-4 py-10 sm:px-6 sm:py-12">
                        <div className={`cs-12 w-full`}>
                            <div className="font-lora mx-auto prose prose-lg lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                                <h1 className={`tac`}>Meet The Team</h1>
                                <div className={`grid12 font-sans md:gap-10`}>
                                    <div className="fc cs-12">
                                        <Divider />
                                    </div>
                                    <div className={`cs-12 fade-in md:cs-6`}>
                                        <figure>
                                            <img
                                                src={'/img/kevin.jpg'}
                                                alt="portrait of kevin"
                                                className={`rounded-tl-4xl rounded-br-4xl`}
                                            />
                                            <figcaption>
                                                <span className="font-bold">
                                                    Kevin Oh
                                                    <br />
                                                    Engineering & Strategy
                                                </span>{' '}
                                            </figcaption>
                                        </figure>

                                        <div
                                            className={`ific !text-xs opacity-30 w-full justify-between`}
                                        >
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                        </div>
                                        <p>
                                            I'm a software engineer with over 12
                                            years of experience, currently
                                            working as a founder and engineer at{' '}
                                            <a
                                                href="https://plosive.app"
                                                target={'_blank'}
                                            >
                                                Plosive
                                            </a>
                                            , a website built for SLPs to more
                                            easily handle their caseloads,
                                            paperwork, schedule and more. In the
                                            past, I created an online study
                                            group with over 30 members from all
                                            over the world and helped to
                                            facilitate discussion and growth,
                                            even creating dedicated video
                                            content and courses. I'm also a
                                            moderator over at the /r/webdev
                                            subreddit, which at time of writing
                                            has over 3.2M members.
                                            <br />
                                            <br />
                                            I'm excited and humbled to offer up
                                            both my technical experience and my
                                            experience building online
                                            communities to the SLP community.
                                            <br />
                                            <br />
                                            Previously, I worked at Homelight, a
                                            real estate technology company, and
                                            Nulab, a start-up building
                                            professional collaborative online
                                            software.
                                        </p>
                                    </div>

                                    <div className={`cs-12 fade-in md:cs-6`}>
                                        <figure>
                                            <img
                                                src={'/img/heather.jpg'}
                                                alt="portrait of heather"
                                                className={`rounded-tl-4xl rounded-br-4xl`}
                                            />
                                            <figcaption>
                                                <span className="font-bold">
                                                    Heather Park
                                                    <br />
                                                    Product & Community Lead
                                                </span>{' '}
                                            </figcaption>
                                        </figure>
                                        <div
                                            className={`ific !text-xs opacity-30 w-full justify-between`}
                                        >
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                            <LuComponent />
                                        </div>
                                        <p>
                                            I am a Korean-English Bilingual
                                            Speech Language Pathologist,
                                            licensed in New York since 2019. I'm
                                            currently working at the DoE to
                                            provide bilingual speech-language
                                            services. I also consult as a
                                            Product Advisor for Plosive, an
                                            online productivity platform for
                                            SLPs. <br />
                                            <br />
                                            Previously, I’ve worked at public
                                            charter schools in Harlem, adapting
                                            quickly to manage caseloads of
                                            upwards to 65+ students and
                                            strategically leveraging available
                                            resources. I’ve also worked with
                                            patients at various skilled nursing
                                            facilities, who presented with
                                            dysphagia, dysarthria, aphasia,
                                            dysphonia, dementia, etc.{' '}
                                        </p>
                                    </div>
                                </div>
                                <h2 className={`tac fade-in`}>
                                    Community Team
                                </h2>
                                <Alert>
                                    <LuHandHelping />
                                    <AlertTitle className={`text-base`}>
                                        Interested?
                                    </AlertTitle>
                                    <AlertDescription>
                                        We're not quite ready to begin accepting
                                        community team members, but we hope to
                                        soon. Please keep an eye out.
                                    </AlertDescription>
                                </Alert>
                            </div>

                            <p className="tac mt-10 text-balance text-neutral-400">
                                Please note that OpenSLP is not a company, and
                                it is not for-profit. We do not have job
                                openings. All participants - including the
                                founding team - participate voluntarily.
                            </p>
                        </div>
                    </main>
                </div>

                <Footer className={`flex-1 grow`} />
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
