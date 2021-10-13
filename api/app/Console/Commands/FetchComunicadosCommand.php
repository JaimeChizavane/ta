<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchComunicadosCommand extends SPApiFetch
{
    protected $signature   = 'sp:comunicados';
    protected $description = 'Fetch all Comunicados';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/lists/getByTitle('Comunicados')/items";
    protected $path = 'comunicados.json';
}
