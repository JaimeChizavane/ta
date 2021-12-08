<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstrucoesObrigatoriasCommand extends SPApiFetch
{
    protected $signature   = 'sp:instrucoesobrigatorias';
    protected $description = 'Fetch all instrucoesobrigatorias';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/nstrues%20Obrigatrias')/Files";
    protected $path = 'instrucoesobrigatorias.json';
}
