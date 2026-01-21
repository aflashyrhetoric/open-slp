import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useMemo, useRef, useState } from 'react';
import { LuCircleHelp } from 'react-icons/lu';
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

    return (
        <>
            <HeadTag title={'Welcome'} />
            <div className="flex min-h-screen flex-col">
                <Header />
                <div className={`p-9`}>
                    <main className="grid12 w-full max-w-full gap-5">
                        <Alert className={`cs-12`}>
                            <LuCircleHelp />
                            <AlertTitle>What is OpenSLP?</AlertTitle>
                            <AlertDescription>
                                Started in 2026, we finds useful resources
                                across the web for SLPs to use - from
                                downloadable calendars to useful templates and
                                more.
                            </AlertDescription>
                        </Alert>
                        <div className={`cs-12`}>
                            <FieldGroup>
                                <Field orientation={"vertical"}>
                                    <FieldLabel htmlFor="search-query-input">
                                        Search Resources
                                    </FieldLabel>
                                    <Input
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
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
                            className="cs-12 flex w-full gap-5"
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
