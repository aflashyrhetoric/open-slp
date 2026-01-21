import Footer from '@/components/site/footer';
import Header from '@/components/site/header';
import HeadTag from '@/components/site/HeadTag';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ResourceCategorySection from '@/openslp/resource-category-section';
import { Resource, ResourceCategory } from '@/types/openslp/resource';
import { LuCircleHelp } from 'react-icons/lu';
import Masonry from 'react-masonry-css';
import { useState } from 'react';

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
    console.log({resourcesByCategory})

    // const filteredCategories = categories
    //     .map(category => {
    //         let searchableText = category.name;
    //         searchableText += ' ' + (category.description || '');
    //         searchableText += ' ' + category.key;
    //
    //         const resourcesInCategory
    //
    //         return
    //     })
    //     .filter((category) => {
    //
    // }

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
                            {Object.keys(resourcesByCategory)
                                .map((categoryName, key) => {
                                    const resourcesForCategory = resourcesByCategory[categoryName];
                                    const category = categories.find(
                                        (cat) => cat.name === categoryName,
                                    );
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
