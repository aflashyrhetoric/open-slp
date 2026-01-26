import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
    className?: string;
};

export default function NewsletterSignup({ className = '' }: Props) {
    return (
        <>
            <div className={`fc flex-col px-10 py-5 ${className}`}>
                <p
                    className={`font-heading mb-2 text-lg sm:text-xl lg:text-2xl`}
                >
                    Subscribe to our weekly-ish newsletter for resources and
                    news.
                </p>
                <p className={`mb-8 text-sm text-neutral-500`}>
                    Don't worry - we probably hate spam more than you.
                </p>
                <form
                    action="https://buttondown.com/api/emails/embed-subscribe/openslp"
                    method="post"
                    className="embeddable-buttondown-form"
                >
                    <Field orientation={'horizontal'}>
                        <Input
                            className={`w-[300px] text-xs md:text-base`}
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
        </>
    );
}
