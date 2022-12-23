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

class FetchJurispudencia3SecaoCommand extends SPApiFetch
{
    protected $signature   = 'sp:jurispudencia3secao';
    protected $description = 'Fetch all jurispudencia 3 Seccao';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;

    //    protected $uri  = "_api/web/lists/getByTitle('Jurisprudência')/items?\$expand=Folder/Files&\$top=10&\$filter=Sec_x00e7__x00e3_o%20ne%20null";
    // protected $uri = "_api/web/lists/getByTitle('Jurisprudência da 2.ª Secção')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002";
    //    protected $uri  = "_api/Web/GetFolderByServerRelativePath(decodedurl='/Jurisprudencia/Acórdãos')/Folders?\$expand=Folders/Files,Folders/Folders/Files&\$orderBy=Name";
    // protected $path = 'jurispudencia2secao.json';

    public function handle()
    {
        $otherUris = [
            //            'jurispudencia.json'  => "_api/web/lists/getByTitle('Jurisprudência')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
            'jurispudencia31.json' => "_api/web/lists/getByTitle('Jurisprudência da 3.ª Secção 1.ª Subsecção Relativo a Pessoal')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
            'jurispudencia32.json' => "_api/web/lists/getByTitle('Jurisprudência da 3.ª Secção 1.ª Subsecção Relativo Não Pessoal')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
            'jurispudencia33.json' => "_api/web/lists/getByTitle('Jurisprudência da 3.ª Secção 1.ª Subsecção Relativo a Multas')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
            'jurispudencia34.json' => "_api/web/lists/getByTitle('Jurisprudência da 3.ª Secção 1.ª Subsecção Relativo a Recursos')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
            'jurispudencia35.json' => "_api/web/lists/getByTitle('Jurisprudencia da 3.ª Secção 2.ª Subsecção')/items?\$expand=Folder,File,AttachmentFiles&\$orderBy=Sec_x00e7__x00e3_o_x0020_de_x002",
        ];
        $this->fetchMultipleUris($otherUris, 'jurispudencia3secao.json');
    }
}