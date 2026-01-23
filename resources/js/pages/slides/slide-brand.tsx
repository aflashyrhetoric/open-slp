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
            <div className={`flex flex-col items-center`}>
                <AppLogoIcon className={`mb-5 h-[150px]`} />
                <span className={`logo mb-5 slide-text-lg`}>OpenSLP.com</span>
                <span
                    className={`font-lora mb-6 slide-text-sm text-neutral-800 italic`}
                >
                    We post free stuff every week.
                </span>
                <span
                    className={`mb-12 font-sans slide-text-xs text-neutral-600`}
                >
                    Link in the description!
                </span>
            </div>
            <Divider className={`my-12`} />
        </SlideTemplate>
    );
}
