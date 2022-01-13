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
          <div class="col-12">
            <div class="pagetitle__form mb-50">
              <div class="form-row">
                <div class="col-12">
                  <input @keyup="search" v-model="query.assunto" type="text" class="form-control bordered-box mb-20"
                         placeholder="Procurar por assunto...">
                </div>
              </div>
            </div>
          </div><!-- /.col-xl-6 -->
        </div>
        <div class="row mb-50" v-if="filtered.length">
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
                      <span class="job__type" v-show="item.N_x00fa_mero_x0020_do_x0020_BR">N. BR: {{
                          item.N_x00fa_mero_x0020_do_x0020_BR
                        }}</span>
                      <span class="job__type" v-show="item.N_x00fa_mero_x0020_de_x0020_Diploma">
                        N. Diploma: {{ item.N_x00fa_mero_x0020_de_x0020_Diploma }}
                      </span>
                      <span class="job__location" v-show="item.Data_x0020_do_x0020_BR">
                        {{ item.Data_x0020_do_x0020_BR | date }}
                      </span>
                    </div>
                    <h4 class="job__title">{{ item.File.Name }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-5">
                    <p class="job__desc" v-html="item.File.Name"></p>
                  </div><!-- /.col-lg-5 -->
                  <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                    <a :href="getFileUrl(item.File)" target="_blank" class="btn btn__secondary">Abrir</a>
                  </div><!-- /.col-lg-3 -->
                </div><!-- /.row -->
              </div><!-- /.job-item -->
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="heading text-center mb-20">
              <h3 class="heading__title">Todas {{ $tc($route.meta.display) }}s</h3>
            </div>
            <div class="jobs-container" v-if="items.length">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in items" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type" v-show="item.N_x00fa_mero_x0020_do_x0020_BR">N. BR: {{
                          item.N_x00fa_mero_x0020_do_x0020_BR
                        }}</span>
                      <span class="job__type" v-show="item.N_x00fa_mero_x0020_de_x0020_Diploma">
                        N. Diploma: {{ item.N_x00fa_mero_x0020_de_x0020_Diploma }}
                      </span>
                      <span class="job__location" v-show="item.Data_x0020_do_x0020_BR">
                        {{ item.Data_x0020_do_x0020_BR | date }}
                      </span>
                    </div>
                    <h4 class="job__title">{{ item.Title || item.Tipo }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.Folder.Files">
                    <div class="row mb-5" v-for="file in item.Folder.Files.results" :key="file.UniqueId">
                      <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc" v-html="file.Name"></p>
                      </div><!-- /.col-lg-5 -->
                      <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                        <a :href="getFileUrl(file)" target="_blank" class="btn btn__secondary">Abrir</a>
                      </div><!-- /.col-lg-3 -->
                    </div>
                  </div>
                </div><!-- /.row -->
              </div><!-- /.job-item -->
            </div>
            <div class="heading text-center mb-20" v-else>
              <h3 class="heading__title">Sem resultados...</h3>
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
  name: "QLaw",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    search() {
      if (this.query.assunto) {
        this.filtered = this.searcheable
            .filter(file => (this.query.assunto === ''
                || file.File.Name?.toLowerCase().includes(this.query.assunto.toLowerCase())
                || file.Tipo?.toLowerCase().includes(this.query.assunto.toLowerCase())
                || file.Title?.toLowerCase().includes(this.query.assunto.toLowerCase()))
            ).slice(0, 10)
      } else {
        this.filtered = []
      }
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
    getFileThumb(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + 'thumbs/' + item.ServerRelativeUrl : '#'
    }
  },
  data() {
    return {
      allItems: [],
      items: [],
      filtered: [],
      searcheable: [],
      query: {
        assunto: '',
        br: '',
        diploma: '',
        data: ''
      },

    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("publicacoes.json").then((data) => {
      this.allItems = data.data.d.results.filter(i => i.Folder.Files && i.Folder.Files.results?.length)
      this.items = this.allItems
      this.searcheable = this.items.flatMap((item) => {
        if (item.Folder.Files) {
          return item.Folder.Files.results.flatMap((file) => {
            return {
              Tipo: item.Tipo,
              Title: item.Title || item.Folder.Name,
              File: file
            }
          })
        }
      })

    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
