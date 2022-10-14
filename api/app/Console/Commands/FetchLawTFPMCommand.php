<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchLawTFPMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfpm-law';
    protected $description = 'Fetch all tfpm-law';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPM/_api/web/lists/getByTitle('Legislação')/items?\$expand=AttachmentFiles";
    protected $path = 'tfpmlaw.json';
}