<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchFAQTFPSCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfps-faq';
    protected $description = 'Fetch all tfps FAQ';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFPS/_api/web/lists/getByTitle('Perguntas Frequentes')/items";
    protected $path = 'tfpsfaq.json';
}