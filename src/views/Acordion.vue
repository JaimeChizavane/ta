<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
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
        <div class="row" v-if="filtered.length">
          <div class="col-12">
            <div class="heading text-center mb-50">
              <h2 class="heading__subtitle color-body">Resultados encontrados:</h2>
            </div>
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in filtered" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type">{{ item.TimeCreated | date }}</span>
                    </div>
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
    <section class="faq pt-0 pb-70">
      <div class="bg-img"><img src="assets/images/backgrounds/4.png" alt="backgrounds"></div>
      <div class="container">
        <div class="heading text-center mb-50">
          <h3 class="heading__title">Todos {{ $tc($route.meta.display) }}</h3>
        </div>
        <div class="row" id="accordion">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="accordion-item" v-for="(item, index) in items" :key="index">
              <div class="accordion__header" data-toggle="collapse" :data-target="'#collapse' + index">
                <a class="accordion__title" @click.prevent>{{ item.Name }}</a>
              </div><!-- /.accordion-item-header -->
              <div :id="'collapse' + index" class="collapse" data-parent="#accordion">
                <div class="accordion__body">
                  <div class="row" id="accordion2">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <div class="accordion-item"
                           v-for="(year, xindex) in item.Folders.results.filter(i => i.Files.results.length || (i.Folders.results && i.Folders.results.length) )"
                           :key="'folder'+xindex">
                        <div class="accordion__header" data-toggle="collapse" :data-target="'#collapseSub' + xindex">
                          <a class="accordion__title" @click.prevent>{{ year.Name }}</a>
                        </div><!-- /.accordion-item-header -->
                        <div :id="'collapseSub' + xindex" class="collapse" data-parent="#accordion2">
                          <div class="accordion__body">
                            <div class="row">
                              <div class="col-12">
                                <div class="jobs-container" v-if="year.Files.results">
                                  <!-- career item #1 -->
                                  <div class="job-item" v-for="(doc, vindex) in year.Files.results" :key="'Doc'+vindex">
                                    <div class="row">
                                      <div class="col-sm-12 col-md-12 col-lg-4">
                                        <div class="job__meta">
                                          <span class="job__type">{{ doc.TimeCreated | date }}</span>
                                        </div>
                                        <!--                                        <h4 class="job__title">{{ doc.Name || doc.Title || 'Sem titulo' }}</h4>-->
                                      </div><!-- /.col-lg-4 -->
                                      <div class="col-sm-12 col-md-12 col-lg-5">
                                        <p class="job__desc" v-html="doc.Name"></p>
                                      </div><!-- /.col-lg-5 -->
                                      <div
                                          class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                                        <a :href="getFileUrl(doc)" target="_blank" class="btn btn__secondary">Abrir</a>
                                      </div><!-- /.col-lg-3 -->
                                    </div><!-- /.row -->
                                  </div><!-- /.job-item -->
                                </div>
                                <div class="jobs-container" v-if="year.Folders.results">
                                  <!-- career item #1 -->
                                  <div class="job-item"
                                       v-for="(file, sindex) in year.Folders.results.flatMap(e => e.Files.results)"
                                       :key="'File'+sindex">
                                    <div class="row">
                                      <div class="col-sm-12 col-md-12 col-lg-4">
                                        <div class="job__meta">
                                          <span class="job__type">{{ file.TimeCreated | date }}</span>
                                        </div>
                                        <!--                                        <h4 class="job__title">{{ doc.Name || doc.Title || 'Sem titulo' }}</h4>-->
                                      </div><!-- /.col-lg-4 -->
                                      <div class="col-sm-12 col-md-12 col-lg-5">
                                        <p class="job__desc" v-html="file.Name"></p>
                                      </div><!-- /.col-lg-5 -->
                                      <div
                                          class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                                        <a :href="getFileUrl(file)" target="_blank" class="btn btn__secondary">Abrir</a>
                                      </div><!-- /.col-lg-3 -->
                                    </div><!-- /.row -->
                                  </div><!-- /.job-item -->
                                </div>
                              </div><!-- /.col-lg-12 -->
                            </div><!-- /.row -->
                          </div><!-- /.accordion-item-body -->
                        </div>
                      </div>
                    </div><!-- /.col-lg-6 -->
                  </div><!-- /.row -->
                </div><!-- /.accordion-item-body -->
              </div>
            </div>
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.FAQ -->
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
    search() {
      if (this.query) {
        this.filtered = this.searcheable
            .filter(file => file.Name.toLowerCase().includes(this.query.toLowerCase())).slice(0, 5)
      } else {
        this.filtered = []
      }
    }
  },
  data() {
    return {
      items: [],
      allItems: [],
      query: '',
      filtered: [],
      searcheable: []
    }
  },
  mounted() {
    window.mainExecution()


    this.$http.get("jurispudencia.json").then((data) => {
      this.allItems = data.data.d.results.filter(item => item.Folders.results.length && !item.Name.toLowerCase().includes("certificações"))
      this.items = this.allItems
      this.searcheable = this.searcheable = this.items.flatMap(item => item.Folders.results.flatMap(s => s.Files.results))
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
