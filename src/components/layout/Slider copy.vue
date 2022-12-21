<template>
  <v-carousel height="300" cycle :interval="5000">
    <v-carousel-item v-for="(item, i) in sliders" :key="i">
      <v-card class="text-center">
        <v-img
          :src="item.img"
          class="white--text justify-center text-center"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="300"
        >
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="slide__content">
                <h1 class="pagetitle__heading">{{ item.title }}</h1>
                <p class="slide__desc" v-html="item.subtitle"></p>
                <!--                <div class="d-flex flex-wrap align-items-center">-->
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
          <v-card-title v-text="item.name" class="text-center"></v-card-title>
        </v-img>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'QSlider',
  data() {
    return {
      sliders: [
        {
          img: 'assets/images/sliders/1.jpg',
          subtitle:
            'Seja bem-vindo ao site do Tribunal Administrativo de Moçambique.',
          title: 'O Tribunal Administrativo',
          desc:
            'É o órgão superior da hierarquia dos tribunais administrativos.',
          to: { name: 'history' },
        },
        {
          img: 'assets/images/sliders/CSMJA.jpg',
          subtitle:
            'Seja bem-vindo ao site do Tribunal Administrativo de Moçambique.',
          title: 'O Tribunal Administrativo',
          desc:
            'É o órgão superior da hierarquia dos tribunais administrativos.',
          to: { name: 'history' },
        },
        {
          img: 'assets/images/sliders/2.jpg',
          subtitle: 'Atribuições e Competências do Tribunal Administrativo',
          title: 'Tribunal Administrativo em prol da Justiça',
          desc:
            'O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais aduaneiros.',
          to: { name: 'history' },
        },
      ],
    };
  },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments
        ? process.env.VUE_APP_ROOT_DOCS +
            item.AttachmentFiles.results[0].ServerRelativeUrl
        : 'assets/images/blog/grid/1.jpg';
    },
  },
  mounted() {
    this.$http
      .get('banners.json')
      .then((data) => {
        if (data.data.d.results.length) {
          this.sliders = data.data.d.results.map((banner) => {
            return {
              img: this.getImageUrl(banner),
              subtitle: banner.Subtitle,
              title: banner.Title,
              desc: '',
              to: { name: 'blog' },
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        window.mainExecution();
      });
  },
};
</script>

<style></style>
