<template>
  <section class="slider work-process pt-130 pb-130" v-if="sliders.length">
    <div class="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
         data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear", "autoplay": true}'>
      <div class="slide-item align-v-h bg-overlay bg-overlay-gradient" v-for="(image, index) in allImages" :key="index">
        <div class="bg-img"><img :src="image.src" alt="slide img"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <div class="slide__content">
<!--                <span class="slide__subtitle" v-html="item.subtitle"></span>-->
<!--                <h2 class="slide__title">{{ item.title }}</h2>-->
                <h1 class="pagetitle__heading">{{ image.title }}</h1>
                <p class="slide__desc" v-html="image.subtitle"></p>
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
  </section><!-- /.slider -->
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
