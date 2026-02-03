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
                className={`h-[200px] w-full rounded-2xl border border-neutral-700 bg-neutral-800 p-5`}
                style={{
                    background:
                        'linear-gradient(to bottom right, rgb(186 230 253 / .75), rgb(199 210 254 / .75))',
                }}
            >
                <p
                    className={`font-lora mb-3 text-lg font-medium tracking-tight`}
                >
                    <span
                        className={`mr-[1px] text-neutral-500`}
                    >
                        #
                    </span>
                    <span className={`text-neutral-800`}>{tag.name}</span>
                </p>
                <p className={`text-`}>{tag.description}</p>
            </div>
        </Link>
    );
}
