<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchNewsTADCMCommand extends SPApiFetch
{
    protected $signature   = 'sp:tadcm-news';
    protected $description = 'Fetch all tadcm news';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "TADCM/_api/web/lists/getByTitle('Notícias')/items?\$expand=AttachmentFiles&\$orderBy=Data_x0020_Noticia desc";
    protected $path = 'tadcmnews.json';
}
