<template>
  <section class="about-layout1 pb-130">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <div class="about__img">
            <img :src="bannerImage()" alt="about" />
          </div>
          <!-- /.about-img -->
        </div>
        <!-- /.col-xl-5 -->
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
          <div class="heading-layout2"></div>
          <!-- /heading -->
          <div class="about__Text" v-for="item in filtered()" :key="item.Id">
            <h5>{{ item.Title }}</h5>
            <ul
              class="list-items list-items-layout2 list-unstyled"
              v-html="item.OData__x0074_i27"
            ></ul>
          </div>
        </div>
        <!-- /.col-xl-7 -->
        <div class="col-sm-12">
          <router-link
            class="navbar-brand btn btn__primary btn__primary-style2"
            :to="{ name: 'folhetoCSMJA' }"
          >
            <span>Saiba mais sobre o tfpm</span>
            <i class="icon-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>

<script>
export default {
  name: 'QCSCompetencies',
  props: {
    results: Array,
  },
  methods: {
    bannerImage() {
      if (this.filtered().find((item) => item.Attachments)) {
        return (
          process.env.VUE_APP_ROOT_DOCS +
          this.filtered().find((item) => item.Attachments).AttachmentFiles
            .results[0].ServerRelativeUrl
        );
      }

      return 'assets/images/sliders/7.jpg';
    },
    filtered() {
      if (this.results.length) {
        return this.results.filter((item) => item.Id === 7);
      }

      return [];
    },
  },
};
</script>

<style scoped></style>
