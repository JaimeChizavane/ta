<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchDispatchementsCSMJACommand extends SPApiFetch
{
    protected $signature   = 'sp:csmja-dispatch';
    protected $description = 'Fetch all CSMJA dispatch';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "CSMJA/_api/Web/GetFolderByServerRelativePath(decodedurl='/CSMJA/CSMJA/Legislacao/Resolução')/Files";
    protected $path = 'cmsjadispatch.json';
}
