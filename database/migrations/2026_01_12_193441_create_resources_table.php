<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('href');
            $table->string('author')->nullable();
            $table->string('author_page_href')->nullable();
            $table->string('og_image')->nullable();
            $table->string('og_title')->nullable();
            $table->text('og_description')->nullable();
            $table->boolean('has_downloadables')->default(false);
            $table->string('pricing_model'); // free, freemium, paid
            $table->string('target_audience'); // pediatric, medical
            $table->boolean('uses_ai')->default(false);
            $table->boolean('updates_regularly')->default(false);
            $table->text('notes');
            $table->string('keywords');
            $table->integer('clicked_count')->default(0);
            $table->boolean('supports_english')->default(true);
            $table->boolean('supports_spanish')->default(false);
            $table->boolean('supports_korean')->default(false);
            $table->string('category');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};
