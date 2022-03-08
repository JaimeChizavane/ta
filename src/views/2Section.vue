<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="about__img mb-40">
              <img
                :src="getImageUrl(services)"
                alt="blog image"
                class="cover__image"
              />
              <blockquote class="blockquote mb-0">
                <h4 class="blockquote__title">{{ services.Title }}</h4>
              </blockquote>
            </div>
            <!-- /.about-img -->
          </div>
          <!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div
              class="heading heading-layout2 mb-50"
              v-html="services.Content"
            ></div>
          </div>
          <!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
            <div class="sticky-top">
              <img src="assets/images/sliders/8.png" alt="banner" />
            </div>
          </div>
          <!-- /col-lg-5 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.Features Layout 3 -->
    <q-footer />
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QSectionTwo",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments
        ? process.env.VUE_APP_ROOT_DOCS +
            item.AttachmentFiles.results[0].ServerRelativeUrl
        : "assets/images/about/1.jpg";
    },
  },
  data() {
    return {
      services: {
        Content: null,
      },
    };
  },
  mounted() {
    window.mainExecution();
    this.$http
      .get("instituicao.json")
      .then((data) => {
        this.services = data.data.d.results.find((item) => item.Id === 5);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>
