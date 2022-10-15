<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchPublicacoesTFCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfcm-publicacao';
    protected $description = 'Fetch all tfcm publicacao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFCM/_api/web/GetFolderByServerRelativeUrl('publication')/Folders?\$expand=Files&\$orderBy=Created desc";
    protected $path = 'tfcm_publicacao.json';
}