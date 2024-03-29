<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchConcursoCommand extends SPApiFetch
{
    protected $signature   = 'sp:concurso';
    protected $description = 'Fetch all concurso';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    // protected $uri  = "_api/web/lists/getByTitle('Concursos')/items?\$expand=Folder/Files";

    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/Concurso')/Folders?\$expand=Files&\$orderBy=Created desc";
    protected $path = 'concurso.json';
}
