<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchPublicacoesTFPSCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfps-publicacao';
    protected $description = 'Fetch all tfps publicacao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPS/_api/web/GetFolderByServerRelativeUrl('/TFPS/publication')/Folders?\$expand=Files&\$orderBy=Created desc";
    protected $path = 'tfps_publicacao.json';
}