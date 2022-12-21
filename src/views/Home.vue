<template>
  <div class="wrapper">
    <q-header />
    <q-slider-show />
    <q-blog />
    <v-row>
      <v-col cols="12" md="8"> <q-galery /></v-col>
      <v-col cols="12" md="4"></v-col>
    </v-row>

    <!--    <q-structure/>-->
    <q-about-us-section />
    <!--    <q-contact/>
--    <q-slidergallery/>-->
    <q-footer />
  </div>
</template>

<script>
//import countapi from 'countapi-js';
//import QSlider from '@/components/Slider';
import QSliderShow from '@/components/layout/Slider.vue';
import QAboutUsSection from '@/components/AboutUsSection';
//import QContact from "@/components/Contact";
// import QStructure from "@/components/Structure";
import QGalery from '@/components/Galery';
import QBlog from '@/components/Blog';
import QHeader from '@/components/Header/Header';
import QFooter from '@/components/Footer';

export default {
  name: 'QHome',
  components: {
    QBlog,
    QGalery,
    QAboutUsSection,
    QSliderShow,
    QFooter,
    QHeader,
    // QSlider,
  },
  data() {
    return {
      topNews: [],
    };
  },
  mounted: function() {
    // window.mainExecution()
    this.getVisitesUrl();
  },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments
        ? process.env.VUE_APP_ROOT_DOCS +
            item.AttachmentFiles.results[0].ServerRelativeUrl
        : 'assets/images/blog/grid/1.jpg';
    },
    getVisitesUrl() {
      /*
      countapi.visits("extranet.ta.gov.mz","19dd30fa-bd8f-4ac0-a04a-eb035f08dfc4").then((result) => {
            document.getElementById("count_visitors").innerText = result.value;
            console.log(result.value);
      });
      */
    },

    // addToSlider(news) {
    //   news.forEach((article) => {
    //     this.topNews.push({
    //       img: this.getImageUrl(article),
    //       Title: 'Últimas Notícias',
    //       desc: article.Title,
    //       subtitle: 'ssdsdd',
    //       to: { name: 'blog-item', params: { guid: article.GUID } }
    //     })
    //   })
    // }
  },
};
</script>
