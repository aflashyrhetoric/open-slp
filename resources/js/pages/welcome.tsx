import MasonryWrapper from '@/components/masonry-wrapper';
import ResourceFilterBar from '@/components/resource-filter-bar';
import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import LinkContributionForm from '@/components/site/link-contribution-form';
import NewsletterSignup from '@/components/site/newsletter-signup';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { Button } from '@/components/ui/button';
import { Highlighter } from '@/components/ui/highlighter';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { about } from '@/routes';
import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import { LuArrowDown, LuGhost } from 'react-icons/lu';

export default function Welcome({ resources }: { resources: Resource[] }) {
    const {
        resources: resourcesFromStore,
        setResources,
        filteredResourcesByCategory,
    } = useResources();

    if (resources !== resourcesFromStore) {
        setResources(resources);
    }

    const allOgImages = resources
        .filter((resource) => resource !== null && resource.og_image)
        .map((resource) => resource.og_image);

    const images =
        allOgImages.length > 0
            ? [...allOgImages, ...allOgImages, ...allOgImages].filter(
                  (ogImage) => ogImage !== null && ogImage !== undefined,
              )
            : [];

    function scrollToResources() {
        const element = document.getElementById('start-of-resources');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <HeadTag title={'Welcome'} />
            <div className="flex min-h-screen flex-col">
                <div className={``}>
                    <main className="grid12 w-full max-w-full gap-5">
                        <div className="grid12 gradient-highlight relative cs-12">
                            <div
                                className={`absolute inset-0 z-0 hidden size-full bg-cover bg-position-[50%_50%] bg-no-repeat lg:block xl:bg-position-[50%_60%]`}
                                style={{
                                    backgroundImage: `url('/img/hero.png')`,
                                }}
                            />
                            <div
                                className={`absolute top-0 z-10 hidden size-full h-36 lg:block lg:h-24`}
                                style={{
                                    // Background should be a gradient from translucent at top to white at bottom
                                    background: `linear-gradient(to top, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1) 90%)`,
                                }}
                            />
                            <div
                                className={`absolute bottom-0 z-10 hidden size-full lg:block lg:h-12`}
                                style={{
                                    // Background should be a gradient from translucent at top to white at bottom
                                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1) 90%)`,
                                }}
                            />
                            <Header className={`z-10 cs-12`} />
                            <div
                                className={`relative cs-12 flex min-h-[120px] items-center justify-center border-b px-10 md:min-h-[150px] lg:min-h-[75vh] lg:items-baseline lg:justify-end lg:px-0 xl:min-h-[75vh]`}
                            >
                                <div
                                    className={`font-heading tac relative flex flex-col text-2xl leading-9 font-bold sm:text-3xl md:text-4xl md:leading-11 lg:top-32 lg:right-32 lg:items-end lg:text-right lg:text-5xl lg:leading-13 xl:top-40 xl:right-52 xl:leading-14 2xl:text-6xl`}
                                >
                                    <div className="z-10 mb-6 hidden items-center justify-center lg:flex">
                                        <div
                                            className={cn(
                                                'group rounded-full border border-neutral-200 bg-neutral-100 text-sm transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900',
                                            )}
                                        >
                                            <Link href={about()} prefetch>
                                                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 font-sans font-medium text-neutral-500 transition ease-out hover:text-neutral-600 hover:duration-300">
                                                    <span
                                                        className={`ific gap-x-2 text-sm`}
                                                    >
                                                        <span>❤️</span>
                                                        <span>
                                                            Introducing OpenSLP
                                                        </span>
                                                    </span>

                                                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                                                </AnimatedShinyText>
                                            </Link>
                                        </div>
                                    </div>
                                    <AuroraText
                                        className={`mr-4`}
                                        speed={4}
                                        colors={[
                                            '#FF6F91',
                                            '#FF9671',
                                            '#FFC75F',
                                            '#FF9671',
                                            '#FF6F91',
                                        ]}
                                    >
                                        High-Quality
                                    </AuroraText>
                                    <span className="hidden text-neutral-700 lg:inline">
                                        resources for{' '}
                                        <Highlighter
                                            action={'underline'}
                                            color={'#ff9800'}
                                        >
                                            SLPs
                                        </Highlighter>
                                    </span>
                                    <span className="text-neutral-700 lg:hidden">
                                        resources for SLPs
                                    </span>

                                    <div
                                        className={`mt-8 hidden items-center gap-x-2 lg:flex`}
                                    >
                                        <LinkContributionForm />
                                        <Button
                                            onClick={scrollToResources}
                                            className={`flex w-[250px] items-center justify-center gap-1 rounded-lg border border-neutral-700 bg-white/70 py-1 font-sans text-base font-medium text-neutral-800 transition-colors hover:bg-white/90`}
                                            style={{
                                                backdropFilter: `blur(4px)`,
                                            }}
                                        >
                                            <LuArrowDown />
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NewsletterSignup className={`cs-12 hidden lg:flex`} />
                        <ResourceFilterBar
                            className={`cs-12 overflow-hidden px-4 md:px-9`}
                        />
                        <div id={'start-of-resources'} />
                        <MasonryWrapper
                            filteredResourcesByCategory={
                                filteredResourcesByCategory
                            }
                        />
                        {Object.keys(filteredResourcesByCategory).length ===
                            0 && (
                            <div className={`cs-12 px-9`}>
                                <Alert>
                                    <LuGhost />
                                    <AlertTitle>No results found</AlertTitle>
                                    <AlertDescription>
                                        It seems we do not have resources that
                                        match your filters. Hopefully we will
                                        have more resources soon!
                                    </AlertDescription>
                                </Alert>
                            </div>
                        )}
                    </main>
                </div>

                <NewsletterSignup className={`cs-12 mb-5`} />
                <Footer className={`flex-1 grow`} />
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
            <Toaster />
        </>
    );
}
