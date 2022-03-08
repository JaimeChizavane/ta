<template>
  <section class="work-process pt-130 pb-130">
    <div class="bg-img"><img src="assets/images/backgrounds/2.jpg" alt="background"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7">
          <div class="banners-wrapper sticky-top">
            <div class="slider">
              <div class="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0" data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear", "autoplay": true}'>
                <div class="slide-item align-v-h bg-overlay bg-overlay-gradient"  v-for="(image, index) in allImages" :key="index">
                  <div class="bg-img"><img :src="image.src" alt="slide img"></div>
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                        <div class="slide__content">
          <!--                <span class="slide__subtitle" v-html="item.subtitle"></span>-->
          <!--                <h2 class="slide__title">{{ item.title }}</h2>-->
                          <h1 class="pagetitle__heading">{{ image.title }}</h1>
                          <p class="slide__desc" v-html="image.Name"></p>
          <!--                <div class="d-flex flex-wrap align-items-center">-->
          <!--                  <router-link :to="item.to" class="btn btn__primary btn__primary-style2 mr-30">-->
          <!--                    <i class="icon-arrow-right"></i>-->
          <!--                    <span> Saber Mais</span>-->
          <!--                  </router-link>-->
          <!--                </div>-->
                        </div><!-- /.slide-content -->
                      </div><!-- /.col-xl-7 -->


                    </div><!-- /.row -->
                  </div><!-- /.container -->
                </div><!-- /.slide-item -->
              </div><!-- /.carousel -->
            </div>
 <!--            <div class="tab-content mb-50">
              <div class="tab-pane fade" :class="[activeIndex === index ? 'show active' : '']"
                   v-for="(image, index) in allImages"
                   :key="index">
                <div class="video__banner">
                  <img :src="image.src" class="rounded" alt="banner">
                </div> /.video__banner
              </div>
            </div> /.tab-content -->
            <div class="cta-banner mt-30 mb-30 d-flex flex-wrap align-items-center">
              <h4 class="cta__title my-3 pr-30">
                Encontre a nossa galeria online, com todos as coberturas de eventos:
              </h4>
              <router-link :to="{name: 'videos'}" class="btn btn__primary btn__primary-style2">
                <span> Ver mais </span>
                <i class="icon-arrow-right"></i>
              </router-link>
            </div> <!-- /.cta-banner -->
          </div>
        </div><!-- /.col-lg-7 -->
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <div class="heading mb-70">
            <h2 class="heading__subtitle color-primary">Galeria</h2>
            <h3 class="heading__title color-white">Encontre a nossa galeria digital! </h3>
          </div>
          <nav class="nav nav-tabs">
            <!-- process Item #1 -->
            <a class="process-item col-12" :class="[activeIndex == index ? 'active' : '']" @click.prevent="activeIndex = index" href="#"
               v-for="(image, index) in allImages"
               :key="index">
              <div class="process-item__content">
                <h4 class="process-item__title">{{ image.Title }}</h4>
                <p class="process-item__desc">{{ image.Name }}</p>
              </div>
            </a><!-- /.process-item -->
          </nav>
        </div><!-- /.col-lg-5 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.Work Process -->
</template>

<script>
export default {
  name: "QGalery",
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    }
  },
  data() {
    return {
      allImages: [],
      activeIndex: 0
    }
  },
  mounted() {
    // window.mainExecution()
    this.$http.get("images.json").then((data) => {
      this.allImages = data.data.d.results.filter(f => f.Name !== 'Forms').flatMap(f => f.Folders.results
          .flatMap(fo => fo.Files.results
              .map((file) => {
                file.Title = file.Title && file.Title.trim() ? file.Title : fo.Name
                file.src = this.getFileUrl(file)

                return file
              }))).slice(0, 5)

    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
