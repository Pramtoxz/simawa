<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);
        User::factory()->create([
            'name' => 'UKM Senja',
            'email' => 'senja@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'ukm',
        ]);
        User::factory()->create([
            'name' => 'UKM Robotik',
            'email' => 'robotik@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'ukm',
        ]);
        User::factory()->create([
            'name' => 'MAPALA',
            'email' => 'mapala@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'ukm',
        ]);
        User::factory()->create([
            'name' => 'FSI',
            'email' => 'fsi@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'ukm',
        ]);
        User::factory()->create([
            'name' => 'UKM KWU',
            'email' => 'kwu@jayanusa.ac.id',
            'password' => Hash::make('password'),
            'role' => 'ukm',
        ]);
    }
}
