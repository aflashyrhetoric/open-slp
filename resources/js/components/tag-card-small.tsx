import { show } from '@/routes/tags';
import { ResourceTag } from '@/types/openslp/resource';
import { Link } from '@inertiajs/react';

type Props = {
    tag: ResourceTag;
    className?: string;
};

export default function TagCardSmall({ tag, className = '' }: Props) {
    return (
        <Link href={show(tag.slug)} className={`fc group flex-col`}>
            <p
                className={`fc flex-col gap-y-5 rounded border border-neutral-500 hover:bg-neutral-100 px-5 py-1 transition-transform hover:scale-[1.02] ${className}`}
            >
                <span className={`font-sans text-sm font-medium`}>
                    <span
                        className={`mr-[1px] text-neutral-500 group-hover:text-blue-500`}
                    >
                        #
                    </span>
                    <span
                        className={`whitespace-nowrap text-neutral-500 transition-colors group-hover:text-blue-500`}
                    >
                        {tag.name}
                    </span>
                </span>
                {/*<Divider />*/}
                {/*<p className={`tac text-balance`}>{tag.description}</p>*/}
            </p>
        </Link>
    );
}
