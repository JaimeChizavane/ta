<template>
  <v-carousel
    height="300"
    cycle
    :interval="5000"
    :show-arrows="false"
    hide-delimiter-background
    class="slider"
  >
    <v-carousel-item
      v-for="(item, i) in sliders"
      :key="i"
      :src="item.img"
      class="align-v-h bg-overlay bg-overlay-gradient b-img"
    >
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

<style scoped>
.b-img {
  background-position: center top !important;
}
</style>
