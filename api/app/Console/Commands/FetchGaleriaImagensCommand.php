<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchGaleriaImagensCommand extends SPApiFetch
{
    protected $signature   = 'sp:images';
    protected $description = 'Fetch all Images';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/GetFolderByServerRelativeUrl('/GaleriaDeImagens')/Folders?\$expand=Folders/Files&\$orderBy=Name desc";
    protected $path = 'images.json';
}
