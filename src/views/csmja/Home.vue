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

export default {
  name: 'QHome',
  components: { QBlog, QGalery, QContact, QAboutUsSection, QSlider, QFooter, QHeader },
  mounted() {
    window.mainExecution()
  }
}
</script>
