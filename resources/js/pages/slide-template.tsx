import { Resource } from '@/types/openslp/resource';

export default function SlideTemplate({
    children,
    isDev,
    className = '',
}: {
    className?: string;
    isDev: boolean;
    children: React.ReactNode;
}) {
    const dimensionClasses = !isDev
        ? 'h-[1080px] w-[1080px]'
        : 'h-[1080px] w-[1080px] scal-50';

    return (
        <>
            <div
                className={`relative gradient-highlight-lightest flex p-24 items-center flex-col overflow-hidden ${dimensionClasses}`}
            >
                <div className={`absolute size-full noisy z-0`}/>
                {children}
            </div>
        </>
    );
}
