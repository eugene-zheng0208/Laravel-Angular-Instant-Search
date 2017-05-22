<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            ['body' => 'Hello, Ryan'],
            ['body' => 'these'],
            ['body' => 'are'],
            ['body' => 'made'],
            ['body' => 'from'],
            ['body' => 'seeds'],
            ['body' => 'abc'],
            ['body' => 'ghi'],
            ['body' => 'hij'],
            ['body' => 'ijk'],
        ]);
    }
}
