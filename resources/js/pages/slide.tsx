import AppLogo from '@/components/app-logo';
import HeadTag from '@/components/site/HeadTag';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Resource } from '@/types/openslp/resource';
import { useState } from 'react';
import AppLogoIcon from '@/components/app-logo-icon';
import Divider from '@/openslp/divider';

export default function Slide({ resource }: { resource: Resource }) {
    const [isDev, setIsDev] = useState(true);

    const dimensionClasses = !isDev
        ? 'h-[1080px] w-[1080px]'
        : 'h-[1080px] w-[1080px] scale-50';

    return (
        <>
            <HeadTag title={'Welcome'} />
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
                <div
                    className={`flex-col gradient-highlight-lightest fc ${dimensionClasses}`}
                >
                    <div className={`flex mb-12 flex-col items-center`}>
                        <AppLogoIcon className={`h-[150px] mb-5`} />
                        <span className={`logo mb-5 text-[48px]`}>OpenSLP.com</span>
                        <span className={`font-lora text-[32px] italic text-neutral-800 mb-6`}>Free Resource Of The Week</span>
                        <span className={`font-sans text-[28px] text-neutral-600 mb-12`}>Link in the description!</span>
                        <Divider />
                    </div>
                    <span className={`text-[80px]`}>{resource.category?.icon}</span>
                    <span className={`font-sans text-[55px] mb-5 font-bold`}>
                        {resource.name}
                    </span>
                    <p className={`text-lora text-[40px] leading-[60px] max-w-[80%] text-pretty tac`}>{resource.notes}</p>
                </div>
                {/*<iframe src={resource.href} className={`mt-16 h-[300px] w-[80%] rounded-xl border-4 border-neutral-200 shadow-lg`} />*/}
                {
                    <code>
                        <pre>{JSON.stringify(resource, null, 2)}</pre>
                    </code>
                }
            </div>
        </>
    );
}
