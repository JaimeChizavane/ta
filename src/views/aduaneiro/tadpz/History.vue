<template>
  <section
    class="about-layout2 pt-130 pb-90"
    v-if="filtered().OData__x0074_i27"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
          <div class="about__img mb-40">
            <img :src="bannerImage()" alt="about" />
            <blockquote class="blockquote mb-0">
              <h4 class="blockquote__title">
                Tribunal Aduaneiro da Provincia da Zambézia
              </h4>
            </blockquote>
          </div>
          <!-- /.about-img -->
        </div>
        <!-- /.col-xl-5 -->
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
          <div class="heading-layout2 mb-40">
            <h3 class="heading__title">{{ filtered().Title }}</h3>
          </div>
          <!-- /heading -->
          <div class="about-text-wrapper">
            <div class="about__Text">
              <p
                class="font-weight-bold mb-30"
                v-html="filtered().OData__x0074_i27"
              ></p>
            </div>
          </div>
        </div>
        <!-- /.col-xl-7 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.About Layout 2 -->
</template>

<script>
export default {
  name: 'QCSHistory',
  props: {
    results: Array,
  },
  methods: {
    bannerImage() {
      if (this.filtered().Attachments) {
        return (
          process.env.VUE_APP_ROOT_DOCS +
          this.filtered().AttachmentFiles.results[0].ServerRelativeUrl
        );
      }

      return 'assets/images/about/1.jpg';
    },
    filtered() {
      if (this.results.length) {
        return this.results.find((item) => item.Id === 4);
      }

      return {};
    },
  },
};
</script>

<style scoped></style>
