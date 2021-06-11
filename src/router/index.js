import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})


router.beforeResolve((to, from, next) => {
  // let active = window.localStorage.getItem('language')
  //
  // if (active) {
  //   let activeLanguage = JSON.parse(active)
  //   i18n.locale = activeLanguage.locale
  // }
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    // NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  window.mainExecution()
})

export default router
