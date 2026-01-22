import React from 'react';
import { LuDiamond } from 'react-icons/lu';

type Props = {
    className?: string;
};

const Divider: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <div className={`fic h-[1px] w-full justify-between gap-x-2 md:w-2/3 ${className}`}>
            <div
                className={`h-full rounded-full bg-neutral-500 md:w-[200px]`}
            />
            <LuDiamond className={`inline text-xs text-neutral-500`} />
            <div
                className={`h-full rounded-full bg-neutral-500 md:w-[200px]`}
            />
        </div>
    );
};

export default Divider;
