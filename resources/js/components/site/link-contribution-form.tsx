import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { store } from '@/routes/contributions';
import { ResourceCategory } from '@/types/openslp/resource';
import { Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import { LuCheck } from 'react-icons/lu';
import { toast } from 'sonner';
import { contributionGuidelines } from '@/routes';

type Props = {
    className?: string;
};

export default function LinkContributionForm({ className = '' }: Props) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [href, setHref] = useState('');
    const [description, setDescription] = useState('');
    const { categories } = usePage<{
        categories: ResourceCategory[];
    }>().props;
    const [categoryId, setCategoryId] = useState<number|null>(null);

    const isValid = !!href && !loading;
    const isDisabled = !isValid;

    async function handleSubmit() {
        const payload = {
            href,
            description,
            category_id: categoryId,
        };
        setLoading(true);
        try {
            await axios.post(store().url, payload);
            toast.success(
                'Thank you for your contribution! We will review it shortly.',
            );
            setLoading(false);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting link contribution:', error);
        }
    }

    return (
        <Drawer>
            <DrawerTrigger
                asChild
                className={`hidden items-center justify-center gap-1 rounded-lg border font-sans text-base font-medium transition-colors lg:flex`}
                style={{
                    backdropFilter: `blur(4px)`,
                }}
            >
                <Button>
                    <HeartHandshake className={`stroke-white`} />
                    Share A Resource With The Community
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Submit A Resource</DrawerTitle>
                    {!submitted && (
                        <DrawerDescription>
                            We review submissions according to our <Link className={`underline`} href={contributionGuidelines()}>Contribution Guidelines</Link>.
                        </DrawerDescription>
                    )}
                </DrawerHeader>
                <div className="flex flex-col gap-4 px-4">
                    {submitted && (
                        <div className={`fc h-[250px] flex-col gap-2`}>
                            <p className={`fic text-xl mb-2 font-bold gap-2`}>
                                <LuCheck />
                                Submitted successfully.
                            </p>
                            <p className={`text-neutral-500`}>
                                Thank you for helping us discover new resources!
                            </p>
                            <p className={`tac text-neutral-500`}>
                                We review all resource submissions according to
                                our internal curation guidelines. <br />
                                We will post the resource on the site if it
                                meets our quality bar and is relevant to our
                                audience.
                            </p>
                        </div>
                    )}
                    {!submitted && (
                        <FieldSet>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="href-input">
                                        Link To The Resource
                                    </FieldLabel>

                                    <Input
                                        id="href-input"
                                        value={href}
                                        onChange={(e) =>
                                            setHref(e.target.value)
                                        }
                                        placeholder="https://paste-the-link-to-the-resource-here..."
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="description-input">
                                        Describe This Resource (Optional)
                                    </FieldLabel>
                                    <Textarea
                                        id={'description-input'}
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                        placeholder="Briefly share what you like about the resource, how you used it, etc..."
                                    />
                                </Field>
                            </FieldGroup>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="description-input">
                                        Category (Optional)
                                    </FieldLabel>
                                    <Select
                                        onValueChange={(categoryIdString) => {
                                            const possiblyInt =
                                                parseInt(categoryIdString);
                                            if (!isNaN(possiblyInt)) {
                                                setCategoryId(possiblyInt);
                                            }
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={`category-${category.id}-item`}
                                                        value={category.id.toString()}
                                                        onSelect={() =>
                                                            setCategoryId(
                                                                category.id,
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                    )}
                </div>
                <DrawerFooter>
                    {!submitted && (
                        <>
                            <Button
                                onClick={handleSubmit}
                                disabled={isDisabled}
                            >
                                Submit
                            </Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </>
                    )}
                    {submitted && (
                        <DrawerClose asChild>
                            <Button>Done</Button>
                        </DrawerClose>
                    )}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
