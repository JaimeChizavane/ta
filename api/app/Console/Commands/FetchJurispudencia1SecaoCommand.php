<?php

/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

use GuzzleHttp\Exception\GuzzleException;

class FetchJurispudencia1SecaoCommand extends SPApiFetch
{
    protected $signature   = 'sp:jurispudencia1secao';
    protected $description = 'Fetch all jurispudencia 1 Seccao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;

    //    protected $uri  = "_api/web/lists/getByTitle('Jurisprudência')/items?\$expand=Folder/Files&\$top=10&\$filter=Sec_x00e7__x00e3_o%20ne%20null";
    protected $uri = "_api/web/lists/getByTitle('Jurisprudência da 1.ª Secção')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002";
    //    protected $uri  = "_api/Web/GetFolderByServerRelativePath(decodedurl='/Jurisprudencia/Acórdãos')/Folders?\$expand=Folders/Files,Folders/Folders/Files&\$orderBy=Name";
    protected $path = 'jurispudencia1secao.json';
}