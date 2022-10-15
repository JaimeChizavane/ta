<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchFAQTFCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfcm-faq';
    protected $description = 'Fetch all tfcm FAQ';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFCM/_api/web/lists/getByTitle('Perguntas Frequentes')/items";
    protected $path = 'tfcmfaq.json';
}