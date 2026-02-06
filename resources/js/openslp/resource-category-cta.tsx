import { Button } from '@/components/ui/button';
import { Highlighter } from '@/components/ui/highlighter';
import { about, team } from '@/routes';
import { useResources } from '@/stores/useResources';
import { Link } from '@inertiajs/react';
import copy from 'clipboard-copy';
import React, { useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

type Props = {
    className?: string;
};

const ResourceCategoryCTA: React.FC<Props> = ({ className = '' }: Props) => {
    const { collapseExtraData } = useResources();

    const [copied, setCopied] = useState(false);

    const copiedText =
        'Just found a great resource for SLPs! Check out OpenSLP: https://openslp.com';

    function handleCopyToClipboard() {
        copy(copiedText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <div className={`cs-12 mb-5 fade-in ${className}`}>
            <div className={`rounded pb-[1px] fade-in`}>
                <div className="mb-4 flex flex-col">
                    <div
                        className={`gradient-highlight-lightest fc min-h-[400px] flex-col gap-0 rounded-md p-4 shadow-sm ring ring-neutral-600`}
                    >
                        <p className={`mb-4 fic text-2xl`}>❤️</p>
                        <p
                            className={`tac font-heading px-1 text-2xl tracking-tight`}
                        >
                            Please help us{' '}
                            <Highlighter
                                action={'underline'}
                                color={'#E500A6'}
                                isView
                            >
                                <span>grow!</span>
                            </Highlighter>
                        </p>

                        <p className={`font-lora tac mt-5`}>
                            We're a{' '}
                            <Link
                                prefetch
                                className={`text-blue-600 underline`}
                                href={team()}
                            >
                                small team{' '}
                            </Link>
                            on a{' '}
                            <Link
                                prefetch
                                className={`text-blue-600 underline`}
                                href={about()}
                            >
                                big mission.
                            </Link>{' '}
                            <br /> Share with colleagues to help us reach more
                            SLPs!
                        </p>

                        <p
                            className={`tac font-lora mt-4 mb-7 max-w-[90%] rounded border border-dashed border-neutral-500 bg-white/50 p-5 text-base xl:max-w-[80%]`}
                        >
                            {copiedText}
                        </p>
                        <Button
                            variant={'default'}
                            onClick={handleCopyToClipboard}
                        >
                            {copied ? (
                                <span className={`ific gap-x-1 text-sm fade-in`}>
                                    <LuCheck />
                                    Copied!
                                </span>
                            ) : (
                                <span className={`ific gap-x-1 text-sm`}>
                                    <LuCopy />
                                    Copy To Clipboard
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceCategoryCTA;
