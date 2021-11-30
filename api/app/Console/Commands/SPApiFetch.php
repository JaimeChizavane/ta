<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 10/8/21
 * Hora: 1:16 PM
 */

namespace App\Console\Commands;

use App\Services\HttpClient;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

abstract class SPApiFetch extends Command
{
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/lists/getByTitle('Noticias')/items";
    protected $path = 'news.json';

    public function __construct(HttpClient $client)
    {
        parent::__construct();
        $this->client = $client;
    }

    public function handle()
    {
        try {
            $jsonContent = $this->client->get($this->uri)->getBody()->getContents();

            Storage::put('api/' . $this->path, $jsonContent);


            $content = json_decode($jsonContent);

//            if (isset($content->d->results[0]->ServerRelativeUrl)) {
//                $this->handleAttachements($content->d->results);
//            }

            foreach ($content->d->results as $result) {

                if ($result->__metadata->type == 'SP.FILE') {
                    $this->handleAttachements([$result]);
                }

                if (isset($result->AttachmentFiles->results)) {
                    $this->handleAttachements($result->AttachmentFiles->results);
                }

                if (isset($result->File->Exists)) {
                    $this->handleAttachements([$result->File]);
                }

                if (isset($result->Folder->Files->results)) {
                    $this->handleAttachements($result->Folder->Files->results);
                }

                if (isset($result->Folders->results)) {
                    foreach ($result->Folders->results as $folder) {
                        $this->handleAttachements($folder->Files->results);
                    }
                }

                if (isset($result->Files->results)) {
                    $this->handleAttachements($result->Files->results);
                }


                if (isset($result->Folders->results)) {
                    foreach ($result->Folders->results as $folder) {
                        if (isset($folder->Folders->results)) {
                            foreach ($folder->Folders->results as $innerFolder) {
                                $this->handleAttachements($innerFolder->Files->results);
                            }
                        }
                    }
                }
            }

            $this->info('Data loaded.');
        } catch (GuzzleException $exception) {
            $this->error($exception->getMessage());
        }
    }

    protected function handleAttachements($attachements)
    {
        foreach ($attachements as $attachement) {

            if (!isset($attachement->ServerRelativeUrl)) {
                continue;
            }

            if (!config('http.allow_download')) {
                $this->warn($attachement->Name ?? ($attachement->FileName ?? $attachement->ServerRelativeUrl));

                continue;
            }

            $imageContent = $this->client->get($attachement->ServerRelativeUrl, [
                'base_uri' => config('http.sharepoint_url') . '/_api/',
            ])->getBody()->getContents();

            Storage::put('api/' . $attachement->ServerRelativeUrl, $imageContent);

            $this->info($attachement->Name ?? ($attachement->FileName ?? $attachement->ServerRelativeUrl));
        }
    }
}
