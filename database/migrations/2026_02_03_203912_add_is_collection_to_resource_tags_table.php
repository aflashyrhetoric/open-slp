<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('resource_tags', function (Blueprint $table) {
            $table->boolean('is_collection')->default(false)->after('description');
        });
    }

    public function down(): void
    {
        Schema::table('resource_tags', function (Blueprint $table) {
            $table->dropColumn('is_collection');
        });
    }
};
