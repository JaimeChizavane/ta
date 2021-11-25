<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchOportunitiesCommand extends SPApiFetch
{
    protected $signature   = 'sp:oportunities';
    protected $description = 'Fetch all oportunities';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
//    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Oportunidades%20de%20Emprego')/Files";
    protected $uri  = "_api/web/lists/getByTitle('Oportunidades%20de%20Emprego')/items?\$expand=File";
    protected $path = 'oportunities.json';
}
