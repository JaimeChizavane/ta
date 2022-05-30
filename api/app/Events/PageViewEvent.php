<?php
/**
 * Criado por Maizer Aly de O. Gomes para api.
 * Email: maizer.gomes@gmail.com / maizer.gomes@ekutivasolutions / maizer.gomes@outlook.com
 * Usuário: maizerg
 * Data: 5/30/22
 * Hora: 1:04 PM
 */

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class PageViewEvent extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public function broadcastOn()
    {
        return ['user'];
    }
}
