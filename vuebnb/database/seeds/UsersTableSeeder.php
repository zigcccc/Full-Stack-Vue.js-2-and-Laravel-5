<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=> 'Ziga Krasovec',
            'email'=> 'zkrasovec@gmail.com',
            'password'=> Hash::make('password123'),
            'saved'=> [1, 5, 7, 9]
        ]);
    }
}
