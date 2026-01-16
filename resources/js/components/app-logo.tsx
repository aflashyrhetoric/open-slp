import { Badge } from '@/components/ui/badge';

type Props = {
    light?: boolean;
    withVersion?: boolean;
    className?: string;
};

export default function AppLogo({ light, withVersion, className = "" }: Props) {
    return (
        <>
            {/*<div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">*/}
            {/*    <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />*/}
            {/*</div>*/}
            <div className={`ific ${className}`}>
                <span className={`logo text-xl ${light ? 'text-white' : ''}`}>
                    OpenSLP
                </span>
                {withVersion && (
                    <Badge variant="secondary" className={`ml-2`}>
                        NEW
                    </Badge>
                )}
            </div>
        </>
    );
}
