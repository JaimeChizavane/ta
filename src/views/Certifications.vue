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
                <div class="col-3">
                  <input @keyup="search" v-model="query.assunto" type="text" class="form-control bordered-box mb-20"
                         placeholder="Procurar por assunto...">
                </div>
                <div class="col-3">
                  <input @keyup="search" v-model="query.processo" type="text" class="form-control bordered-box mb-20"
                         placeholder="Procurar por n. do processo...">
                </div>
                <div class="col-3">
                  <input @keyup="search" v-model="query.acordao" type="text" class="form-control bordered-box mb-20"
                         placeholder="Procurar por acordão/despacho...">
                </div>
                <div class="col-3">
                  <input @keyup="search" v-model="query.relator" type="text" class="form-control bordered-box mb-20"
                         placeholder="Procurar por relator...">
                </div>
              </div>
            </div>
          </div><!-- /.col-xl-6 -->
        </div>
        <div class="row">
          <div class="col-12">
            <div class="jobs-container" v-if="items.length">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in items" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type" v-show="item.Entidade" v-html="'Entidade: '+item.Entidade"></span>
                    </div>


                    <div class="job__meta">
                      <span class="job__type" v-show="item.Benefici_x00e1_rio_x0020_do_x002"
                            v-html="'Beneficiário: '+item.Benefici_x00e1_rio_x0020_do_x002"></span>
                    </div>

                    <div class="job__meta">
                      <span class="job__type" v-show="item.Contratante"
                            v-html="'Contratante: '+item.Contratante"></span>
                    </div>

                    <div class="job__meta">
                      <span class="job__type" v-show="item.Contratado" v-html="'Contratado: '+item.Contratado"></span>
                    </div>


                    <div class="job__meta">
                      <span class="job__type" v-show="item.Sec_x00e7__x00e3_o_x0020_de_x002">{{
                          item.Sec_x00e7__x00e3_o_x0020_de_x002
                        }}</span>
                    </div>

                    <div class="job__meta">
                      <span class="job__type" v-show="item.N_x00b0__x0020_do_x0020_Acord_x0">
                        N. Acórdão: {{ item.N_x00b0__x0020_do_x0020_Acord_x0 }}
                      </span>
                    </div>
                    <div class="job__meta">
                      <span class="job__type" v-show="item.N_x002e__x00ba__x0020_do_x0020_P">
                        N. do Processo: {{ item.N_x002e__x00ba__x0020_do_x0020_P }}
                      </span>
                    </div>

                    <div class="job__meta">
                      <span class="job__location" v-show="item.Data_x0020_do_x0020_Ac_x00f3_rd_">
                        {{ item.Data_x0020_do_x0020_Ac_x00f3_rd_ | date }}
                      </span>
                    </div>

                    <h4 class="job__title" v-html="item.Title || item.Objecto_x0020_de_x0020_Recurso"></h4>


                    <div class="job__meta">
                      <span class="job__location" v-show="item.Relator" v-html="'Relator: ' + item.Relator"></span>
                    </div>

                    <p v-show="item.Assunto.results.length"><strong>Assunto:</strong></p>
                    <div class="job__meta" v-for="(subject, index) in item.Assunto.results"
                         :key="'subject' + index">
                      <span class="job__location">
                        {{ subject }}
                      </span>
                    </div>

                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.AttachmentFiles.results.length">
                    <div class="row mb-5" v-for="(file, index) in item.AttachmentFiles.results" :key="'file' + index">
                      <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc" v-html="file.FileName"></p>
                      </div><!-- /.col-lg-5 -->
                      <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                        <a :href="getFileUrl(file)" target="_blank" class="btn btn__secondary">Abrir</a>
                      </div><!-- /.col-lg-3 -->
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-8" v-else>
                    <div class="row mb-5">
                      <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc" v-html="item.Title || item.Objecto_x0020_de_x0020_Recurso"></p>
                      </div><!-- /.col-lg-5 -->
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
  name: "QAboutUs",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
    search() {
      if (this.query.assunto || this.query.relator || this.query.processo || this.query.acordao) {
        this.items = this.allItems
            .filter(file => (this.query.assunto === '' || file.Assunto.results.find(i => i?.toLowerCase().includes(this.query.assunto.toLowerCase())))
                && (this.query.relator === '' || file.Relator?.toLowerCase().includes(this.query.relator.toLowerCase()))
                && (this.query.processo === '' || file.N_x002e__x00ba__x0020_do_x0020_P?.toLowerCase().includes(this.query.processo.toLowerCase()))
                && (this.query.acordao === '' || file.N_x00b0__x0020_do_x0020_Acord_x0?.toLowerCase().includes(this.query.acordao.toLowerCase()))
            )
      } else {
        this.items = this.allItems
      }
    }
  },
  data() {
    return {
      items: [],
      allItems: [],
      query: {
        assunto: '',
        processo: '',
        acordao: '',
        pessoas: '',
        relator: ''
      },
      filtered: [],
      searcheable: []
    }
  },
  mounted() {
    window.mainExecution()


    this.$http.get("jurispudencia.json").then((data) => {
      this.allItems = data.data.d.results.filter(item => item.Ac_x00f3_rd_x00e3_o_x0020_ou_x00.toLowerCase().includes("certificação"))
      this.items = this.allItems
      // this.searcheable = this.items.flatMap(item => item.Folders.results.flatMap(s => s.Files.results))
      // this.searcheable = this.items
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
