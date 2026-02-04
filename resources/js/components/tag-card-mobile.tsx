import { show } from '@/routes/tags';
import { ResourceTag } from '@/types/openslp/resource';
import { Link } from '@inertiajs/react';

type Props = {
    tag: ResourceTag;
    className?: string;
};

export default function TagCardMobile({ tag, className = '' }: Props) {
    return (
        <Link href={show(tag.slug)} className={`${className}`}>
            <div
                className={`gradient-highlight min-h-[130px] w-full rounded-2xl border border-neutral-700 bg-neutral-800 p-6`}
            >
                <p
                    className={`fic text-lg font-lora mb-3 font-medium tracking-tight md:text-xl`}
                >
                    <span className={`text-neutral-500`}>#</span>
                    <span className={`text-neutral-800`}>{tag.name}</span>
                </p>
                <p className={`text-base sm:text-base`}>{tag.description}</p>
            </div>
        </Link>
    );
}
