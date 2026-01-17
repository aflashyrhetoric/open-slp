<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class GeneratePassword extends Command
{
    protected $signature = 'password:generate {password? : The password to hash} {--length=16 : The length of the generated password}';

    protected $description = 'Generate a random password and its hash, or hash a provided password';

    public function handle(): int
    {
        $password = $this->argument('password') ?? Str::password((int) $this->option('length'));
        $hash = Hash::make($password);

        $this->components->twoColumnDetail('Password', $password);
        $this->components->twoColumnDetail('Hash', $hash);

        return self::SUCCESS;
    }
}
