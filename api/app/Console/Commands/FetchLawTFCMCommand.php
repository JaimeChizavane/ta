<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchLawTFCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfpm-law';
    protected $description = 'Fetch all tfcm-law';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFCM/_api/web/lists/getByTitle('Legislação')/items?\$expand=AttachmentFiles";
    protected $path = 'tfcmlaw.json';
}