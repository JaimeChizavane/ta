<?php

namespace App\Console;

use App\Console\Commands\FetchComunicadosCommand;
use App\Console\Commands\FetchConcursosCommand;
use App\Console\Commands\FetchJurisdicaoCommand;
use App\Console\Commands\FetchJurispudenciaCommand;
use App\Console\Commands\FetchNewsCommand;
use App\Console\Commands\FetchOportunitiesCommand;
use Illuminate\Console\Scheduling\Schedule;
use Laravel\Lumen\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        FetchOportunitiesCommand::class,
        FetchNewsCommand::class,
        FetchJurisdicaoCommand::class,
        FetchJurispudenciaCommand::class,
        FetchComunicadosCommand::class,
        FetchConcursosCommand::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     *
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        foreach ($this->commands as $command) {
            $schedule->command($command)->everyFifteenMinutes()->withoutOverlapping();
        }
    }
}
