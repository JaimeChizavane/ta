<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchJurispudenciaCommand extends SPApiFetch
{
    protected $signature   = 'sp:jurispudencia';
    protected $description = 'Fetch all jurispudencia';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/lists/getByTitle('Jurisprudência')/items?\$expand=Folder/Files&\$top=10&\$filter=Sec_x00e7__x00e3_o%20ne%20null";
    protected $path = 'jurispudencia.json';
}