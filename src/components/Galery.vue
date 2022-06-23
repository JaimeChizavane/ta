<template>
  <section class="work-process pt-130 pb-130">
    <div class="bg-img">
      <img src="assets/images/backgrounds/2.jpg" alt="background" />
    </div>
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="banners-wrapper sticky-top">
            <section class="slider" v-if="sliders.length">
              <div
                class="
                  slick-carousel
                  carousel-arrows-light carousel-dots-light
                  m-slides-0
                "
                data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear", "autoplay": true}'
              >
                <div
                  class="slide-item align-v-h bg-overlay bg-overlay-gradient"
                  v-for="(item, index) in sliders"
                  :key="index"
                >
                  <div class="bg-img">
                    <img :src="item.img" alt="slide img" />
                  </div>
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div
                          class="
                            slide__content
                            text-center
                            mt-0
                            text-block__title
                          "
                        >
                          <span
                            class="text-light bg-primary"
                            v-html="item.subtitle"
                          ></span>

                          <!--             <h1 class="process-item__title">{{ item.title }}</h1>    <div class="d-flex flex-wrap align-items-center">-->
                          <!--                  <router-link :to="item.to" class="btn btn__primary btn__primary-style2 mr-30">-->
                          <!--                    <i class="icon-arrow-right"></i>-->
                          <!--                    <span> Saber Mais</span>-->
                          <!--                  </router-link>-->
                          <!--                </div>-->
                        </div>
                        <!-- /.slide-content -->
                      </div>
                      <!-- /.col-xl-7 -->
                    </div>
                    <!-- /.row -->
                  </div>

                  <!-- /.container -->
                </div>

                <!-- /.slide-item -->
              </div>
              <!-- /.carousel -->
            </section>
            <div
              class="cta-banner mt-30 mb-30 d-flex flex-wrap align-items-center"
            >
              <h4 class="cta__title my-3 pr-30">
                Encontre a nossa galeria de imagens online.
              </h4>
              <router-link
                :to="{ name: 'galery' }"
                class="btn btn__primary btn__primary-style2"
              >
                <span> Ver mais </span>
                <i class="icon-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.slider -->
</template>

<script>
export default {
  name: "QSlider",
  watch: {
    news: function () {
      // this.sliders = this.sliders.concat(newVal)
      // window.$('.slick-carousel').slick();
    },
  },
  data() {
    return {
      sliders: [
        {
          img: "assets/images/gallery02/s1.jpg",
          subtitle:
            "Abertura do ano Judicial",
          title: "O Tribunal Administrativo",
          desc: "É o órgão superior da hierarquia dos tribunais administrativos.",
          to: { name: "history" },
        },
        {
          img: "assets/images/gallery02/s3.jpg",
          subtitle:
            "Abertura do ano Judicial",
          title: "O Tribunal Administrativo",
          desc: "É o órgão superior da hierarquia dos tribunais administrativos.",
          to: { name: "history" },
        },
        {
          img: "assets/images/gallery02/s2.jpg",
          subtitle: "Abertura do ano Judicial",
          title: "Tribunal Administrativo em prol da Justiça",
          desc: "O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.",
          to: { name: "history" },
        },
       
      ],
      activeIndex: 0,
    };
  },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : "#";
    },
  },
  mounted() {
    /*this.$http
      .get("images.json")
      .then((data) => {
        this.sliders = data.data.d.results
          .filter((f) => f.Name !== "Forms")
          .flatMap((f) =>
            f.Folders.results.flatMap((fo) =>
              fo.Files.results.map((file) => {
                file.Title =
                  file.Title && file.Title.trim() ? file.Title : fo.Name;
                file.src = this.getFileUrl(file);

                return {
                  img: file.src,
                  subtitle: file.Title,
                  title: file.Title,
                  desc: "",
                  to: { name: "history" },
                };
              })
            )
          )
          .slice(0, 5);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  },
};
</script>

<style scoped>
</style>
