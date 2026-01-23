import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { AnimatedBeamMultipleOutputDemo } from '@/components/site/home-animated-beam';
import { AuroraText } from '@/components/ui/aurora-text';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useMemo, useRef, useState } from 'react';
import Masonry from 'react-masonry-css';

export default function Welcome({
    categories,
    // canRegister = true,
    resourcesByCategory,
    resources,
    resourceCount = 0,
}: {
    categories: ResourceCategory[];
    // canRegister?: boolean;
    resources: Resource[];
    resourcesByCategory: Record<string, Resource[]>;
    resourceCount: number;
}) {
    // const { auth } = usePage<SharedData>().props;

    const [searchQuery, setSearchQuery] = useState<string>('');

    const [onlyDownloadables, setOnlyDownloadables] = useState<boolean>(false);

    const filteredResourcesByCategory = useMemo(() => {
        // if (!searchQuery.trim()) {
        //     return resourcesByCategory;
        // }
        //
        const query = searchQuery.toLowerCase();
        const result: Record<string, Resource[]> = {};

        for (const [categoryName, categoryResources] of Object.entries(
            resourcesByCategory,
        )) {
            const filtered = categoryResources.filter((resource) => {
                const searchable = [
                    resource.name,
                    resource.author,
                    resource.keywords,
                    resource.target_audience,
                    resource.notes,
                ]
                    .filter(Boolean)
                    .join(' ')
                    .toLowerCase();

                const includesQuery = searchable.includes(query);

                function checkIfSatisfiesFilters(): boolean {
                    if (onlyDownloadables) {
                        return resource.has_downloadables;
                    }

                    return true;
                }

                const satisfiesAdditionalFilters = checkIfSatisfiesFilters();

                if (searchQuery.length === 0) {
                    return satisfiesAdditionalFilters;
                }

                return includesQuery && satisfiesAdditionalFilters;
            });

            if (filtered.length > 0) {
                result[categoryName] = filtered;
            }
        }

        return result;
    }, [searchQuery, resourcesByCategory, onlyDownloadables]);

    const parent = useRef(null);

    useEffect(() => {
        if (parent.current) {
            autoAnimate(parent.current);
        }
    }, [parent]);

    const allOgImages = resources.map((resource) => {
        if (resource !== null && resource.og_image) {
            return resource.og_image;
        }
    });

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
                                    className={`grid12 font-heading relative cs-10 col-start-2 min-h-[200px] px-10`}
                                >
                                    <p
                                        className={`font-heading fc cs-12 h-full flex-col items-center text-2xl sm:text-3xl font-bold md:text-4xl lg:cs-6 lg:items-start lg:text-5xl xl:text-6xl`}
                                    >
                                        <AuroraText
                                            className={`mr-4`}
                                            // less-saturated, sunset-esque colors
                                            colors={[
                                                '#FF6F91',
                                                '#FF9671',
                                                '#FFC75F',
                                            ]}
                                        >
                                            Curated
                                        </AuroraText>
                                        resources for SLPs
                                    </p>
                                    <div
                                        className={`relative hidden lg:cs-6 lg:block`}
                                    >
                                        {/*<IconCloud images={images} />*/}
                                        <AnimatedBeamMultipleOutputDemo
                                            circleImages={[images]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`cs-12 px-9`}>
                            <FieldGroup>
                                <Field orientation={'vertical'}>
                                    <FieldLabel htmlFor="search-query-input">
                                        Search Resources
                                    </FieldLabel>
                                    <Input
                                        value={searchQuery}
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        placeholder="Calendar..."
                                        id="search-query-input"
                                    />
                                </Field>
                                <Field orientation={'horizontal'}>
                                    <Checkbox
                                        id="only-downloadables"
                                        checked={onlyDownloadables}
                                        onCheckedChange={(checked) =>
                                            setOnlyDownloadables(
                                                Boolean(checked),
                                            )
                                        }
                                    />
                                    <Label htmlFor="only-downloadables">
                                        Only show resources with downloadables
                                    </Label>
                                </Field>
                            </FieldGroup>
                        </div>
                        <Masonry
                            breakpointCols={{
                                default: 3,
                                1280: 3,
                                1024: 2,
                                640: 1,
                            }}
                            className="cs-12 flex w-full gap-5 px-9"
                            columnClassName="flex flex-col gap-5"
                        >
                            {Object.keys(filteredResourcesByCategory)
                                .map((categoryName) => {
                                    const resourcesForCategory =
                                        filteredResourcesByCategory[
                                            categoryName
                                        ];

                                    const category = categories.find(
                                        (cat) => cat.name === categoryName,
                                    );

                                    return {
                                        categoryName,
                                        category,
                                        resourcesForCategory,
                                    };
                                })
                                .sort((a, b) => {
                                    const { category: categoryA } = a;
                                    const { category: categoryB } = b;
                                    if (!categoryA || !categoryB) return 0;
                                    return (
                                        categoryA.position - categoryB.position
                                    );
                                })
                                .map((categoryBlob, key) => {
                                    const {
                                        category,
                                        categoryName,
                                        resourcesForCategory,
                                    } = categoryBlob;
                                    if (!category) return null;
                                    return (
                                        <ResourceCategorySection
                                            key={`category-${categoryName}-${key}`}
                                            category={category}
                                            categoryName={categoryName}
                                            resources={resourcesForCategory}
                                        />
                                    );
                                })}
                        </Masonry>{' '}
                    </main>
                </div>

                <Footer className={`flex-1 grow`} />
                {/*<div className="hidden h-14.5 lg:block"></div>*/}
            </div>
        </>
    );
}
