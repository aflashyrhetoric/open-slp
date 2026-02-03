import TagCard from '@/components/tag-card-mobile';
import TagCardSmall from '@/components/tag-card-small';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { FieldLabel, FieldSet } from '@/components/ui/field';
import useMediaQuery from '@/hooks/use-media-query';
import { ResourceTag } from '@/types/openslp/resource';
import { usePage } from '@inertiajs/react';
import { Button } from './ui/button';
import { LuChevronDown } from 'react-icons/lu';

type Props = {
    className?: string;
};

export default function TagsHeader({ className = '' }: Props) {
    const { allTags } = usePage<{ allTags: ResourceTag[] }>().props;

    const { isLarge } = useMediaQuery();

    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <FieldSet className="min-w-0" style={{ minInlineSize: 0 }}>
                <FieldLabel>Navigate by tag</FieldLabel>
                {
                    <div className="hidden pb-0 lg:block min-w-0">
                        <div className="flex items-center justify-start gap-x-3 overflow-x-auto px-1">
                            {allTags.map((tag: ResourceTag) => (
                                <TagCardSmall key={`tag-${tag.id}`} tag={tag} />
                            ))}
                        </div>
                    </div>
                }
            </FieldSet>
            {!isLarge && (
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline" className={`mt-3 w-full`}>Click To View <LuChevronDown /> </Button>
                    </DrawerTrigger>
                    <DrawerContent className={``}>
                        <div className="mx-auto w-full relative overflow-y-scroll">
                            <DrawerHeader className={`sticky top-0 bg-white border-b border-neutral-600`}>
                                <DrawerTitle>
                                    Browse By Tagged Collections
                                </DrawerTitle>
                                <DrawerDescription>
                                    Swipe to navigate. Click to view resources grouped by tag.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="px-8 pt-5 pb-4">
                                <div className="grid12 gap-5">
                                    {allTags.map((tag: ResourceTag) => (
                                        <TagCard
                                            key={`tag-${tag.id}`}
                                            tag={tag}
                                            className={`cs-6`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <DrawerFooter>
                                {/*<Button>Submit</Button>*/}
                                {/*<DrawerClose asChild>*/}
                                {/*    <Button variant="outline">Cancel</Button>*/}
                                {/*</DrawerClose>*/}
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            )}
        </div>
    );
}
