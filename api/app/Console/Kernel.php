<?php

namespace App\Console;

use App\Console\Commands\FetchAreasCommand;
use App\Console\Commands\FetchAssuntosCommand;
use App\Console\Commands\FetchAtendimentoCommand;
use App\Console\Commands\FetchBannersCommand;
use App\Console\Commands\FetchContasCommand;
use App\Console\Commands\FetchDecretCSMJACommand;
use App\Console\Commands\FetchDenunciasCommand;
use App\Console\Commands\FetchEventosCommand;
use App\Console\Commands\FetchComunicadosCommand;
use App\Console\Commands\FetchConcursosCommand;
use App\Console\Commands\FetchFAQCommand;
use App\Console\Commands\FetchGaleriaImagensCommand;
use App\Console\Commands\FetchInstituicaoCommand;
use App\Console\Commands\FetchInstituicaoCSMJACommand;
use App\Console\Commands\FetchInstrucoesObrigatoriasCommand;
use App\Console\Commands\FetchJurisdicaoCommand;
use App\Console\Commands\FetchJurispudenciaCommand;
use App\Console\Commands\FetchDispatchementsCSMJACommand;
use App\Console\Commands\FetchLawCSMJACommand;
use App\Console\Commands\FetchLegislacaoCommand;
use App\Console\Commands\FetchNewsCommand;
use App\Console\Commands\FetchNewsCSMJACommand;
use App\Console\Commands\FetchOportunitiesCommand;
use App\Console\Commands\FetchPublicacoesCommand;
use App\Console\Commands\FetchRPCGECommand;
use App\Console\Commands\FetchSeccaoCommand;
use App\Console\Commands\FetchSugestoesCommand;
use App\Console\Commands\FetchTipoJurispCommand;
use App\Console\Commands\FetchPlanoEstrategicoCommand;
use App\Console\Commands\FetchVideosCommand;
use App\Console\Commands\SPApiFetchAll;
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
        FetchConcursosCommand::class,
        FetchComunicadosCommand::class,
        FetchPublicacoesCommand::class,
        FetchEventosCommand::class,
        FetchLegislacaoCommand::class,
        FetchFAQCommand::class,
        FetchSugestoesCommand::class,
        FetchAtendimentoCommand::class,
        FetchDenunciasCommand::class,
        FetchInstituicaoCommand::class,
        FetchInstituicaoCSMJACommand::class,
        FetchNewsCSMJACommand::class,
        FetchLawCSMJACommand::class,
        FetchDecretCSMJACommand::class,
        FetchDispatchementsCSMJACommand::class,
        FetchGaleriaImagensCommand::class,
        FetchPlanoEstrategicoCommand::class,
        FetchVideosCommand::class,
        FetchRPCGECommand::class,
        FetchContasCommand::class,
        FetchInstrucoesObrigatoriasCommand::class,
        FetchAssuntosCommand::class,
        FetchAreasCommand::class,
        FetchTipoJurispCommand::class,
        FetchSeccaoCommand::class,
        FetchBannersCommand::class,
        SPApiFetchAll::class,
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
            $schedule->command($command)->when(function () use ($command) {
                $command !== SPApiFetchAll::class;
            })->everyFifteenMinutes()->withoutOverlapping();
        }
    }
}
