<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchRelatorioAuditoriaDesempenhoCommand extends SPApiFetch
{
    protected $signature   = 'sp:RelatorioAuditoriaDesempenho';
    protected $description = 'Fetch all Relatório de Auditoria de Desempenho';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/RelatorioAuditoriaDesempenho')/Folders?\$expand=Files&\$orderBy=Name desc";
    protected $path = 'relatorioAuditoriaDesempenho.json';
}
