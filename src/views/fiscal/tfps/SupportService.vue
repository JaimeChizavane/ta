<template>
  <section id="overview" class="features-layout3 pt-130 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div class="heading text-center mb-40">
            <h3 class="heading__title">Serviços de Apoio</h3>
          </div><!-- /.heading -->
        </div><!-- /.col-lg-6 -->
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
          <div class="heading heading-layout2 mb-50" v-for="item in filtered()" :key="item.Id">
            <h5>{{ item.Title }}</h5>
            <ul class="list-items list-items-layout2 list-unstyled"
                v-html="item.OData__x0074_i27">
            </ul>
          </div>
        </div><!-- /.col-xl-5 -->
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
          <div class="sticky-top">
            <img :src="bannerImage()" alt="banner">
          </div>
        </div><!-- /col-lg-5 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.Features Layout 3 -->
</template>

<script>

export default {
  name: "QCSSupportServices",
  props: {
    results: Array
  },
  methods: {
    bannerImage() {
      if (this.filtered().find(item => item.Attachments)) {
        return process.env.VUE_APP_ROOT_DOCS + this.filtered().find(item => item.Attachments).AttachmentFiles.results[0].ServerRelativeUrl
      }

      return 'assets/images/sliders/8.png'
    },
    filtered() {
      if (this.results.length) {

        return this.results.filter(item => item.Id === 8 || item.Id === 9 || item.Id === 10)
      }

      return []
    }
  },
  mounted() {
    // window.mainExecution()

    // this.$http.get("csmjainstituicao.json").then((data) => {
    //   this.services = data.data.d.results.filter(item => item.Id === 8 || item.Id === 9 || item.Id === 10)
    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}
</script>

<style scoped>

</style>
