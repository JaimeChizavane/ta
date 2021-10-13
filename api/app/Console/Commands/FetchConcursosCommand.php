<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchConcursosCommand extends SPApiFetch
{
    protected $signature   = 'sp:concursos';
    protected $description = 'Fetch all concursos';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/GetFolderByServerRelativeUrl('/Concursos')/Files";
    protected $path = 'concursos.json';
}
