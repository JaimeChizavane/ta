<template>
  <section class="about-layout2 pt-130 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
          <div class="about__img mb-40">
            <img src="assets/images/about/1.jpg" alt="about">
            <blockquote class="blockquote mb-0">
              <h4 class="blockquote__title">Garantir a justiça administrativa, fiscal e aduaneira ao cidadão, bem como o
                controlo da boa gestão e da utilização dos dinheiros públicos.
              </h4>
              <!--<span class="blockquote__author">Missao</span>-->
            </blockquote>
          </div><!-- /.about-img -->
        </div><!-- /.col-xl-5 -->
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
          <div class="heading-layout2 mb-40">
            <h3 class="heading__title">Fundamentos Estratégicos.</h3>
          </div><!-- /heading -->
          <div class="about-text-wrapper">
            <div class="about__Text">
              <p class="font-weight-bold mb-30" v-html="history.Content"></p>
            </div>
            <router-link :to="{name: 'strategic_plan'}" class="btn btn__primary btn__icon mt-30">
              <span>Saber mais</span><i class="icon-arrow-right"></i>
            </router-link>
            <!--<ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
              <li>Delivered in more than 450,000 client’s interactions </li>
              <li>Provided by experts to help challenge critical activities</li>
              <li>Complemented with peer perspectives and advice</li>
            </ul>-->
          </div>
        </div><!-- /.col-xl-7 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.About Layout 2 -->
</template>

<script>
export default {
  name: "QAboutUsSection",
  data() {
    return {
      history: {
        Content: null
      }
    }
  },
  mounted() {
    this.$http.get("instituicao.json").then((data) => {
      this.history = data.data.d.results.find(item => item.Id === 7)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
