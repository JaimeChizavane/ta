<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchJurisdicaoCommand extends SPApiFetch
{
    protected $signature   = 'sp:jurisdicao';
    protected $description = 'Fetch all Jurisdicao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/lists/getByTitle('Jurisdicao')/items";
    protected $path = 'jurisdicao.json';
}