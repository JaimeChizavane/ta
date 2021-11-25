<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchPublicacoesCommand extends SPApiFetch
{
    protected $signature   = 'sp:publicacoes';
    protected $description = 'Fetch all publicacoes';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/lists/getByTitle('Publicações')/items?\$expand=Folder/Files";
    protected $path = 'publicacoes.json';
}
