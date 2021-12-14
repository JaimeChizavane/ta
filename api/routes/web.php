<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Services\HttpClient;
use Illuminate\Support\Facades\Log;

$router->get('/', function () use ($router) {
    return 'Tribunal Administrativo';
});

$router->post('/api/denuncias', function () use ($router) {

    /**
     * @var $client HttpClient
     */

    try {
        $client = app(HttpClient::class);

        $request = $client->post("_api/contextinfo");

        $digest = json_decode($request->getBody()->getContents());

        $url = "_api/web/lists/getByTitle('Submissão de denúncia')/items";

        if (request()->get('Title') !== 'Denúncia') {
            $url = "_api/web/lists/getByTitle('Sugestão e Reclamação')/items";
            $formData = [
                'Title'                 => request()->get('Assunto'),
                'Tipo'                  => request()->get('Title'),
                'Descri_x00e7__x00e3_o' => request()->get('Descri_x00e7__x00e3_o'),
                'Nome'                  => request()->get('Nome'),
                'Email'                 => request()->get('Email'),
                'Telefone'              => request()->get('Telefone'),
            ];
        } else {
            $formData = request()->all();
        }

        $request = $client->post($url, [
            'json'    => $formData,
            'headers' => [
                'X-RequestDigest' => $digest->d->GetContextWebInformation->FormDigestValue,
            ],
        ]);


        return response()->json(json_decode($request->getBody()->getContents()));
    } catch (\Exception $exception) {

        return response()->json($exception->getMessage());
    }
});
