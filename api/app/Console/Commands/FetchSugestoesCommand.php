<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchSugestoesCommand extends SPApiFetch
{
    protected $signature   = 'sp:sugestoes';
    protected $description = 'Fetch all Sugestoes';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/lists/getByTitle('Sugestão%20e%20Reclamação')/items";
    protected $path = 'sugestoes.json';
}
