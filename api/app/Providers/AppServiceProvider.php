<?php

namespace App\Providers;

use App\Services\HttpClient;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(HttpClient::class, function ($app) {
            return new HttpClient([
                'base_uri' => config('http.api_url'),
                'cookies'  => true,
                'auth'     => [config('http.api_username'), config('http.api_password'), 'ntlm'],
                'headers'  => [
                    'Content-Type' => 'application/json',
                    'Accept'       => 'application/json; odata=verbose',
                ],
            ]);
        });
    }
}
