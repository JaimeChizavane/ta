<template>
  <section class="work-process pt-130 pb-130">
    <div class="bg-img">
      <img src="assets/images/backgrounds/2.jpg" alt="background" />
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center ">
        <div class="col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
          <div class="banners-wrapper sticky-top">
            <div class="tab-content mb-50">
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
                      <span
                        class="slide__desc text-light text-uppercase "
                        v-html="image.Title"
                      ></span>
                    </div>

                    <img :src="image.src" />
                  </div>
                </div>
              </div>
            </div>
            <!-- /.slider -->
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
  name: "QGallery",
  watch: {
    news: function() {
      // this.sliders = this.sliders.concat(newVal)
      // window.$('.slick-carousel').slick();
    },
  },
  data() {
    return {
      allImages: [
 /*        {
          img: "assets/images/gallery02/IMG_0148.jpg",
          subtitle: "Abertura do ano Judicial",
          title: "O Tribunal Administrativo",
          desc:
            "É o órgão superior da hierarquia dos tribunais administrativos.",
          to: { name: "history" },
        },
        {
          img: "assets/images/gallery02/IMG_0152.jpg",
          subtitle: "Abertura do ano Judicial 2",
          title: "O Tribunal Administrativo",
          desc:
            "É o órgão superior da hierarquia dos tribunais administrativos.",
          to: { name: "history" },
        },
        {
          img: "assets/images/gallery02/IMG_0159.jpg",
          subtitle: "Abertura do ano Judicial",
          title: "Tribunal Administrativo em prol da Justiça",
          desc:
            "O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.",
          to: { name: "history" },
        },
        {
          img: "assets/images/gallery02/IMG_0179.jpg",
          subtitle: "Abertura do ano Judicial",
          title: "Tribunal Administrativo em prol da Justiça",
          desc:
            "O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.",
          to: { name: "history" },
        }, */
      ],
      activeIndex: 0,
      slideInterval: null,
    };
  },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : "#";
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
  },
  mounted() {
    this.$http
      .get("images.json")
      .then((data) => {
        this.allImages = data.data.d.results
          .filter((f) => f.Name !== "Forms")
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
          .slice(0, 5);
      })
      .catch((error) => {
        console.log(error);
      });
    this.slideInterval = setInterval(() => {
      const index =
        this.activeIndex < this.allImages.length - 1 ? this.activeIndex + 1 : 0;
      this.setActiveIndex(index);
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
</style>
