<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstituicaoTADCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tadcm-instituicao';
    protected $description = 'Fetch all tfcm Instituicao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TADCM/_api/web/lists/getByTitle('instituição')/items?\$expand=AttachmentFiles";
    protected $path = 'tadcminstituicao.json';
}