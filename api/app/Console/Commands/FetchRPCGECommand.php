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
    //  protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Relatrios%20e%20Pareceres%20CGE')/Folders?\$expand=Files&\$orderBy=Name desc";
    // protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/RPCGE')/Folders?\$expand=Files&\$orderBy=Created desc";
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Certificao%20de%20contas/Relatório%20e%20Parecer%20CGE')/Folders?\$expand=Files";
    protected $path = 'rpcge.json';
}
