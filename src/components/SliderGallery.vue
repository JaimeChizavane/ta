<template> 
  <section class="slider" >
    <div class="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
         data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear", "autoplay": true}'>
      <div class="slide-item align-v-h bg-overlay bg-overlay-gradient" v-for="(item, index) in sliders" :key="index">
        <div class="bg-img"><img :src="item.img" alt="slide img"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="slide__content">
<!--                <span class="slide__subtitle" v-html="item.subtitle"></span>-->
<!--                <h2 class="slide__title">{{ item.title }}</h2>-->
                <!-- <h1 class="pagetitle__heading">{{ item.title }}</h1>
                <p class="slide__desc" v-html="item.subtitle"></p> -->
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
  name: "QSliderGallery",
  watch: {
    news: function () {
      // this.sliders = this.sliders.concat(newVal)

      // window.$('.slick-carousel').slick();
    }
  },
  data() {
    return {
      sliders: [
        // {
        //   img: 'assets/images/sliders/1.jpg',
        //   subtitle: 'Seja bem-vindo ao site do Tribunal Administrativo de Moçambique.',
        //   title: 'O Tribunal Administrativo',
        //   desc: 'É o órgão superior da hierarquia dos tribunais administrativos.',
        //   to: { name: 'history' }
        // },
        // {
        //   img: 'assets/images/sliders/2.jpg',
        //   subtitle: 'Atribuições e Competências do Tribunal Administrativo',
        //   title: 'Tribunal Administrativo em prol da Justiça',
        //   desc: 'O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.',
        //   to: { name: 'history' }
        // }
      ]
    }
  },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    }
  },
  mounted() {
    this.$http.get("images.json").then((data) => {
      if (data.data.d.results.length) {
        this.sliders = data.data.d.results.map((banner) => {
          return {
            img: this.getImageUrl(banner),
          //  subtitle: banner.Subtitle,
         //   title: banner.Title,
         //   desc: '',
          //  to: { name: 'blog' }
          }
        })
      }
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      window.mainExecution()
    })
  }
}
</script>

<style scoped>

</style>
