<template> 
  <section class="slider" >
  <div id="slider">
  <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
  <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
</div>
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
