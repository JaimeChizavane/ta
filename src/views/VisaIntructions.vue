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
                <h4 class="blockquote__title">O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais
                  administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.
                </h4>
              </blockquote>
            </div><!-- /.about-img -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1" v-if="history.Content">
            <div class="heading-layout2 mb-40">
              <h3 class="heading__title">{{ history.Title }}</h3>
            </div><!-- /heading -->
            <div class="about-text-wrapper">
              <div class="about__Text">
                <p class="font-weight-bold mb-30" v-html="history.Content"></p>
              </div>

            </div>
          </div><!-- /.col-xl-7 -->

          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1" v-else>
            <div class="text-center">
              <h2 class="error-title">Lamentamos.</h2>
              <p class="error-desc"> A página solicitada ainda não possui informações. Volte a tentar em uma outra
                altura por favor.
              </p>
              <router-link :to="{name: 'home'}" class="btn btn__primary btn__icon">
                <span>Ir para o Início</span> <i class="icon-arrow-right"></i>
              </router-link>
            </div>
          </div>
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
  name: "QPersonalProcess",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      history: {
        Content: null
      }
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("instituicao.json").then((data) => {
      this.history = data.data.d.results.find(item => item.Id === 13)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
