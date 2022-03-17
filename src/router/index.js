import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        meta: {
            display: 'menus.home',
            display_title: 'Tribunal Administrativo de Moçambique'
        },
        component: () =>
            import ('@/views/Home.vue')
    },
    {
        path: '/support_services',
        name: 'support_services',
        meta: {
            display: 'menus.support_services',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/SupportService.vue')
    },
    {
        path: '/competencies',
        name: 'competencies',
        meta: {
            display: 'menus.competencies',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/Competencies.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta: {
            display: 'menus.history',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/History.vue')
    },
    {
        path: '/structure',
        name: 'structure',
        meta: {
            display: 'menus.structure',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/Structure.vue')
    },
    {
        path: '/section1',
        name: 'section1',
        meta: {
            display: 'menus.section1',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/1Section.vue')
    },
    {
        path: '/section2',
        name: 'section2',
        meta: {
            display: 'menus.section2',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/2Section.vue')
    },
    {
        path: '/section3',
        name: 'section3',
        meta: {
            display: 'menus.section3',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/3Section.vue')
    },
    {
        path: '/strategic_plan',
        name: 'strategic_plan',
        meta: {
            display: 'menus.strategic_plan',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/StrategicPlan.vue')
    },
    {
        path: '/contests',
        name: 'contests',
        meta: {
            display: 'menus.contests',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/Contests.vue')
    },
    {
        path: '/work_opportunity',
        name: 'work_opportunity',
        meta: {
            display: 'menus.work_opportunity',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/Opportunities.vue')
    },
    {
        path: '/international_cooperation',
        name: 'international_cooperation',
        meta: {
            display: 'menus.international_cooperation',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/InternationalCooperation.vue')
    },
    {
        path: '/legislation',
        name: 'legislation',
        meta: {
            display: 'menus.legislation'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/law',
        name: 'law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/Law.vue')
    },
    {
        path: '/diplom',
        name: 'diplom',
        meta: {
            display: 'menus.diplom',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/MinisterialDiploma.vue')
    },
    {
        path: '/decret_law',
        name: 'decret_law',
        meta: {
            display: 'menus.decret_law',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/LawDecret.vue')
    },
    {
        path: '/others',
        name: 'others',
        meta: {
            display: 'menus.all',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/Others.vue')
    },
    {
        path: '/decret',
        name: 'decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/Decret.vue')
    },
    {
        path: '/resolution',
        name: 'resolution',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/Resolution.vue')
    },
    {
        path: '/dispatchment',
        name: 'dispatchment',
        meta: {
            display: 'menus.dispatchment',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/Dispatchment.vue')
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/statistic',
        name: 'statistic',
        meta: {
            display: 'menus.statistic'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/jurispendency_all',
        name: 'jurispendency_all',
        meta: {
            display: 'menus.all'
        },
        component: () =>
            import ('@/views/JurisAll.vue')
    },
    {
        path: '/sub_section',
        name: 'sub_section',
        meta: {
            display: 'menus.sub_section'
        },
        component: () =>
            import ('@/views/SubSection.vue')
    },
    {
        path: '/mandatory_instructions',
        name: 'mandatory_instructions',
        meta: {
            display: 'menus.mandatory_instructions'
        },
        component: () =>
            import ('@/views/MandatoryInstructions.vue')
    },
    {
        path: '/instruction_recomendation',
        name: 'instruction_recomendation',
        meta: {
            display: 'menus.instruction_recomendation'
        },
        component: () =>
            import ('@/views/Instructions_Recommendations.vue')
    },
    {
        path: '/instruction_personal',
        name: 'instruction_personal',
        meta: {
            display: 'menus.instruction_personal'
        },
        component: () =>
            import ('@/views/PersonalProcess.vue')
    },
    {
        path: '/dispatchment_instructions',
        name: 'dispatchment_instructions',
        meta: {
            display: 'menus.dispatchment_instructions'
        },
        component: () =>
            import ('@/views/VisaIntructions.vue')
    },
    {
        path: '/obligations_calendar',
        name: 'obligations_calendar',
        meta: {
            display: 'menus.obligations_calendar'
        },
        component: () =>
            import ('@/views/ObligationsCalendar.vue')
    },
    {
        path: '/sanctions',
        name: 'sanctions',
        meta: {
            display: 'menus.sanctions'
        },
        component: () =>
            import ('@/views/Santions.vue')
    },
    {
        path: '/petitions',
        name: 'petitions',
        meta: {
            display: 'menus.petitions'
        },
        component: () =>
            import ('@/views/Petitions.vue')
    },
    {
        path: '/structure_functioning',
        name: 'structure_functioning',
        meta: {
            display: 'menus.structure_functioning'
        },
        component: () =>
            import ('@/views/structure_functioning.vue')
    },
    {
        path: '/reportAuditPerformance',
        name: 'reportAuditPerformance',
        meta: {
            display: 'menus.reportAuditPerformance'
        },
        component: () =>
            import ('@/views/ReportAuditPerformance.vue')
    },

    {
        path: '/fluxogram',
        name: 'fluxogram',
        meta: {
            display: 'menus.fluxogram'
        },
        component: () =>
            import ('@/views/Fluxogram.vue')
    },
    {
        path: '/report_submission',
        name: 'report_submission',
        meta: {
            display: 'menus.report_submission'
        },
        component: () =>
            import ('@/views/ReporCase.vue')
    },
    {
        path: '/jurispendency',
        name: 'jurispendency',
        meta: {
            display: 'menus.jurispendency'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/acordion',
        name: 'acordion',
        meta: {
            display: 'menus.acordion'
        },
        component: () =>
            import ('@/views/Acordion.vue')
    },
    {
        path: '/certification',
        name: 'certification',
        meta: {
            display: 'menus.certification'
        },
        component: () =>
            import ('@/views/Contas.vue')
    },
    {
        path: '/account',
        name: 'account',
        meta: {
            display: 'menus.account'
        },
        component: () =>
            import ('@/views/Contas.vue')
    },
    {
        path: '/rpcge',
        name: 'rpcge',
        meta: {
            display: 'menus.rpcge'
        },
        component: () =>
            import ('@/views/rpgce2.vue')
    },
    {
        path: '/managers',
        name: 'managers',
        meta: {
            display: 'menus.managers'
        },
        component: () =>
            import ('@/views/AboutUs.vue')
    },
    {
        path: '/galery',
        name: 'galery',
        meta: {
            display: 'menus.galery'
        },
        component: () =>
            import ('@/views/Images.vue')
    },
    {
        path: '/videos',
        name: 'videos',
        meta: {
            display: 'menus.videos'
        },
        component: () =>
            import ('@/views/Videos.vue')
    },
    {
        path: '/jurisdiction',
        name: 'jurisdiction',
        meta: {
            display: 'menus.jurisdiction_name',
            parent: ''
        },
        component: () =>
            import ('@/views/FolhetoDaJurisdicao.vue')
    },
    {
        path: '/activity_reports',
        name: 'activity_reports',
        meta: {
            display: 'menus.activity_reports'
        },
        component: () =>
            import ('@/views/ActivityReports.vue')
    },
    {
        path: '/faq',
        name: 'faq',
        meta: {
            display: 'menus.faq'
        },
        component: () =>
            import ('@/views/Faq.vue')
    },
    {
        path: '/publications',
        name: 'publications',
        meta: {
            display: 'menus.publications'
        },
        component: () =>
            import ('@/views/Publications.vue')
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            display: 'blog'
        },
        component: () =>
            import ('@/views/BlogList.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
            display: 'blog'
        },
        component: () =>
            import ('@/views/BlogList.vue')
    },
    {
        path: '/blog/:guid',
        name: 'blog-item',
        meta: {
            display: 'blog',
            parent: 'blog'
        },
        component: () =>
            import ('@/views/BlogItem.vue')
    },
    {
        path: '/csmja/csmja/support_services',
        name: 'csmja.support_services',
        meta: {
            display: 'menus.support_services',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/SupportService.vue')
    },
    {
        path: '/csmja/competencies',
        name: 'csmja.competencies',
        meta: {
            display: 'menus.competencies',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/Competencies.vue')
    },
    {
        path: '/csmja/csmja',
        name: 'csmja.history',
        meta: {
            display: 'menus.csmja_name',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/SinglePage.vue')
    },
    {
        path: '/csmja/structure',
        name: 'csmja.structure',
        meta: {
            display: 'menus.structure',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/Structure.vue')
    },
    {
        path: '/csmja/section1',
        name: 'csmja.section1',
        meta: {
            display: 'menus.section1',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/1Section.vue')
    },
    {
        path: '/csmja/section2',
        name: 'csmja.section2',
        meta: {
            display: 'menus.section2',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/2Section.vue')
    },
    {
        path: '/csmja/section3',
        name: 'csmja.section3',
        meta: {
            display: 'menus.section3',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/3Section.vue')
    },
    {
        path: '/csmja/strategic_plan',
        name: 'csmja.strategic_plan',
        meta: {
            display: 'menus.strategic_plan',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/StrategicPlan.vue')
    },
    {
        path: '/csmja/contests',
        name: 'csmja.contests',
        meta: {
            display: 'menus.contests',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/work_opportunity',
        name: 'csmja.work_opportunity',
        meta: {
            display: 'menus.work_opportunity',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/international_cooperation',
        name: 'csmja.international_cooperation',
        meta: {
            display: 'menus.international_cooperation',
            parent: 'menus.institution'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/legislation',
        name: 'csmja.legislation',
        meta: {
            display: 'menus.legislation'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/law',
        name: 'csmja.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/csmja/Law.vue')
    },
    {
        path: '/csmja/decret',
        name: 'csmja.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/csmja/Decret.vue')
    },
    {
        path: '/csmja/dispatchment',
        name: 'csmja.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation'
        },
        component: () =>
            import ('@/views/csmja/Dispatchment.vue')
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/statistic',
        name: 'csmja.statistic',
        meta: {
            display: 'menus.statistic'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/sub_section',
        name: 'csmja.sub_section',
        meta: {
            display: 'menus.sub_section'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/instruction_recomendation',
        name: 'csmja.instruction_recomendation',
        meta: {
            display: 'menus.instruction_recomendation'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/fluxogram',
        name: 'csmja.fluxogram',
        meta: {
            display: 'menus.fluxogram'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/jurispendency',
        name: 'csmja.jurispendency',
        meta: {
            display: 'menus.jurispendency'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/acordion',
        name: 'csmja.acordion',
        meta: {
            display: 'menus.acordion'
        },
        component: () =>
            import ('@/views/csmja/Acordion.vue')
    },
    {
        path: '/csmja/certification',
        name: 'csmja.certification',
        meta: {
            display: 'menus.certification'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/account',
        name: 'csmja.account',
        meta: {
            display: 'menus.account'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/rpcge',
        name: 'csmja.rpcge',
        meta: {
            display: 'menus.rpcge'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/managers',
        name: 'csmja.managers',
        meta: {
            display: 'menus.managers'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/galery',
        name: 'csmja.galery',
        meta: {
            display: 'menus.galery'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/videos',
        name: 'csmja.videos',
        meta: {
            display: 'menus.videos'
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue')
    },
    {
        path: '/csmja/faq',
        name: 'csmja.faq',
        meta: {
            display: 'menus.faq'
        },
        component: () =>
            import ('@/views/csmja/Faq.vue')
    },
    {
        path: '/csmja/news',
        name: 'csmja.publications',
        meta: {
            display: 'blog'
        },
        component: () =>
            import ('@/views/csmja/BlogList.vue')
    },
    {
        path: '/csmja/blog',
        name: 'csmja.blog',
        meta: {
            display: 'blog'
        },
        component: () =>
            import ('@/views/csmja/BlogList.vue')
    },
    {
        path: '/csmja/blog/:guid',
        name: 'csmja.blog-item',
        meta: {
            display: 'blog'
        },
        component: () =>
            import ('@/views/csmja/BlogItem.vue')
    },
    {
        path: '*',
        name: '404',
        meta: {
            display: 'not_found'
        },
        component: () =>
            import ('@/views/404.vue')
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