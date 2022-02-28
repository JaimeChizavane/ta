<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchPlanoEstrategicoCommand extends SPApiFetch
{
    protected $signature   = 'sp:planoEstrategico';
    protected $description = 'Fetch all plano extrategico';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/lists/getByTitle('Planos Estratégicos')/items?\$expand=Folder/Files";
    protected $path = 'planoEstrategico.json';
}
