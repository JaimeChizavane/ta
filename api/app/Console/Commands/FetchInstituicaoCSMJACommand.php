<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchInstituicaoCSMJACommand extends SPApiFetch
{
    protected $signature   = 'sp:csmja-instituicao';
    protected $description = 'Fetch all CSMJA Instituicao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "CSMJA/_api/web/lists/getByTitle('instituicao')/items?\$expand=AttachmentFiles";
    protected $path = 'csmjainstituicao.json';
}
