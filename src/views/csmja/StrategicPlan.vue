<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <!--    <section class="about-layout2 pt-130 pb-90">-->
    <!--      <div class="container">-->
    <!--        <div class="row">-->
    <!--          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">-->
    <!--            <div class="about__img mb-40">-->
    <!--              <img src="assets/images/about/1.jpg" alt="about">-->
    <!--              <blockquote class="blockquote mb-0">-->
    <!--                <h4 class="blockquote__title">Conselho Superior da Magistratura Judicial Administrativa </h4>-->
    <!--              </blockquote>-->
    <!--            </div>&lt;!&ndash; /.about-img &ndash;&gt;-->
    <!--          </div>&lt;!&ndash; /.col-xl-5 &ndash;&gt;-->
    <!--          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">-->
    <!--            <div class="heading-layout2 mb-40">-->
    <!--              <h3 class="heading__title">Conselho Superior da Magistratura Judicial Administrativa.</h3>-->
    <!--            </div>&lt;!&ndash; /heading &ndash;&gt;-->
    <!--            <div class="about-text-wrapper">-->
    <!--              <div class="about__Text" v-for="item in history" :key="item.Id">-->
    <!--                <h5>{{ item.Title }}</h5>-->
    <!--                <p class="font-weight-bold mb-30" v-html="item.OData__x0074_i27"></p>-->
    <!--              </div>-->

    <!--            </div>-->
    <!--          </div>&lt;!&ndash; /.col-xl-7 &ndash;&gt;-->
    <!--        </div>&lt;!&ndash; /.row &ndash;&gt;-->
    <!--        <div class="row">-->
    <!--          <div class="col-12">-->
    <!--            <div class="cta-banner mt-50 mb-30 d-flex flex-wrap align-items-center">-->
    <!--              <router-link :to="{name: 'csmja.history'}" class="btn btn__primary">-->
    <!--                <i class="icon-arrow-left icon-outlined"></i> Historial-->
    <!--              </router-link>-->
    <!--            </div>&lt;!&ndash; /.cta-banner &ndash;&gt;-->
    <!--          </div>&lt;!&ndash; /.col-12 &ndash;&gt;-->
    <!--        </div>&lt;!&ndash; /.row &ndash;&gt;-->
    <!--      </div>&lt;!&ndash; /.container &ndash;&gt;-->
    <!--    </section>&lt;!&ndash; /.About Layout 2 &ndash;&gt;-->
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div class="heading heading-layout2 mb-50">
              <h3 class="heading__title">Conselho Superior da Magistratura Judicial Administrativa</h3>
              <div class="about-text-wrapper">
                <div class="about__Text" v-for="item in history" :key="item.Id">
                  <h5>{{ item.Title }}</h5>
                  <p class="heading__desc mb-30" v-html="item.OData__x0074_i27"></p>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="feature-item">
                  <div class="feature__icon">
                    <i class="icon-statistic"></i>
                  </div>
                  <h4 class="feature__title">
                    <router-link :to="{name: 'csmja.support_services'}">
                      {{ $tc('menus.support_services') }}
                    </router-link>
                  </h4>
                  <router-link :to="{name: 'csmja.support_services'}" class="btn__link">
                    <i class="icon-arrow-right icon-outlined"></i>
                    <span>Ler mais</span>
                  </router-link>
                </div><!-- /.feature-item -->
                <div class="feature-item">
                  <div class="feature__icon">
                    <i class="icon-presentation"></i>
                  </div>
                  <h4 class="feature__title">
                    <router-link :to="{name: 'csmja.competencies'}">
                      {{ $tc('menus.competencies') }}
                    </router-link>
                  </h4>
                  <router-link :to="{name: 'csmja.competencies'}" class="btn__link">
                    <i class="icon-arrow-right icon-outlined"></i>
                    <span>Ler mais</span>
                  </router-link>
                </div><!-- /.feature-item -->
                <div class="feature-item">
                  <div class="feature__icon">
                    <i class="icon-clock"></i>
                  </div>
                  <h4 class="feature__title">
                    <router-link :to="{name: 'csmja.history'}">
                      {{ $tc('menus.history') }}
                    </router-link>
                  </h4>
                  <router-link :to="{name: 'csmja.history'}" class="btn__link">
                    <i class="icon-arrow-right icon-outlined"></i>
                    <span>Ler mais</span>
                  </router-link>
                </div><!-- /.feature-item -->
              </div><!-- /.col-lg-12 -->
            </div><!-- /.row -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
            <div class="sticky-top">
              <img src="assets/images/about/1.jpg" alt="banner">
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
