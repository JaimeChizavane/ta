<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <sub-menu/>
    <q-c-s-strategic-plan :results="services"/>
    <hr>
    <q-c-s-support-services :results="services"/>
    <hr>
    <q-c-s-history :results="services"/>
    <hr>
    <q-c-s-competencies :results="services"/>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import SubMenu from "@/views/csmja/components/SubMenu";
import QCSSupportServices from "@/views/csmja/SupportService";
import QCSStrategicPlan from "@/views/csmja/StrategicPlan";
import QCSHistory from "@/views/csmja/History";
import QCSCompetencies from "@/views/csmja/Competencies";


export default {
  name: "QSectionOne",
  components: {
    QCSCompetencies,
    QCSHistory,
    QCSStrategicPlan,
    QCSSupportServices,
    SubMenu,
    QBreadCrumb,
    QHeader,
    QFooter
  },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    window.mainExecution()


    this.$http.get("csmjainstituicao.json").then((data) => {
      this.services = data.data.d.results
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
