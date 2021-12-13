<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchNewsCSMJACommand extends SPApiFetch
{
    protected $signature   = 'sp:csmja-news';
    protected $description = 'Fetch all CSMJA news';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "CSMJA/_api/web/lists/getByTitle('Noticias')/items?\$expand=AttachmentFiles";
    protected $path = 'cmsjanews.json';
}
