import Vue from 'vue'
import VueI18n from 'vue-i18n'
import common from './modules/translations/all.json'

Vue.use(VueI18n)

const messages = common

let locale = 'pt'
let defaultLocale = window.localStorage.getItem('language')

if (defaultLocale) {
  locale = JSON.parse(defaultLocale).locale
}

const i18n = new VueI18n({
  locale: locale, // set locale
  fallbackLocale: 'pt',
  messages // set locale messages
})

export default i18n
