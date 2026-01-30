import { Checkbox } from '@/components/ui/checkbox';
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from '@/components/ui/combobox';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useResources } from '@/stores/useResources';
import { humanize } from '@/utils/string-utils';
import { ALL_PRICING_MODELS } from '@/types/openslp/resource';

type Props = {
    className?: string;
};

export default function ResourceFilterBar({ className = '' }: Props) {
    // import searchQuery from useResources store
    const { searchQuery, setSearchQuery } = useResources();

    const anchor = useComboboxAnchor()

    return (
        <FieldSet className={`cs-12 px-9 ${className}`}>
            {/*<FieldLegend>Filter Resources</FieldLegend>*/}
            {/*<FieldDescription>*/}
            {/*    Filter resources by search, paid vs free, etc.*/}
            {/*</FieldDescription>*/}
            <FieldGroup>
                <Field orientation={'vertical'}>
                    <FieldLabel htmlFor="search-query-input">
                        Search Resources
                    </FieldLabel>
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by name, free or paid, etc"
                        id="search-query-input"
                    />
                </Field>
            </FieldGroup>
            <FieldGroup className={`!grid grid-cols-12 gap-5`}>
                <Field orientation={'vertical'} className={`cs-4`}>
                    <FieldLabel htmlFor="search-query-input">
                        Pricing
                    </FieldLabel>
                    <Combobox
                        items={ALL_PRICING_MODELS}
                    >
                        <Combobox
                            multiple
                            autoHighlight
                            items={ALL_PRICING_MODELS}
                            defaultValue={ALL_PRICING_MODELS}
                        >
                            <ComboboxChips ref={anchor} className="w-full">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>{humanize(value)}</ComboboxChip>
                                            ))}
                                            <ComboboxChipsInput />
                                        </>
                                    )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {humanize(item)}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Combobox>
                </Field>
                <Field orientation={'vertical'} className={`cs-4`}>
                    <FieldLabel htmlFor="search-query-input">
                        Pricing
                    </FieldLabel>
                    <Combobox
                        items={ALL_PRICING_MODELS}
                    >
                        <Combobox
                            multiple
                            autoHighlight
                            items={ALL_PRICING_MODELS}
                            defaultValue={ALL_PRICING_MODELS}
                        >
                            <ComboboxChips ref={anchor} className="w-full">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>{humanize(value)}</ComboboxChip>
                                            ))}
                                            <ComboboxChipsInput />
                                        </>
                                    )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {humanize(item)}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Combobox>
                </Field>
                <Field orientation={'vertical'} className={`cs-4`}>
                    <FieldLabel htmlFor="search-query-input">
                        Pricing
                    </FieldLabel>
                    <Combobox
                        items={ALL_PRICING_MODELS}
                    >
                        <Combobox
                            multiple
                            autoHighlight
                            items={ALL_PRICING_MODELS}
                            defaultValue={ALL_PRICING_MODELS}
                        >
                            <ComboboxChips ref={anchor} className="w-full">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>{humanize(value)}</ComboboxChip>
                                            ))}
                                            <ComboboxChipsInput />
                                        </>
                                    )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>No items found.</ComboboxEmpty>
                                <ComboboxList>
                                    {(item) => (
                                        <ComboboxItem key={item} value={item}>
                                            {humanize(item)}
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Combobox>
                </Field>
            </FieldGroup>
        </FieldSet>
    );
}
