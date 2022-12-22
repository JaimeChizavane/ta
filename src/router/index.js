import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        meta: {
            display: 'menus.home',
            display_title: 'Tribunal Administrativo de Moçambique',
        },
        component: () =>
            import ('@/views/Home.vue'),
    },
    {
        path: '/support_services',
        name: 'support_services',
        meta: {
            display: 'menus.support_services',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/SupportService.vue'),
    },
    {
        path: '/folhetoCSMJA',
        name: 'folhetoCSMJA',
        meta: {
            display: 'Conheça o CSMJA',
            //parent: 'menus.folhetoCSMJA'
        },
        component: () =>
            import ('@/views/csmja/FolhetoDaCSMJA.vue'),
    },
    {
        path: '/competencies',
        name: 'competencies',
        meta: {
            display: 'menus.competencies',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/Competencies.vue'),
    },
    {
        path: '/history',
        name: 'history',
        meta: {
            display: 'menus.history',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/History.vue'),
    },
    {
        path: '/structure',
        name: 'structure',
        meta: {
            display: 'menus.structure',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/Structure.vue'),
    },
    {
        path: '/section1',
        name: 'section1',
        meta: {
            display: 'menus.section1',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/1Section.vue'),
    },
    {
        path: '/section2',
        name: 'section2',
        meta: {
            display: 'menus.section2',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/2Section.vue'),
    },
    {
        path: '/section3',
        name: 'section3',
        meta: {
            display: 'menus.section3',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/3Section.vue'),
    },
    {
        path: '/strategic_plan',
        name: 'strategic_plan',
        meta: {
            display: 'menus.strategic_plan',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/StrategicPlan.vue'),
    },
    {
        path: '/contests',
        name: 'contests',
        meta: {
            display: 'menus.contests',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/Contests.vue'),
    },
    {
        path: '/work_opportunity',
        name: 'work_opportunity',
        meta: {
            display: 'menus.work_opportunity',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/Opportunities.vue'),
    },
    {
        path: '/international_cooperation',
        name: 'international_cooperation',
        meta: {
            display: 'menus.international_cooperation',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/InternationalCooperation.vue'),
    },
    {
        path: '/legislation',
        name: 'legislation',
        meta: {
            display: 'menus.legislation',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/law',
        name: 'law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/Law.vue'),
    },
    {
        path: '/diplom',
        name: 'diplom',
        meta: {
            display: 'menus.diplom',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/MinisterialDiploma.vue'),
    },
    {
        path: '/decret_law',
        name: 'decret_law',
        meta: {
            display: 'menus.decret_law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/LawDecret.vue'),
    },
    {
        path: '/others',
        name: 'others',
        meta: {
            display: 'menus.all',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/Others.vue'),
    },
    {
        path: '/decret',
        name: 'decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/Decret.vue'),
    },
    {
        path: '/resolution',
        name: 'resolution',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/Resolution.vue'),
    },
    {
        path: '/dispatchment',
        name: 'dispatchment',
        meta: {
            display: 'menus.dispatchment',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/Dispatchment.vue'),
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },

    {
        path: '/visa_consultation',
        name: 'visa_consultation',
        beforeEnter() {
            window.open(
                'http://consultavisto.ta.gov.mz:8080/vistoPublic/login/auth',
                '_blank'
            );
        }, // location.href = 'http://consultavisto.ta.gov.mz:8080/vistoPublic/login/auth' },
        meta: {
            display: 'menus.visa_consultation',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/statistic',
        name: 'statistic',
        beforeEnter() {
            window.open(
                'http://consultavisto.ta.gov.mz:8080/dashboard/public/reportViewer?code=ESTATISTICAS+DO+VISTO',
                '_blank'
            );
        }, // location.href = 'http://consultavisto.ta.gov.mz:8080/vistoPublic/login/auth' },
        meta: {
            display: 'menus.statistic',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/dispatch',
        name: 'dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/jurispendency_all',
        name: 'jurispendency_all',
        meta: {
            display: 'menus.all',
        },
        component: () =>
            import ('@/views/JurisAll.vue'),
    },
    {
        path: '/jurispendency_plenario',
        name: 'jurispendency_plenario',
        meta: {
            display: 'menus.jurispendency_plenario',
        },
        component: () =>
            import ('@/views/JurisPlenario.vue'),
    },
    {
        path: '/jurispendency_1secao',
        name: 'jurispendency_1secao',
        meta: {
            display: 'menus.jurispendency_1secao',
        },
        component: () =>
            import ('@/views/Juris1Secao.vue'),
    },
    {
        path: '/sub_section',
        name: 'sub_section',
        meta: {
            display: 'menus.sub_section',
        },
        component: () =>
            import ('@/views/SubSection.vue'),
    },
    {
        path: '/mandatory_instructions',
        name: 'mandatory_instructions',
        meta: {
            display: 'menus.mandatory_instructions',
        },
        component: () =>
            import ('@/views/MandatoryInstructions.vue'),
    },
    {
        path: '/instruction_recomendation',
        name: 'instruction_recomendation',
        meta: {
            display: 'menus.instruction_recomendation',
        },
        component: () =>
            import ('@/views/Instructions_Recommendations.vue'),
    },
    {
        path: '/instruction_personal',
        name: 'instruction_personal',
        meta: {
            display: 'menus.instruction_personal',
        },
        component: () =>
            import ('@/views/PersonalProcess.vue'),
    },
    {
        path: '/dispatchment_instructions',
        name: 'dispatchment_instructions',
        meta: {
            display: 'menus.dispatchment_instructions',
        },
        component: () =>
            import ('@/views/VisaIntructions.vue'),
    },
    {
        path: '/obligations_calendar',
        name: 'obligations_calendar',
        meta: {
            display: 'menus.obligations_calendar',
        },
        component: () =>
            import ('@/views/ObligationsCalendar.vue'),
    },
    {
        path: '/sanctions',
        name: 'sanctions',
        meta: {
            display: 'menus.sanctions',
        },
        component: () =>
            import ('@/views/Santions.vue'),
    },
    {
        path: '/petitions',
        name: 'petitions',
        meta: {
            display: 'menus.petitions',
        },
        component: () =>
            import ('@/views/Petitions.vue'),
    },
    {
        path: '/structure_functioning',
        name: 'structure_functioning',
        meta: {
            display: 'menus.structure_functioning',
        },
        component: () =>
            import ('@/views/structure_functioning.vue'),
    },
    {
        path: '/reportAuditPerformance',
        name: 'reportAuditPerformance',
        meta: {
            display: 'menus.reportAuditPerformance',
        },
        component: () =>
            import ('@/views/ReportAuditPerformance.vue'),
    },

    {
        path: '/fluxogram',
        name: 'fluxogram',
        meta: {
            display: 'menus.fluxogram',
        },
        component: () =>
            import ('@/views/Fluxogram.vue'),
    },
    {
        path: '/report_submission',
        name: 'report_submission',
        meta: {
            display: 'menus.report_submission',
        },
        component: () =>
            import ('@/views/ReporCase.vue'),
    },
    {
        path: '/jurispendency',
        name: 'jurispendency',
        meta: {
            display: 'menus.jurispendency',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/acordion',
        name: 'acordion',
        meta: {
            display: 'menus.acordion',
        },
        component: () =>
            import ('@/views/Acordion.vue'),
    },
    {
        path: '/certification',
        name: 'certification',
        meta: {
            display: 'menus.certification',
        },
        component: () =>
            import ('@/views/Contas.vue'),
    },
    {
        path: '/account',
        name: 'account',
        meta: {
            display: 'menus.account',
        },
        component: () =>
            import ('@/views/Contas.vue'),
    },
    {
        path: '/rpcge',
        name: 'rpcge',
        meta: {
            display: 'menus.rpcge',
        },
        component: () =>
            import ('@/views/rpgce2.vue'),
    },
    {
        path: '/managers',
        name: 'managers',
        meta: {
            display: 'menus.managers',
        },
        component: () =>
            import ('@/views/AboutUs.vue'),
    },
    {
        path: '/galery',
        name: 'galery',
        meta: {
            display: 'menus.galery',
        },
        component: () =>
            import ('@/views/Images.vue'),
    },
    {
        path: '/videos',
        name: 'videos',
        meta: {
            display: 'menus.videos',
        },
        component: () =>
            import ('@/views/Videos.vue'),
    },
    {
        path: '/jurisdiction',
        name: 'jurisdiction',
        meta: {
            display: 'menus.jurisdiction_name',
            parent: '',
        },
        component: () =>
            import ('@/views/FolhetoDaJurisdicao.vue'),
    },
    {
        path: '/activity_reports',
        name: 'activity_reports',
        meta: {
            display: 'menus.activity_reports',
        },
        component: () =>
            import ('@/views/ActivityReports.vue'),
    },
    {
        path: '/faq',
        name: 'faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/Faq.vue'),
    },
    {
        path: '/publications',
        name: 'publications',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/Publications.vue'),
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/BlogList.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/BlogList.vue'),
    },
    {
        path: '/blog/:guid',
        name: 'blog-item',
        meta: {
            display: 'blog',
            parent: 'blog',
        },
        component: () =>
            import ('@/views/BlogItem.vue'),
    },
    {
        path: '/csmja/csmja/support_services',
        name: 'csmja.support_services',
        meta: {
            display: 'menus.support_services',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/SupportService.vue'),
    },
    {
        path: '/csmja/competencies',
        name: 'csmja.competencies',
        meta: {
            display: 'menus.competencies',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/Competencies.vue'),
    },
    {
        path: '/csmja/csmja',
        name: 'csmja.history',
        meta: {
            display: 'menus.csmja_name',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/SinglePage.vue'),
    },
    {
        path: '/csmja/structure',
        name: 'csmja.structure',
        meta: {
            display: 'menus.structure',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/Structure.vue'),
    },
    {
        path: '/csmja/section1',
        name: 'csmja.section1',
        meta: {
            display: 'menus.section1',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/1Section.vue'),
    },
    {
        path: '/csmja/section2',
        name: 'csmja.section2',
        meta: {
            display: 'menus.section2',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/2Section.vue'),
    },
    {
        path: '/csmja/section3',
        name: 'csmja.section3',
        meta: {
            display: 'menus.section3',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/3Section.vue'),
    },
    {
        path: '/csmja/strategic_plan',
        name: 'csmja.strategic_plan',
        meta: {
            display: 'menus.strategic_plan',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/StrategicPlan.vue'),
    },
    {
        path: '/csmja/contests',
        name: 'csmja.contests',
        meta: {
            display: 'menus.contests',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/work_opportunity',
        name: 'csmja.work_opportunity',
        meta: {
            display: 'menus.work_opportunity',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/international_cooperation',
        name: 'csmja.international_cooperation',
        meta: {
            display: 'menus.international_cooperation',
            parent: 'menus.institution',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/legislation',
        name: 'csmja.legislation',
        meta: {
            display: 'menus.legislation',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/law',
        name: 'csmja.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/csmja/Law.vue'),
    },
    {
        path: '/csmja/publications',
        name: 'csmja.publications01',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/csmja/Publications.vue'),
    },
    {
        path: '/csmja/decret',
        name: 'csmja.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/csmja/Decret.vue'),
    },
    {
        path: '/csmja/dispatchment',
        name: 'csmja.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/csmja/Dispatchment.vue'),
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/statistic',
        name: 'csmja.statistic',
        meta: {
            display: 'menus.statistic',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/dispatch',
        name: 'csmja.dispatch',
        meta: {
            display: 'menus.dispatch',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/sub_section',
        name: 'csmja.sub_section',
        meta: {
            display: 'menus.sub_section',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/instruction_recomendation',
        name: 'csmja.instruction_recomendation',
        meta: {
            display: 'menus.instruction_recomendation',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/fluxogram',
        name: 'csmja.fluxogram',
        meta: {
            display: 'menus.fluxogram',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/jurispendency',
        name: 'csmja.jurispendency',
        meta: {
            display: 'menus.jurispendency',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/acordion',
        name: 'csmja.acordion',
        meta: {
            display: 'menus.acordion',
        },
        component: () =>
            import ('@/views/csmja/Acordion.vue'),
    },
    {
        path: '/csmja/certification',
        name: 'csmja.certification',
        meta: {
            display: 'menus.certification',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/account',
        name: 'csmja.account',
        meta: {
            display: 'menus.account',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/rpcge',
        name: 'csmja.rpcge',
        meta: {
            display: 'menus.rpcge',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/managers',
        name: 'csmja.managers',
        meta: {
            display: 'menus.managers',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/galery',
        name: 'csmja.galery',
        meta: {
            display: 'menus.galery',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/videos',
        name: 'csmja.videos',
        meta: {
            display: 'menus.videos',
        },
        component: () =>
            import ('@/views/csmja/AboutUs.vue'),
    },
    {
        path: '/csmja/faq',
        name: 'csmja.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/csmja/Faq.vue'),
    },
    {
        path: '/csmja/news',
        name: 'csmja.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/csmja/BlogList.vue'),
    },
    {
        path: '/csmja/blog',
        name: 'csmja.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/csmja/BlogList.vue'),
    },
    {
        path: '/csmja/blog/:guid',
        name: 'csmja.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/csmja/BlogItem.vue'),
    },
    {
        path: '/tfcm/home',
        name: 'tfcm.home',
        meta: {
            display: 'menus.tfcm',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Home.vue'),
    },
    {
        path: '/tfpm/home',
        name: 'tfpm.home',
        meta: {
            display: 'menus.tfpm',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Home.vue'),
    },
    {
        path: '/tfps/home',
        name: 'tfps.home',
        meta: {
            display: 'menus.tfps',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Home.vue'),
    },
    {
        path: '/tfps/news',
        name: 'tfps.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfps/BlogList.vue'),
    },
    {
        path: '/tfps/blog',
        name: 'tfps.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfps//BlogList.vue'),
    },
    {
        path: '/tfps/blog/:guid',
        name: 'tfps.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfps/BlogItem.vue'),
    },
    {
        path: '/tfps/faq',
        name: 'tfps.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Faq.vue'),
    },
    {
        path: '/tfps/law',
        name: 'tfps.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Law.vue'),
    },
    {
        path: '/tfps/decret',
        name: 'tfps.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Decret.vue'),
    },
    {
        path: '/tfps/dispatchment',
        name: 'tfps.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Dispatchment.vue'),
    },

    {
        path: '/tfpm/news',
        name: 'tfpm.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/BlogList.vue'),
    },
    {
        path: '/tfpm/blog',
        name: 'tfpm.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfpm//BlogList.vue'),
    },
    {
        path: '/tfpm/blog/:guid',
        name: 'tfpm.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/BlogItem.vue'),
    },
    {
        path: '/tfpm/faq',
        name: 'tfpm.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Faq.vue'),
    },
    {
        path: '/tfpm/law',
        name: 'tfpm.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Law.vue'),
    },
    {
        path: '/tfpm/decret',
        name: 'tfpm.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Decret.vue'),
    },
    {
        path: '/tfpm/dispatchment',
        name: 'tfpm.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Dispatchment.vue'),
    },

    {
        path: '/tfcm/news',
        name: 'tfcm.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/BlogList.vue'),
    },
    {
        path: '/tfcm/blog',
        name: 'tfcm.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfcm//BlogList.vue'),
    },
    {
        path: '/tfcm/blog/:guid',
        name: 'tfcm.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/BlogItem.vue'),
    },
    {
        path: '/tfcm/faq',
        name: 'tfcm.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Faq.vue'),
    },
    {
        path: '/tfcm/law',
        name: 'tfcm.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Law.vue'),
    },
    {
        path: '/tfcm/decret',
        name: 'tfcm.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Decret.vue'),
    },
    {
        path: '/tfcm/dispatchment',
        name: 'tfcm.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Dispatchment.vue'),
    },

    {
        path: '/csmja/publications',
        name: 'csmja.publication',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/csmja/Publications.vue'),
    },
    {
        path: '/tfps/publications',
        name: 'tfps.publication',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/fiscal/tfps/Publications.vue'),
    },
    {
        path: '/tfpm/publications',
        name: 'tfpm.publication',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/fiscal/tfpm/Publications.vue'),
    },
    {
        path: '/tfcm/publications',
        name: 'tfcm.publication',
        meta: {
            display: 'menus.publications',
        },
        component: () =>
            import ('@/views/fiscal/tfcm/Publications.vue'),
    },

    {
        path: '*',
        name: '404',
        meta: {
            display: 'not_found',
        },
        component: () =>
            import ('@/views/404.vue'),
    },

    {
        path: '/tadcm/news',
        name: 'tadcm.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/BlogList.vue'),
    },
    {
        path: '/tadcm/blog',
        name: 'tadcm.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm//BlogList.vue'),
    },
    {
        path: '/tadcm/blog/:guid',
        name: 'tadcm.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/BlogItem.vue'),
    },
    {
        path: '/tadcm/faq',
        name: 'tadcm.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/Faq.vue'),
    },
    {
        path: '/tadcm/law',
        name: 'tadcm.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/Law.vue'),
    },
    {
        path: '/tadcm/decret',
        name: 'tadcm.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/Decret.vue'),
    },
    {
        path: '/tadcm/dispatchment',
        name: 'tadcm.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/Dispatchment.vue'),
    },
    {
        path: '/tadcm/home',
        name: 'tadcm.home',
        meta: {
            display: 'menus.tadcm',
        },
        component: () =>
            import ('@/views/aduaneiro/tadcm/Home.vue'),
    },

    {
        path: '/tadpn/news',
        name: 'tadpn.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/BlogList.vue'),
    },
    {
        path: '/tadpn/blog',
        name: 'tadpn.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn//BlogList.vue'),
    },
    {
        path: '/tadpn/blog/:guid',
        name: 'tadpn.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/BlogItem.vue'),
    },
    {
        path: '/tadpn/faq',
        name: 'tadpn.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/Faq.vue'),
    },
    {
        path: '/tadpn/law',
        name: 'tadpn.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/Law.vue'),
    },
    {
        path: '/tadpn/decret',
        name: 'tadpn.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/Decret.vue'),
    },
    {
        path: '/tadpn/dispatchment',
        name: 'tadpn.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/Dispatchment.vue'),
    },
    {
        path: '/tadpn/home',
        name: 'tadpn.home',
        meta: {
            display: 'menus.tadpn',
        },
        component: () =>
            import ('@/views/aduaneiro/tadpn/Home.vue'),
    },

    {
        path: '/tadps/news',
        name: 'tadps.publications',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/BlogList.vue'),
    },
    {
        path: '/tadps/blog',
        name: 'tadps.blog',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps//BlogList.vue'),
    },
    {
        path: '/tadps/blog/:guid',
        name: 'tadps.blog-item',
        meta: {
            display: 'blog',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/BlogItem.vue'),
    },
    {
        path: '/tadps/faq',
        name: 'tadps.faq',
        meta: {
            display: 'menus.faq',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/Faq.vue'),
    },
    {
        path: '/tadps/law',
        name: 'tadps.law',
        meta: {
            display: 'menus.law',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/Law.vue'),
    },
    {
        path: '/tadps/decret',
        name: 'tadps.decret',
        meta: {
            display: 'menus.decret',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/Decret.vue'),
    },
    {
        path: '/tadps/dispatchment',
        name: 'tadps.dispatchment',
        meta: {
            display: 'menus.resolution',
            parent: 'menus.legislation',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/Dispatchment.vue'),
    },
    {
        path: '/tadps/home',
        name: 'tadps.home',
        meta: {
            display: 'menus.tadps',
        },
        component: () =>
            import ('@/views/aduaneiro/tadps/Home.vue'),
    },
];

const router = new VueRouter({
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            };
        }
        return { x: 0, y: 0, behavior: 'smooth' };
    },
    routes,
});

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
        document.title = to.meta.display_title ?
            to.meta.display_title :
            window.vm
            .$tc(to.meta.display, 2)
            .replace(/(^|\s)\S/g, (l) => l.toUpperCase());
    }
});

export default router;