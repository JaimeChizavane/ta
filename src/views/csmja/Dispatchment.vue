<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">{{ $tc($route.meta.display) }}</h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
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
              <div class="job-item" v-for="(item, index) in history" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type" v-show="item.TimeLastModified">
                        {{ item.TimeLastModified | date }}
                      </span>
                    </div>
                    <h4 class="job__title">{{ item.Name || 'Sem titulo' }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-5">
                    <p class="job__desc" v-html="item.Name"></p>
                  </div><!-- /.col-lg-5 -->
                  <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                    <a :href="getFileUrl(item)" target="_blank" class="btn btn__secondary">Abrir</a>
                  </div><!-- /.col-lg-3 -->
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
  name: "QDispatchment",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    search() {
      if (this.query) {
        this.history = this.allItems
            .filter(item => item.Name?.toLowerCase().includes(this.query.toLowerCase()))
      } else {
        this.history = this.allItems
      }
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
  },
  data() {
    return {
      allItems: [],
      history: [],
      query: ''
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("cmsjadispatch.json").then((data) => {
      this.history = data.data.d.results

      this.allItems = this.history
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
