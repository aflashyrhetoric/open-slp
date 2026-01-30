import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useResources } from '@/stores/useResources';

type Props = {
    className?: string;
};

export default function ResourceFilterBar({ className = '' }: Props) {
    // import searchQuery from useResources store
    const { searchQuery, setSearchQuery } = useResources();

    return (
        <div className={`cs-12 px-9 ${className}`}>
            {searchQuery}
            <FieldGroup>
                <Field orientation={'vertical'}>
                    <FieldLabel htmlFor="search-query-input">
                        Search Resources
                    </FieldLabel>
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Calendar..."
                        id="search-query-input"
                    />
                </Field>
                <Field orientation={'horizontal'}>
                    <Checkbox
                        id="only-downloadables"
                        // checked={onlyDownloadables}
                        // onCheckedChange={(checked) =>
                        //     setOnlyDownloadables(
                        //         Boolean(checked),
                        //     )
                        // }
                    />
                    <Label htmlFor="only-downloadables">
                        Only show resources with downloadables
                    </Label>
                </Field>
            </FieldGroup>
        </div>
    );
}
