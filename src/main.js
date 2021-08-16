import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './trans'
import VueAxios from 'vue-axios'
import axios from './axios'

Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue()

Vue.use(VueAxios, axios)

Vue.filter('upper', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
