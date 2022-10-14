<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:16 PM
 */

namespace App\Console\Commands;

use App\Services\HttpClient;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

class SPApiFetchAll extends Command
{
    protected $signature   = 'sp:fetchall';
    protected $description = 'Fetch all data';
    public    $list        = [
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
        FetchVideosCommand::class,
        FetchContasCommand::class,
        FetchRPCGECommand::class,
        FetchInstrucoesObrigatoriasCommand::class,
        FetchAssuntosCommand::class,
        FetchTipoJurispCommand::class,
        FetchAreasCommand::class,
        FetchSeccaoCommand::class,
        FetchBannersCommand::class,
        FetchPlanoEstrategicoCommand::class,
        FetchRelatorioAuditoriaDesempenhoCommand::class,
        FetchFolhetoDaJurisdicaoCommand::class,
        FetchFolhetoCSMJACommand::class,
        FetchInstrucoesERecomendacoesCommand::class,
        FetchGaleriaDestaqueCommand::class,
        FetchJurispudenciaPlenarioCommand::class,
        FetchPublicacoesCSMJACommand::class,
        FetchInstituicaoTFCMCommand::class,
        FetchInstituicaoTFPMCommand::class,
        FetchInstituicaoTFPSCommand::class,
        FetchNewsTFPSCommand::class,
        FetchNewsTFPMCommand::class,
        FetchNewsTFCMCommand::class,
        FetchFAQTFCMCommand::class,
        FetchFAQTFPMCommand::class,
        FetchFAQTFPSCommand::class,
    ];

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        foreach ($this->list as $command) {
            Artisan::call($command);
        }
    }
}