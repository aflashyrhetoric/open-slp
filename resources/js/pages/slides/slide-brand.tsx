import AppLogoIcon from '@/components/app-logo-icon';
import Divider from '@/openslp/divider';
import SlideTemplate from '@/pages/slide-template';
import { Resource } from '@/types/openslp/resource';

type Props = {
    className?: string;
    isDev: boolean;
    resource: Resource;
};

export default function SlideBrand({ isDev, resource, className = '' }: Props) {
    return (
        <SlideTemplate
            isDev={isDev}
            className={`gradient-highlight-lightest fc flex-col`}
        >
            <div className={`h-full flex flex-col justify-center items-center`}>
                <AppLogoIcon className={`mb-5 h-[150px]`} />
                <span className={`logo mb-5 slide-text-lg`}>OpenSLP.com</span>
                <span
                    className={`font-lora mb-6 slide-text-lg text-neutral-800 italic`}
                >
                    We share useful resources every week.
                </span>
                <span
                    className={`mb-12 mt-12 font-sans slide-text-xs text-neutral-600`}
                >
                    Links are in the description.
                </span>
                <Divider className={`my-12`} />
            </div>
        </SlideTemplate>
    );
}
