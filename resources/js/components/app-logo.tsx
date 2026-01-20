import AppLogoIcon from '@/components/app-logo-icon';
import { Badge } from '@/components/ui/badge';

type Props = {
    light?: boolean;
    withVersion?: boolean;
    withLogo?: boolean;
    className?: string;
};

export default function AppLogo({
    light,
    withVersion,
    withLogo = false,
    className = '',
}: Props) {
    return (
        <>
            <div className={`ific ${className}`}>
                {withLogo && (
                    <div className="mr-2 flex aspect-square size-8 items-center justify-center rounded-md">
                        <AppLogoIcon className="size-12 fill-current text-white dark:text-black" />
                    </div>
                )}
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
