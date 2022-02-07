<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:02 PM
 */

namespace App\Console\Commands;

class FetchBannersCommand extends SPApiFetch
{
    protected $signature   = 'sp:banners';
    protected $description = 'Fetch all banners';
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "_api/web/lists/getByTitle('Banner de Imagens')/items?\$expand=AttachmentFiles&\$orderBy=Created desc&\$filter=Em_x0020_Destaque ne false";
//    protected $uri  = "_api/web/lists/getByTitle('Banner de Imagens')/items?\$expand=AttachmentFiles&\$orderBy=Created desc";
    protected $path = 'banners.json';
}
