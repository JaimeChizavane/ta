<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <div class="pagetitle__form mb-50">
              <input type="text" class="form-control bordered-box" placeholder="Procurar...">
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
                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.folder">
                    <a :href="getFileUrl(file)" v-for="(file, index) in item.folder.files.results" :key="index">
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

export default {
  name: "QAboutUs",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("jurispudencia.json").then((data) => {
      this.items = data.data.d.results.filter(item => item.Sec_x00e7__x00e3_o)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
