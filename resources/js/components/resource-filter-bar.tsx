import ResourceFilterBarInner from '@/components/resource-filter-bar-inner';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/use-media-query';
import { LuChevronDown } from 'react-icons/lu';
import TagsHeader from '@/components/tags-header';
import { FieldLabel } from '@/components/ui/field';

type Props = {
    className?: string;
};

export default function ResourceFilterBar({ className = '' }: Props) {
    const { isLarge } = useMediaQuery();

    return (
        <>
            <TagsHeader className={`w-full ${className}`} />
            {isLarge && <ResourceFilterBarInner className={`${className}`} />}
            {!isLarge && (
                <Drawer>
                    <DrawerTrigger asChild>
                        <div className={` ${className}`}>
                            <FieldLabel>Filters</FieldLabel>
                            <Button variant="outline" className={`w-full mt-3`}>
                                Adjust Filters <LuChevronDown />{' '}
                            </Button>
                        </div>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="relative mx-auto w-full overflow-y-scroll">
                            <DrawerHeader
                                className={`sticky top-0 border-b border-neutral-600 bg-white`}
                            >
                                <DrawerTitle>
                                    Filter Resources
                                </DrawerTitle>
                                <DrawerDescription>
                                    Adjust filters to refine your search.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="px-3 pt-5 pb-4">
                                <ResourceFilterBarInner />
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
        </>
    );
}
