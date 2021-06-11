<template>
  <div id="home">
    <q-slider/>
    <q-about-us-section/>
    <q-contact/>
    <q-structure/>
    <q-galery/>
    <q-blog/>
  </div>

</template>

<script>

import QSlider from "@/components/Slider";
import QAboutUsSection from "@/components/AboutUsSection";
import QContact from "@/components/Contact";
import QStructure from "@/components/Structure";
import QGalery from "@/components/Galery";
import QBlog from "@/components/Blog";

export default {
  name: 'QHome',
  components: { QBlog, QGalery, QStructure, QContact, QAboutUsSection, QSlider }
}
</script>
