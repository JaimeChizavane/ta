<template>
  <li>
    <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
      <li class="d-none d-xl-block">
        <span>
        Visitas : 
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                id="count_visitors">
            {{ usersCount }}
           </span>
           </span>


      </li>
      <li class="d-none d-xl-block">

      </li>
      <li class="d-none d-xl-block">
        <a href="https://mail.ta.gov.mz/" class="action__btn" target="_blank"><i
            class="fa-solid fa-envelope-circle-check"></i> <img src="assets/images/logo/webmail.png" class="logo-light"
                                                                alt="logo"></a>
        <!-- <button class="action__btn action__btn-login open-login-popup">
          <i class="icon-user"></i><span>{{ $tc('Entrar') }}</span>
        </button> -->
      </li>
    </ul><!-- /.navbar-actions -->
  </li>
</template>

<script>
import Echo from 'laravel-echo'

window.io = require('socket.io-client')
window.Pusher = require('pusher-js')

const echoinstance = process.env.VUE_APP_WEBSOCKET_HOST ? new Echo({
  key: process.env.VUE_APP_WEBSOCKET_KEY,
  wsHost: process.env.VUE_APP_WEBSOCKET_HOST,
  // wsPort: process.env.VUE_APP_WEBSOCKET_PORT,
  // wssPort: process.env.VUE_APP_WEBSOCKET_PORT,
  authEndpoint: process.env.VUE_APP_WEBSOCKET_AUTH,
  broadcaster: 'pusher',
  // key: "a08cd5563a35608a631a71bf7d66ea68",
  //     ws://localhost:6001/app/
  // wsHost: "localhost",
  wsPort: 6001,
  wssPort: 6001,
  forceTLS: false,
  encrypted: true,
  disableStats: true,
  enabledTransports: ['ws', 'wss'],
  // authEndpoint: "https://api.ta.test/broadcasting/auth"
}) : {}

export default {
  name: "QGetQuote",
  data() {
    return {
      users: [],
      usersCount: 0
    }
  },
  mounted() {
    echoinstance.connect()

    echoinstance.join('chat').here((users) => {
          this.users = users;
          this.usersCount = users.length;

          console.log(users)
        })
        .joining((user) => {
          console.log(user)
          this.users.push(user);
          this.usersCount = this.usersCount + 1;
        })
        .leaving((user) => {
          console.log(user)
          // this.users.$remove(user);
          this.usersCount = this.usersCount - 1;
        });

    // echoinstance.channel('test')
    //   .listen('event', (e) => {
    //     console.log(e)
    //   }).listen('.event', (e) => {
    //     console.log(e)
    //   }).listen('.App\\Events\\TestEvent', (e) => {
    //     console.log(e)
    //   }).listen('App\\Events\\TestEvent', (e) => {
    //     console.log(e)
    //   })
    //
    // echoinstance.join('invoice.1')
    //   .here((users) => {
    //     console.log(users)
    //   })
    //   .joining((user) => {
    //     console.log(user.name)
    //   })
  },
  methods: {},
  beforeDestroy() {
    echoinstance.disconnect()
  }
}
</script>

<style scoped>

</style>
