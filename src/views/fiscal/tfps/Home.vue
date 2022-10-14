<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <sub-menu />
    <q-t-f-p-s-blog />
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
import SubMenu from '@/views/fiscal/tfps/components/SubMenu';
import QCSSupportServices from '@/views/fiscal/tfps/SupportService';
import QCSStrategicPlan from '@/views/fiscal/tfps/StrategicPlan';
import QCSHistory from '@/views/fiscal/tfps/History';
import QCSCompetencies from '@/views/fiscal/tfps/Competencies';
import QTFPSBlog from '@/components/TFPSBlog';

export default {
  name: 'QSectionOne',
  components: {
    QTFPSBlog,
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
      .get('tfpsinstituicao.json')
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
