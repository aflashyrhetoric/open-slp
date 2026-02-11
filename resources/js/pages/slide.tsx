import HeadTag from '@/components/site/HeadTag';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import SlideBrand from '@/pages/slides/slide-brand';
import SlideHook from '@/pages/slides/slide-hook';
import SlideHowToUse from '@/pages/slides/slide-how-to-use';
import SlideMain from '@/pages/slides/slide-main';
import { Resource } from '@/types/openslp/resource';
import { useState } from 'react';

export default function Slide({ resource, page }: { resource: Resource }) {
    const [isDev, setIsDev] = useState(true);

    const slideKeyOrder = ['hook', 'main', 'details', 'brand'];

    return (
        <>
            <HeadTag title={'Slides'} />
            <div className={`relative`}>
                {isDev && (
                    <div className="bgb absolute top-0 flex items-center space-x-2 p-4">
                        <Switch
                            id="toggle-dev-view"
                            checked={isDev}
                            onCheckedChange={setIsDev}
                        />
                        <Label htmlFor="toggle-dev-view">Dev View</Label>
                    </div>
                )}
                {page === 1 && <SlideMain isDev={isDev} resource={resource} />}
                {page === 2 && (
                    <SlideHowToUse isDev={isDev} resource={resource} />
                )}
                {page === 3 && <SlideHook isDev={isDev} resource={resource} />}
                {page === 4 && <SlideBrand isDev={isDev} resource={resource} />}
                {/*<iframe src={resource.href} className={`mt-16 h-[300px] w-[80%] rounded-xl border-4 border-neutral-200 shadow-lg`} />*/}
                {/*{*/}
                {/*    <code>*/}
                {/*        <pre>{JSON.stringify(resource, null, 2)}</pre>*/}
                {/*    </code>*/}
                {/*}*/}
            </div>
        </>
    );
}
