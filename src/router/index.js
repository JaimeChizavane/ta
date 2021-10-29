import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      display: 'menus.home',
      display_title: 'Tribunal Administrativo de Moçambique'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/support_services',
    name: 'support_services',
    meta: {
      display: 'menus.support_services',
      parent: 'menus.institution'
    },
    component: () => import('@/views/SupportService.vue')
  },
  {
    path: '/competencies',
    name: 'competencies',
    meta: {
      display: 'menus.competencies',
      parent: 'menus.institution'
    },
    component: () => import('@/views/Competencies.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      display: 'menus.history',
      parent: 'menus.institution'
    },
    component: () => import('@/views/History.vue')
  },
  {
    path: '/structure',
    name: 'structure',
    meta: {
      display: 'menus.structure',
      parent: 'menus.institution'
    },
    component: () => import('@/views/Structure.vue')
  },
  {
    path: '/section1',
    name: 'section1',
    meta: {
      display: 'menus.section1',
      parent: 'menus.institution'
    },
    component: () => import('@/views/1Section.vue')
  },
  {
    path: '/section2',
    name: 'section2',
    meta: {
      display: 'menus.section2',
      parent: 'menus.institution'
    },
    component: () => import('@/views/2Section.vue')
  },
  {
    path: '/section3',
    name: 'section3',
    meta: {
      display: 'menus.section3',
      parent: 'menus.institution'
    },
    component: () => import('@/views/3Section.vue')
  },
  {
    path: '/strategic_plan',
    name: 'strategic_plan',
    meta: {
      display: 'menus.strategic_plan',
      parent: 'menus.institution'
    },
    component: () => import('@/views/StrategicPlan.vue')
  },
  {
    path: '/contests',
    name: 'contests',
    meta: {
      display: 'menus.contests',
      parent: 'menus.institution'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/work_opportunity',
    name: 'work_opportunity',
    meta: {
      display: 'menus.work_opportunity',
      parent: 'menus.institution'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/international_cooperation',
    name: 'international_cooperation',
    meta: {
      display: 'menus.international_cooperation',
      parent: 'menus.institution'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/legislation',
    name: 'legislation',
    meta: {
      display: 'menus.legislation'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/law',
    name: 'law',
    meta: {
      display: 'menus.law',
      parent: 'menus.legislation'
    },
    component: () => import('@/views/Law.vue')
  },
  {
    path: '/decret',
    name: 'decret',
    meta: {
      display: 'menus.decret',
      parent: 'menus.legislation'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/dispatchment',
    name: 'dispatchment',
    meta: {
      display: 'menus.dispatchment',
      parent: 'menus.legislation'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/dispatch',
    name: 'dispatch',
    meta: {
      display: 'menus.dispatch'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/dispatch',
    name: 'dispatch',
    meta: {
      display: 'menus.dispatch'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/statistic',
    name: 'statistic',
    meta: {
      display: 'menus.statistic'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/dispatch',
    name: 'dispatch',
    meta: {
      display: 'menus.dispatch'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/sub_section',
    name: 'sub_section',
    meta: {
      display: 'menus.sub_section'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/instruction_recomendation',
    name: 'instruction_recomendation',
    meta: {
      display: 'menus.instruction_recomendation'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/fluxogram',
    name: 'fluxogram',
    meta: {
      display: 'menus.fluxogram'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/jurispendency',
    name: 'jurispendency',
    meta: {
      display: 'menus.jurispendency'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/acordion',
    name: 'acordion',
    meta: {
      display: 'menus.acordion'
    },
    component: () => import('@/views/Acordion.vue')
  },
  {
    path: '/certification',
    name: 'certification',
    meta: {
      display: 'menus.certification'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      display: 'menus.account'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/rpcge',
    name: 'rpcge',
    meta: {
      display: 'menus.rpcge'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/managers',
    name: 'managers',
    meta: {
      display: 'menus.managers'
    },
    component: () => import('@/views/AboutUs.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: {
      display: 'blog'
    },
    component: () => import('@/views/BlogList.vue')
  },
  {
    path: '/blog/:guid',
    name: 'blog-item',
    meta: {
      display: 'blog'
    },
    component: () => import('@/views/BlogItem.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      display: 'not_found'
    },
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
    return { x: 0, y: 0, behavior: 'smooth' }
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

router.afterEach((to) => {
  if (to.name && (to.meta.display || to.meta.display_title)) {
    document.title = to.meta.display_title ? to.meta.display_title : window.vm.$tc(to.meta.display, 2).replace(/(^|\s)\S/g, l => l.toUpperCase())
  }
})

export default router
