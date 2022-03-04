<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstituicaoCommand extends SPApiFetch
{
    protected $signature   = 'sp:instituicao';
    protected $description = 'Fetch all Instituicao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/lists/getByTitle('Instituição')/items?\$expand=AttachmentFiles";
    protected $path = 'instituicao.json';
}
