<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <sub-menu />
    <q-c-s-j-a-blog/>

    <q-c-s-strategic-plan :results="services" />
    <hr />
    <q-c-s-support-services :results="services" />
    <hr />
    <q-c-s-history :results="services" />
    <hr />
    <q-c-s-competencies :results="services" />
    <q-footer />
  </div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';
import SubMenu from '@/views/aduaneiro/tadps/components/SubMenu';
import QCSSupportServices from '@/views/aduaneiro/tadps/SupportService';
import QCSStrategicPlan from '@/views/aduaneiro/tadps/StrategicPlan';
import QCSHistory from '@/views/aduaneiro/tadps/History';
import QCSCompetencies from '@/views/aduaneiro/tadps/Competencies';
import QCSJABlog from '@/components/TADPSBlog';

export default {
  name: 'QSectionOne',
  components: {
    QCSJABlog,
    QCSCompetencies,
    QCSHistory,
    QCSStrategicPlan,
    QCSSupportServices,
    SubMenu,
    QBreadCrumb,
    QHeader,
    QFooter,
  },
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    window.mainExecution();

    this.$http
      .get('tadpsinstituicao.json')
      .then((data) => {
        this.services = data.data.d.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
