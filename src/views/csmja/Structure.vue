<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="about-layout1 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <div class="about__img">
              <img src="assets/images/sliders/7.jpg" alt="about">
            </div><!-- /.about-img -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
            <div class="heading-layout2">
            </div><!-- /heading -->
            <div class="about__Text">
              <ul class="list-items list-items-layout2 list-unstyled" v-html="services.Content">
              </ul>
            </div>
          </div><!-- /.col-xl-7 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QCompetencies",
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

    this.$http.get("csmjainstituicao.json").then((data) => {
      this.services = data.data.d.results.find(item => item.Id === 9)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
