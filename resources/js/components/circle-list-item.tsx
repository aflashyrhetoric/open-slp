import React from 'react';

type Props = {
    className?: string;
    children?: React.ReactNode;
};

const CircleListItem: React.FC<Props> = ({ children, className = '' }: Props) => {
    return (
        <>
            <li className="relative flex items-center gap-4 py-2 before:absolute before:top-1/2 before:bottom-0 before:left-[0.4rem] before:border-l before:border-[#e3e3e0] dark:before:border-[#3E3E3A]">
                <span className="relative bg-white py-1 dark:bg-[#161615]">
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#e3e3e0] bg-[#FDFDFC] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] dark:border-[#3E3E3A] dark:bg-[#161615]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#dbdbd7] dark:bg-[#3E3E3A]" />
                    </span>
                </span>
                {children}
            </li>
        </>
    );
};

export default CircleListItem;
