import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor
} from '@/components/ui/combobox';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { useResources } from '@/stores/useResources';
import { ALL_PRICING_MODELS, ALL_SLP_TYPES } from '@/types/openslp/resource';
import { humanize } from '@/utils/string-utils';

type Props = {
    className?: string;
};

export default function ResourceFilterBar({ className = '' }: Props) {
    // import searchQuery from useResources store
    const {
        searchQuery,
        setSearchQuery,
        setPricing,
        setAudience,
        toggleFeature,
        featuresFilters
    } = useResources();

    const anchor = useComboboxAnchor();
    const anchor2 = useComboboxAnchor();

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
            <FieldGroup className={`!grid grid-cols-12 gap-3 lg:gap-5`}>
                <Field orientation={'vertical'} className={`cs-12 lg:cs-4`}>
                    <FieldLabel htmlFor="search-query-input">
                        Pricing
                    </FieldLabel>
                    <Combobox items={ALL_PRICING_MODELS}>
                        <Combobox
                            multiple
                            autoHighlight
                            onValueChange={(values) => {
                                setPricing(values as typeof ALL_PRICING_MODELS);
                            }}
                            items={ALL_PRICING_MODELS}
                            defaultValue={ALL_PRICING_MODELS}
                        >
                            <ComboboxChips ref={anchor} className="w-full">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>
                                                    {humanize(value)}
                                                </ComboboxChip>
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
                <Field orientation={'vertical'} className={`cs-12 lg:cs-4`}>
                    <FieldLabel htmlFor="search-query-input">Type</FieldLabel>
                    <Combobox items={ALL_SLP_TYPES}>
                        <Combobox
                            multiple
                            autoHighlight
                            onValueChange={(values) => {
                                setAudience(values as typeof ALL_SLP_TYPES);
                            }}
                            items={ALL_SLP_TYPES}
                            defaultValue={ALL_SLP_TYPES}
                        >
                            <ComboboxChips ref={anchor2} className="w-full">
                                <ComboboxValue>
                                    {(values) => (
                                        <>
                                            {values.map((value: string) => (
                                                <ComboboxChip key={value}>
                                                    {humanize(value)}
                                                </ComboboxChip>
                                            ))}
                                            <ComboboxChipsInput />
                                        </>
                                    )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor2}>
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
                <Field orientation={'vertical'} className={`cs-6 lg:cs-4`}>
                    <FieldLabel htmlFor={"includes-downloadables"}>
                        Must include downloadables
                    </FieldLabel>
                    <Field orientation={'horizontal'}>
                        <Switch
                            id="includes-downloadables"
                            checked={featuresFilters.hasDownloadables}
                            onCheckedChange={() => {
                                toggleFeature('hasDownloadables');
                            }}
                        />
                    </Field>
                </Field>
                {/*<Field orientation={'vertical'} className={`cs-6 lg:cs-2`}>*/}
                {/*    <FieldLabel></FieldLabel>*/}
                {/*    <Field orientation={'horizontal'}>*/}
                {/*        <Switch*/}
                {/*            id="includes-downloadables"*/}
                {/*            checked={featuresFilters.hasDownloadables}*/}
                {/*            onCheckedChange={() => {*/}
                {/*                toggleFeature('hasDownloadables');*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Field>*/}
                {/*</Field>*/}
            </FieldGroup>
        </FieldSet>
    );
}
