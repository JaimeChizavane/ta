<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchContasCommand extends SPApiFetch
{
    protected $signature   = 'sp:contas';
    protected $description = 'Fetch all contas';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Certificao%20de%20contas')/Files";
    protected $path = 'contas.json';
}
