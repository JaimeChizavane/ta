<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div class="heading heading-layout2 mb-50" v-for="item in services" :key="item.Id">
              <h5>{{ item.Title }}</h5>
              <ul class="list-items list-items-layout2 list-unstyled"
                  v-html="item.OData__x0074_i27">
              </ul>
            </div>
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
  name: "QSupportServices",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("csmjainstituicao.json").then((data) => {
      this.services = data.data.d.results.filter(item => item.Id === 8 || item.Id === 9 || item.Id === 10)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
