import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './trans'
import VueAxios from 'vue-axios'
import axios from './axios'
import moment from 'moment'
import 'moment/locale/pt'


Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

Vue.use(VueAxios, axios)

Vue.filter('upper', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

Vue.filter('date', function (value) {
  if (!value) return ''
  return moment(value).locale('pt').format('LLLL')
})

Vue.filter('excerpt', function (value) {
  if (!value) return ''

  if (value.length > 100) {
    value = value.substring(0, 100) + '...'
  }

  return value
})

window.vm = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
