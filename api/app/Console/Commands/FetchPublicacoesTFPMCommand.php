<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchPublicacoesTFPMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfpm-publicacao';
    protected $description = 'Fetch all tfpm publicacao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPM/_api/web/GetFolderByServerRelativeUrl('/TFPM/Publicacao')/Folders?\$expand=Files&\$orderBy=Created desc";
    protected $path = 'tfpm_publicacao.json';
}