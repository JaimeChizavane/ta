<template>
  <section id="overview" class="features-layout3 pt-130 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
          <div class="heading heading-layout2 mb-50">
            <h3 class="heading__title">Conselho Superior da Magistratura Judicial Administrativa</h3>
            <div class="about-text-wrapper">
              <div class="about__Text" v-for="item in filtered()" :key="item.Id">
                <h5>{{ item.Title }}</h5>
                <p class="heading__desc mb-30" v-html="item.OData__x0074_i27"></p>
              </div>

            </div>
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
  name: "QCSStrategicPlan",
  props: {
    results: Array
  },
  methods: {
    bannerImage() {
      if (this.filtered().find(item => item.Attachments)) {
        return process.env.VUE_APP_ROOT_DOCS + this.filtered().find(item => item.Attachments).AttachmentFiles.results[0].ServerRelativeUrl
      }

      return 'assets/images/about/1.jpg'
    },
    filtered() {
      if (this.results.length) {

        return this.results.filter(item => item.Id === 1 || item.Id === 2 || item.Id === 3 || item.Id === 5 || item.Id === 6)
      }

      return []
    }
  }
}
</script>

<style scoped>

</style>
