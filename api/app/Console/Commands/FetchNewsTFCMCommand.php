<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchNewsTFCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tfcm-news';
    protected $description = 'Fetch all tfcm news';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TFCM/_api/web/lists/getByTitle('Notícias')/items?\$expand=AttachmentFiles&\$orderBy=Data_x0020_Noticia desc";
    protected $path = 'tfcmnews.json';
}
