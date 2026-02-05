<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResourceResource\Pages;
use App\Models\Resource;
use App\Models\ResourceCategory;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource as ResourcesResource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ResourceResource extends ResourcesResource
{
    protected static ?string $model = Resource::class;

    protected static ?string $slug = 'resources';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {

        $categories = ResourceCategory::all();

        return $schema
            ->columns(1)
            ->components([
                Checkbox::make('verified'),
                TextInput::make('name')
                    ->required(),
                Toggle::make('published')
                    ->default(true)
                    ->onIcon(Heroicon::Bolt)
                    ->offIcon(Heroicon::User),
                TextInput::make('href')
                    ->required(),
                Select::make('category_id')
                    ->label('Category')
                    // Build options from unique category values (value => label)
                    ->options(function (): array {
                        $r = ResourceCategory::query()
                            ->pluck('name')
                            ->toArray();
                        //
                        $r = ResourceCategory::query()
                            ->orderBy('name', 'asc')
                            ->pluck('name', 'id')
                            ->toArray();

                        return $r;
                    }),

                //                Select::make('category_id')
                //                    ->label('Category')
                //                    ->relationship('category', 'name')
                //                    ->searchable()
                //                    ->preload(),

                TextInput::make('author'),

                TextInput::make('author_page_href'),

                //                TextInput::make('og_title'),
                //                TextInput::make('og_description'),

                Checkbox::make('has_downloadables'),

                Radio::make('pricing_model')
                    ->options([
                        'free' => 'Free',
                        'freemium' => 'Freemium',
                        'paid' => 'Paid',
                        'paid_with_trial' => 'Paid w/ Trial',
                        'paid_with_drops' => 'Paid w/ Drops',
                        'mixed' => 'Mixed',
                    ])
                    ->required(),

                Radio::make('target_audience')
                    ->options([
                        'pediatric' => 'Pediatric',
                        'medical' => 'Medical',
                        'all' => 'All',
                    ])
                    ->required(),

                Checkbox::make('uses_ai'),
                Checkbox::make('updates_regularly'),

                Textarea::make('notes')
                    ->required(),

                TextInput::make('keywords')
                    ->required(),

                Select::make('tags')
                    ->relationship('tags', 'name')
                    ->multiple()
                    ->searchable()
                    ->preload()
                    ->createOptionForm([
                        TextInput::make('name')
                            ->required(),
                        TextInput::make('slug')
                            ->required(),
                    ]),

                Checkbox::make('supports_english')->default(true),
                Checkbox::make('supports_spanish'),
                Checkbox::make('supports_korean'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->label('Name')->searchable()->sortable(),
                TextColumn::make('category')->label('Category')->searchable()->sortable(),
                TextColumn::make('pricing_model')->label('Pricing Model')->searchable()->sortable(),
                TextColumn::make('target_audience')->label('Target Audience')->searchable()->sortable(),
                TextColumn::make('clicked_count')->label('Clicked Count')->sortable(),
                TextColumn::make('created_at')->label('Created At')->dateTime()->sortable(),
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
            'index' => Pages\ListResources::route('/'),
            'create' => Pages\CreateResource::route('/create'),
            'edit' => Pages\EditResource::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [];
    }
}
