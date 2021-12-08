<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchLegislacaoCommand extends SPApiFetch
{
    protected $signature   = 'sp:legislacao';
    protected $description = 'Fetch all Legislacao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
//    protected $uri  = "_api/web/lists/getByTitle('Legislação')/items?\$expand=AttachmentFiles";
    protected $uri  = "_api/web/lists/getByTitle('Legislação')/items?\$expand=Folder/Files";
    protected $path = 'legislacao.json';
}
