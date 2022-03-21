<template>
  <div class="wrapper">
    <q-header/>
    <q-slider/>
    <q-blog/>
    <q-about-us-section/>
    <!--    <q-structure/>-->
    <q-galery/> 
    <q-contact/>
    <q-footer/>
  </div>
</template>

<script>

import QSlider from "@/components/Slider";
import QAboutUsSection from "@/components/AboutUsSection";
import QContact from "@/components/Contact";
// import QStructure from "@/components/Structure";
import QGalery from "@/components/Galery";
import QBlog from "@/components/Blog";
import QHeader from "@/components/Header/Header";
import QFooter from "@/components/Footer";
//import QSliderGallery from "@/components/SliderGallery";

export default {
  name: 'QHome',
  components: { QBlog, QGalery, QContact, QAboutUsSection, QSlider, QFooter, QHeader},
  data() {
    return {
      topNews: []
    }
  },
  mounted() {
    // window.mainExecution()
  },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    }
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
  }
}
</script>
