<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstituicaoTFPSCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfps-instituicao';
    protected $description = 'Fetch all TFPS Instituicao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPS/_api/web/lists/getByTitle('instituição')/items?\$expand=AttachmentFiles";
    protected $path = 'tfpsinstituicao.json';
}