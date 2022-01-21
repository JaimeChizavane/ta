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
use Illuminate\Support\Str;
use Spatie\PdfToImage\Pdf;

abstract class SPApiFetch extends Command
{
    /**
     * @var \App\Services\HttpClient
     */
    protected $client;
    protected $uri  = "web/lists/getByTitle('Noticias')/items";
    protected $path = 'news.json';
    public    $jsonContent;

    public function __construct(HttpClient $client)
    {
        parent::__construct();
        $this->client = $client;
    }

    /**
     * @return void
     */
    public function handle()
    {
        try {
            $this->fetchJsonContent()->handleJsonResponse();


            $this->info($this->path . ' Data loaded.');
        } catch (GuzzleException $exception) {
            $this->error($exception->getMessage());
        }
    }

    /**
     * @param $attachements
     *
     * @return void
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
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

            if (!Storage::exists('api' . $attachement->ServerRelativeUrl)) {
                Storage::put('api' . $attachement->ServerRelativeUrl, $imageContent);
            }


            if (Str::endsWith($attachement->ServerRelativeUrl, ['.pdf', '.PDF']) && Str::startsWith($attachement->ServerRelativeUrl, ['/Publicaes'])) {
                try {


                    if (Storage::exists('api/thumbs' . $attachement->ServerRelativeUrl . '.png') && !Storage::size('api/thumbs' . $attachement->ServerRelativeUrl . '.png')) {
                        Storage::delete('api/thumbs' . $attachement->ServerRelativeUrl . '.png');
                    }

                    if (!Storage::exists('api/thumbs' . $attachement->ServerRelativeUrl . '.png')) {
                        $pdf = new Pdf(Storage::path('api' . $attachement->ServerRelativeUrl));
                        Storage::put('api/thumbs' . $attachement->ServerRelativeUrl . '.png', '');
                        $pdf->setPage(1)->setCompressionQuality(10)
                            ->saveImage(Storage::path('api/thumbs' . $attachement->ServerRelativeUrl . '.png'));
                    }

                } catch (\Exception $e) {
                    $this->error($e->getMessage());
                }
            }

            $this->info($attachement->Name ?? ($attachement->FileName ?? $attachement->ServerRelativeUrl));
        }
    }

    /**
     * @param $content
     *
     * @return SPApiFetch
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    protected function handleJsonResponse($content = null): SPApiFetch
    {
        $content = $content ?: $this->jsonContent;

        foreach ($content->d->results as $result) {

            if (strtolower($result->__metadata->type) == 'sp.file') {
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

        return $this;
    }

    /**
     * @param null $uri
     * @param null $path
     *
     * @return self
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    protected function fetchJsonContent($uri = null, $path = null): SPApiFetch
    {
        $json = $this->client->get($uri ?: $this->uri)->getBody()->getContents();

        $path = 'api/' . ($path ?: $this->path);

        $this->storeJson($path, $json);

        $this->jsonContent = json_decode($json);

        return $this;
    }

    protected function storeJson($path, $json)
    {
        Storage::put('api/' . $path, $json);
    }

    /**
     * @param array $otherUris
     * @param       $fileName
     *
     * @return void
     */
    protected function fetchMultipleUris(array $otherUris, $fileName): void
    {
        $combinedData = null;

        foreach ($otherUris as $path => $uri) {
            try {
                $fetch = $this->fetchJsonContent($uri, $path)->handleJsonResponse();

                if (!$combinedData) {
                    $combinedData = $fetch->jsonContent;
                } else {
                    $combinedData->d->results = array_merge($combinedData->d->results, $fetch->jsonContent->d->results);
                }


                $this->info($path . ' Data loaded.');
            } catch (GuzzleException $exception) {
                $this->error($exception->getMessage());
            }
        }


        if ($combinedData) {

            $this->storeJson($fileName, json_encode($combinedData));
        }
    }
}
