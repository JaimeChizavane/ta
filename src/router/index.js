import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      display: 'home'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      display: 'blog'
    },
    component: () => import('../views/BlogList.vue')
  },
  {
    path: '/blog/:guid',
    name: 'blog-item',
    meta: {
      display: 'blog'
    },
    component: () => import('../views/BlogItem.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      display: 'not_found'
    },
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})


// router.beforeResolve((to, from, next) => {
// let active = window.localStorage.getItem('language')
//
// if (active) {
//   let activeLanguage = JSON.parse(active)
//   i18n.locale = activeLanguage.locale
// }
// If this isn't an initial page load.
// if (to.name) {
// Start the route progress bar.
// NProgress.start()
// }
// next()
// })

// router.afterEach((to, from) => {
// window.mainExecution()
// })

export default router
