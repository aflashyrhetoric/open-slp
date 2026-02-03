import ResourceFilterBar from '@/components/resource-filter-bar';
import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { AnimatedBeamMultipleOutputDemo } from '@/components/site/home-animated-beam';
import NewsletterSignup from '@/components/site/newsletter-signup';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AuroraText } from '@/components/ui/aurora-text';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { useResources } from '@/stores/useResources';
import { Resource, ResourceTag } from '@/types/openslp/resource';
import { CheckCircle2Icon } from 'lucide-react';
import Masonry from 'react-masonry-css';
import { LuGhost } from 'react-icons/lu';

export default function TagShow({ tag, resources }: { tag: ResourceTag, resources: Resource[] }) {
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
                        <div className="grid12 relative cs-12">
                            <FlickeringGrid
                                maxOpacity={0.05}
                                squareSize={4}
                                gridGap={8}
                                className={`absolute inset-0 z-0 size-full`}
                            />
                            <Header className={`z-10 cs-12`} />
                            <div
                                className={`grid12 relative cs-12 border-b px-10`}
                            >
                                <div
                                    className={`fc flex-col relative cs-12 min-h-[200px] px-10 md:cs-10 md:col-start-2`}
                                >
                                    <p
                                        className={`font-heading text-2xl font-bold sm:text-3xl md:items-center md:text-4xl lg:items-start lg:text-5xl xl:text-6xl`}
                                    >
                                        <span className="text-neutral-500">
                                            Resources / {" "}
                                        </span>
                                        <AuroraText
                                            className={`mr-4`}
                                            colors={[
                                                '#FF6F91',
                                                '#FF9671',
                                                '#FFC75F',
                                            ]}
                                        >
                                            {tag.name}
                                        </AuroraText>
                                    </p>
                                    {tag.description && (
                                        <p className={`mt-5 text-neutral-600 text-xl font-lora`}>{tag.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <ResourceFilterBar className={`cs-12 overflow-hidden px-9`} />
                        <Masonry
                            breakpointCols={{
                                default: 3,
                                2560: 4,
                                1512: 3,
                                1024: 2,
                                768: 1,
                            }}
                            className="cs-12 flex w-full gap-5 px-4 md:px-9 pt-4 pb-12"
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
                        </Masonry>{' '}
                        {Object.keys(filteredResourcesByCategory).length === 0 && (
                            <div className={`cs-12 px-9`}>
                                <Alert>
                                    <LuGhost />
                                    <AlertTitle>No results found</AlertTitle>
                                    <AlertDescription>
                                        It seems we do not have resources that match your filters. Hopefully we will have more resources soon!
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
