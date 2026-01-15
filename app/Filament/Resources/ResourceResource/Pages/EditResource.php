<?php

namespace App\Filament\Resources\ResourceResource\Pages;

use App\Filament\Resources\ResourceResource;
use App\Utilities\OpenSlp;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditResource extends EditRecord
{
    protected static string $resource = ResourceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $ogTags = OpenSlp::getOgTags($data['href']);
        $data['og_image'] = $data['og_image'] ?? ($ogTags['og:image'] ?? null);
        $data['og_title'] = $data['og_title'] ?? ($ogTags['og:title'] ?? null);
        $data['og_description'] = $data['og_description'] ?? ($ogTags['og:description'] ?? null);

        return $data;
    }
}
