<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <sub-menu />
    <q-c-s-j-a-blog />
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
import SubMenu from '@/views/aduaneiro/tadpn/components/SubMenu';
import QCSSupportServices from '@/views/aduaneiro/tadpn/SupportService';
import QCSStrategicPlan from '@/views/aduaneiro/tadpn/StrategicPlan';
import QCSHistory from '@/views/aduaneiro/tadpn/History';
import QCSCompetencies from '@/views/aduaneiro/tadpn/Competencies';
import QCSJABlog from '@/components/TADPNBlog';

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
      .get('tadpninstituicao.json')
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
