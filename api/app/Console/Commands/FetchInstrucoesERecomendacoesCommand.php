<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstrucoesERecomendacoesCommand extends SPApiFetch
{
    protected $signature   = 'sp:instrucoesEReclamacoes';
    protected $description = 'Fetch all Instrucoes e Reclamacoes';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/InstrucoesEReclamacoes')/Files";
    protected $path = 'instrucoesEReclamacoes.json';
}
