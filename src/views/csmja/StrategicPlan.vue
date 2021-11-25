<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="about-layout2 pt-130 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="about__img mb-40">
              <img src="assets/images/about/1.jpg" alt="about">
              <blockquote class="blockquote mb-0">
                <h4 class="blockquote__title">Conselho Superior da Magistratura Judicial Administrativa </h4>
              </blockquote>
            </div><!-- /.about-img -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div class="heading-layout2 mb-40">
              <h3 class="heading__title">Conselho Superior da Magistratura Judicial Administrativa.</h3>
            </div><!-- /heading -->
            <div class="about-text-wrapper">
              <div class="about__Text" v-for="item in history" :key="item.Id">
                <h5>{{ item.Title }}</h5>
                <p class="font-weight-bold mb-30" v-html="item.OData__x0074_i27"></p>
              </div>

            </div>
          </div><!-- /.col-xl-7 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.About Layout 2 -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QStrategicPlan",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      history: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("csmjainstituicao.json").then((data) => {
      this.history = data.data.d.results.filter(item => item.Id === 1 || item.Id === 2 || item.Id === 3 || item.Id === 5 || item.Id === 6)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
