import React, { useState } from "react";
import AppLogo from '@/components/app-logo';
import { Head } from '@inertiajs/react';

type Props = {
  className?: string;
}

const HeadTag: React.FC<Props> = ({ className = '' }: Props) => {
    return (
        <Head title="Welcome">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700|inter:100,300,300i,500,700,900|lora:400,500,600,700"
                rel="stylesheet"
            />
        </Head>
    );
};

export default HeadTag;
