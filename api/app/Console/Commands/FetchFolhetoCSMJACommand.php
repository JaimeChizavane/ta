<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchFolhetoCSMJACommand extends SPApiFetch
{
    protected $signature   = 'sp:folhetoCSMJA';
    protected $description = 'Fetch all Folheto CSMJA';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "/CSMJA/_api/web/lists/getByTitle('Folheto%20CSMJA')/items";
    protected $path = 'folhetoCSMJA.json';
}
