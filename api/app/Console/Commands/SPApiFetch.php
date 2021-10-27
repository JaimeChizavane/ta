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

            foreach ($content->d->results as $result) {
                if (isset($result->AttachmentFiles->results)) {
                    $this->handleAttachements($result->AttachmentFiles->results);
                }

                if (isset($result->Folder->Files->results)) {
                    $this->handleAttachements($result->Folder->Files->results);
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

            $imageContent = $this->client->get($attachement->ServerRelativeUrl, [
                'base_uri' => config('http.sharepoint_url'),
            ])->getBody()->getContents();

            Storage::put('api/' . $attachement->ServerRelativeUrl, $imageContent);

            $this->info($attachement->Name ?? ($attachement->FileName ?? $attachement->ServerRelativeUrl));
        }
    }
}
