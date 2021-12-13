<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <sub-menu/>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <div class="pagetitle__form mb-50">
              <input @keyup="search" v-model="query" type="text" class="form-control bordered-box"
                     placeholder="Procurar...">
            </div>
          </div><!-- /.col-xl-6 -->
        </div>
        <div class="row">
          <div class="col-12">
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in items" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <!--                    <div class="job__meta">-->
                    <!--                      <span class="job__type">Full Time</span>-->
                    <!--                    </div>-->
                    <h4 class="job__title">{{ item.Sec_x00e7__x00e3_o }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.Folder">
                    <a target="_blank" :href="getFileUrl(file)" v-for="(file, index) in item.Folder.Files.results"
                       :key="index">
                      <p class="job__desc mb-20">{{ file.Name }}</p>
                    </a>
                  </div><!-- /.col-lg-5 -->
                </div><!-- /.row -->
              </div><!-- /.job-item -->
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.careers -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import SubMenu from "@/views/csmja/components/SubMenu";

export default {
  name: "QAboutUs",
  components: { SubMenu, QBreadCrumb, QHeader, QFooter },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
    search() {
      if (this.query) {
        this.items = this.allItems
            .filter(item => item.Sec_x00e7__x00e3_o && item.Folder && item.Folder.Files.results.length)
            .filter(item => item.Folder.Name.toLowerCase().includes(this.query.toLowerCase()) || item.Folder.Files.results.find(i => i.Name.toLowerCase().includes(this.query.toLowerCase())))
      } else {
        this.items = this.allItems.filter(item => item.Sec_x00e7__x00e3_o && item.Folder && item.Folder.Files.results.length)
      }
    }
  },
  data() {
    return {
      items: [],
      allItems: [],
      query: ''
    }
  },
  mounted() {
    window.mainExecution()



    this.$http.get("jurispudencia.json").then((data) => {
      this.allItems = data.data.d.results
      this.items = this.allItems.filter(item => item.Sec_x00e7__x00e3_o && item.Folder && item.Folder.Files.results.length)

    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
