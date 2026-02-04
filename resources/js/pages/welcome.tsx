import ResourceFilterBar from '@/components/resource-filter-bar';
import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import NewsletterSignup from '@/components/site/newsletter-signup';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AuroraText } from '@/components/ui/aurora-text';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { useResources } from '@/stores/useResources';
import { Resource } from '@/types/openslp/resource';
import { LuGhost } from 'react-icons/lu';
import Masonry from 'react-masonry-css';

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

    return (
        <>
            <HeadTag title={'Welcome'} />
            <div className="flex min-h-screen flex-col">
                <div className={``}>
                    <main className="grid12 w-full max-w-full gap-5">
                        <div className="grid12 gradient-highlight relative cs-12">
                            <div
                                className={`absolute inset-0 z-0 hidden size-full bg-cover bg-[position:50%_50%] bg-no-repeat lg:block lg:bg-[position:50%_50%] xl:bg-[position:50%_60%]`}
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
                                className={`relative cs-12 flex min-h-[120px] items-center justify-center border-b px-10 md:min-h-[150px] lg:min-h-[75vh] lg:items-baseline lg:justify-end xl:min-h-[75vh]`}
                            >
                                <p
                                    className={`font-heading tac relative flex flex-col text-2xl font-bold sm:text-3xl md:text-4xl lg:top-32 lg:right-28 lg:text-right lg:text-5xl xl:top-40 xl:right-40 2xl:text-6xl`}
                                >
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
                                    <span className="text-neutral-700">
                                        resources for SLPs
                                    </span>
                                </p>
                            </div>
                        </div>
                        <NewsletterSignup className={`hidden lg:flex cs-12`} />
                        <ResourceFilterBar
                            className={`cs-12 overflow-hidden px-4 md:px-9`}
                        />
                        <div className="cs-12 px-4 md:px-9">
                            <Masonry
                                breakpointCols={{
                                    // default: 3,
                                    2560: 3,
                                    1536: 3,
                                    1280: 3,
                                    1024: 3,
                                    768: 2,
                                    640: 1,
                                }}
                                className="cs-12 mr-auto flex w-full pt-4 pb-12 md:ml-[-7px] gap-4 md:gap-x-4 lg:ml-[-15px] xl:ml-[-7px] 2xl:ml-0"
                                columnClassName="flex flex-col gap-5"
                            >
                                {filteredResourcesByCategory.map(
                                    ({ category, resourcesInCategory }) => (
                                        <ResourceCategorySection
                                            key={`category-${category.id}`}
                                            category={category}
                                            categoryName={category.name}
                                            resources={resourcesInCategory}
                                        />
                                    ),
                                )}
                            </Masonry>
                        </div>
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
        </>
    );
}
