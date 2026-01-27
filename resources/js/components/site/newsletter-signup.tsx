import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { CrossIcon } from 'lucide-react';
import { LuX } from 'react-icons/lu';

type Props = {
    className?: string;
};

export default function NewsletterSignup({ className = '' }: Props) {
    const [temporarilyHidden, setTemporarilyHidden] = useState(false);

    return (
        <>
            {!temporarilyHidden && (
                <div className={`relative fc flex-col px-10 py-5 ${className}`}>
                    <div className={`flex w-full justify-end`}>
                    <Button variant={"ghost"} className={`text-neutral-400 text-xs mb-2`}
                        onClick={() => setTemporarilyHidden(true)}
                    >
                        Hide <LuX className={`inline`}/>
                    </Button>
                    </div>
                    <p
                        className={`font-heading tac mb-2 text-lg sm:text-xl lg:text-2xl`}
                    >
                        Subscribe for free resources. Weekly...ish.
                    </p>
                    <p className={`mb-8 text-sm tac text-neutral-500`}>
                        We only send updates when there's quality stuff to send. <br/>
                        We&apos;ll occasionally send updates about OpenSLP.
                        Don't worry. We hate spam too.
                    </p>
                    <form
                        action="https://buttondown.com/api/emails/embed-subscribe/openslp"
                        method="post"
                        className="embeddable-buttondown-form"
                    >
                        <Field orientation={'horizontal'}>
                            <Input
                                className={`min-w-[190px] text-xs md:w-[300px] md:text-base`}
                                placeholder={'amazingslp@youremail.com'}
                                type="email"
                                name="email"
                                id="bd-email"
                            />
                            <Button
                                type={'submit'}
                                value={'Subscribe'}
                                className={`font-bold`}
                            >
                                Subscribe
                            </Button>
                        </Field>
                    </form>
                </div>
            )}
        </>
    );
}
