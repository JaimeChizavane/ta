<template>
  <section class="work-process">
    <div class="bg-img">
      <img src="assets/images/backgrounds/2.jpg" alt="background" />
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center ">
        <div class="col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
          <div class="banners-wrapper sticky-top">
            <div class="tab-content">
              <div class="carousel" v-if="allImages.length">
                <div class="carousel-inner">
                  <div
                    class="carousel-iten"
                    v-for="(image, index) in allImages"
                    :key="index"
                    :activeIndex="activeIndex"
                    :index="index"
                    v-show="activeIndex === index"
                  >
                    <div class="bg-primary col-sm-12 text-center">
                      <span class=" " v-html="image.Title"></span>
                    </div>
                    <div class="video__banner">
                      <img
                        v-lazy="image.src"
                        class="rounded"
                        alt="banner"
                        height="400px"
                        width="100%"
                      />
                    </div>

                    <button
                      class="carousel-control left text-light "
                      @click="prev()"
                    >
                      <i class="fa fa-arrow-left"></i>
                    </button>
                    <button
                      class="carousel-control right text-light slick-next"
                      @click="next()"
                    >
                      <i class="fa fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.slider -->
            <div
              class="cta-banner mt-10 mb-10 d-flex flex-wrap align-items-center"
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
  name: 'QGallery',
  watch: {
    news: function() {
      // this.sliders = this.sliders.concat(newVal)
      // window.$('.slick-carousel').slick();
    },
  },
  data() {
    return {
      allImages: [
        /* {
          src: 'assets/images/sliders/2.jpg',
          subtitle: 'Abertura do ano Judicial',
          Title: 'O Tribunal Administrativo1',
          desc:
            'É o órgão superior da hierarquia dos tribunais administrativos.',
          to: { name: 'history' },
        },
        {
          src: 'assets/images/sliders/1.jpg',
          subtitle: 'Abertura do ano Judicial',
          Title: 'O Tribunal Administrativo1',
          desc:
            'É o órgão superior da hierarquia dos tribunais administrativos.',
          to: { name: 'history' },
        },*/
      ],
      activeIndex: 0,
      slideInterval: null,
    };
  },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : '#';
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    next() {
      const index =
        this.activeIndex < this.allImages.length - 1 ? this.activeIndex + 1 : 0;
      this.setActiveIndex(index);
    },
    prev() {
      const index =
        this.activeIndex > 0 ? this.activeIndex - 1 : this.allImages.length - 1;
      this.setActiveIndex(index);
    },
  },
  mounted() {
    this.$http
      .get('images.json')
      .then((data) => {
        this.allImages = data.data.d.results
          .filter((f) => f.Name !== 'Forms')
          .flatMap((f) =>
            f.Folders.results.flatMap((fo) =>
              fo.Files.results.map((file) => {
                file.Title =
                  file.Title && file.Title.trim() ? file.Title : fo.Name;
                file.src = this.getFileUrl(file);

                return file;
              })
            )
          )
          .slice(0, 10);
      })
      .catch((error) => {
        console.log(error);
      });
    this.slideInterval = setInterval(() => {
      this.next();
    }, 7000);
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;

  overflow: hidden;
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50%);
  color: brown;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
</style>
