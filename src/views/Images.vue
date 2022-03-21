<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>

    <section class="portfolio-grid">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="portfolio-filter d-flex flex-wrap justify-content-center list-unstyled">
              <li><a class="filter" :class="[activeFilter ? '':'active']" href="#"
                     @click.prevent="filterImages(null)">Todas</a></li>
              <li v-for="(filter, index) in filters" :key="index">
                <a class="filter" :class="[activeFilter === filter ? 'active':'']" href="#"
                   @click.prevent="filterImages(filter)">{{ filter }}</a>
              </li>
            </ul><!-- /.portfolio-filter  -->
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
        <div class="row" v-for="(folder, index) in images" :key="'F-'+index">
          <!-- portfolio item #1 -->
           <div class="row" id="accordion">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="accordion-item" v-for="(folder, index) in folder.Folders" :key="'FF-'+index">
                <div class="accordion__header" data-toggle="collapse" :data-target="'#collapse' + index">
                  <a class="accordion__title" @click.prevent>{{ folder.FolderName }}</a>
                </div><!-- /.accordion-item-header -->
                <div :id="'collapse' + index" class="collapse" data-parent="#accordion">
                  <div class="accordion__body">
                  </div>
                </div>
              </div>
            </div>
           </div>
          <div class="col-sm-6 col-md-6 col-lg-4"
               v-for="(file, index) in folder.Folders.results.flatMap(f => f.Files.results.map((file) => {
                 file.FolderName = f.Name
                 file.Title = f.Title || f.Name
                 file.src = getFileUrl(file)
                 file.description = f.Name

                 return file
               }))" :key="'IM' + index">
            <div class="portfolio-item">
              <div class="portfolio__img" @click="zoomImage(file)">
                <img :src="file.src" alt="portfolio img" class="cover__image">
              </div><!-- /.portfolio-img -->
              <div class="portfolio__content">
                <h4 class="portfolio__title">
                  <a href="#">{{ file.Title }}</a></h4>
                <div class="portfolio__cat">
                  <a href="#">{{ file.FolderName }}</a>
                  <a href="#">{{ folder.Name }}</a>
                </div><!-- /.portfolio-cat -->
              </div><!-- /.portfolio-content -->
            </div><!-- /.portfolio-item -->
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.portfolio layout 3  -->
    <q-footer/>
    <CoolLightBox
        :items="slideImages"
        :index="index"
        @close="index = null">
    </CoolLightBox>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: "QImages",
  components: { QBreadCrumb, QHeader, QFooter, CoolLightBox },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
    zoomImage(file) {
      this.slideImages = [file]
      this.index = 0
    },
    filterImages(name = null) {
      this.activeFilter = name

      if (name) {
        this.images = this.allImages.filter(i => i.Name === name)
      } else {
        this.images = this.allImages
      }
    }
  },
  data() {
    return {
      images: [],
      allImages: [],
      filters: [],
      activeFilter: null,
      index: null,
      slideImages: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("images.json").then((data) => {
     
      this.allImages = data.data.d.results.filter(f => f.Name !== 'Forms')
      this.images = this.allImages
      console.log(this.images);

      this.allImages.forEach((folder) => {
        this.filters.push(folder.Name)
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
