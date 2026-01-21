<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResourceCategoryResource\Pages;
use App\Models\ResourceCategory;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ResourceCategoryResource extends Resource
{
    protected static ?string $model = ResourceCategory::class;

    protected static ?string $slug = 'resource-categories';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        $categories = ResourceCategory::all();

        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),

                TextInput::make('icon'),

                TextInput::make('position')
                    ->required()
                    ->integer(),

//                TextInput::make('parent_id')
//                    ->integer(),

                Select::make('parent_id')
                    ->label('Parent Category (optional)')
                    ->disabled(
                        fn () => $categories->isEmpty()
                    )
                    // Build options from unique category values (value => label)
                    ->options(function (): array {
                        return ResourceCategory::query()
                            ->orderBy('name', 'asc')
                            ->pluck('name', 'name')
                            ->toArray();
                    }),


//                TextInput::make('bg_color')
//                    ->label('Background Color')
//                    ->required(),
                ColorPicker::make('bg_color')
                    ->label('Background Color')
                    ->required(),

                Textarea::make('description')
                    ->required(),

//                TextEntry::make('created_at')
//                    ->label('Created Date')
//                    ->state(fn(?ResourceCategory $record): string => $record?->created_at?->diffForHumans() ?? '-'),
//
//                TextEntry::make('updated_at')
//                    ->label('Last Modified Date')
//                    ->state(fn(?ResourceCategory $record): string => $record?->updated_at?->diffForHumans() ?? '-'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('icon'),

                TextColumn::make('position'),

                TextColumn::make('parent_id'),

                TextColumn::make('bg_color'),

                TextColumn::make('description'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListResourceCategories::route('/'),
            'create' => Pages\CreateResourceCategory::route('/create'),
            'edit' => Pages\EditResourceCategory::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name'];
    }
}
