<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchLawTFPSCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfps-law';
    protected $description = 'Fetch all tfps-law';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPS/_api/web/lists/getByTitle('Legislação')/items?\$expand=AttachmentFiles";
    protected $path = 'tfpslaw.json';
}