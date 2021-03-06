<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchRPCGECommand extends SPApiFetch
{
    protected $signature   = 'sp:rpcge';
    protected $description = 'Fetch all rpcge';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Relatrios%20e%20Pareceres%20CGE')/Folders?\$expand=Files&\$orderBy=Name desc";
    protected $path = 'rpcge.json';
}
