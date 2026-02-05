import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { LuBadge, LuBadgeCheck } from 'react-icons/lu';

type Props = {
    className?: string;
};

export default function VerifiedBadge({ className = '' }: Props) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Badge className={`ific gap-x-1 bg-white text-neutral-800 shadow-sm tracking-tight`}>
                    <LuBadgeCheck className={`stroke-neutral-800`} />
                    Verified
                </Badge>
            </TooltipTrigger>
            <TooltipContent>
                <p className={`text-base`}>
                    We have personally used and vetted this resource.
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
