<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div class="heading heading-layout2 mb-50" v-html="services.Content"></div>
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
            <div class="sticky-top">
              <img src="assets/images/sliders/8.png" alt="banner">
            </div>
          </div><!-- /col-lg-5 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.Features Layout 3 -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QSectionThree",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      services: {
        Content: null
      }
    }
  },
  mounted() {
    window.mainExecution()
    this.$http.get("instituicao.json").then((data) => {
      this.services = data.data.d.results.find(item => item.Id === 8)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
