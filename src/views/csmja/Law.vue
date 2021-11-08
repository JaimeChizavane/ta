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
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in history" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type" v-show="item.N_x00fa_meroDeBR">N. BR: {{
                          item.N_x00fa_meroDeBR
                        }}</span>
                      <span class="job__type" v-show="item.N_x00fa_meroDaLegisla_x00e7__x00">
                        N. Diploma: {{ item.N_x00fa_meroDaLegisla_x00e7__x00 }}
                      </span>
                      <span class="job__location" v-show="item.Data_x0020_do_x0020_BR">
                        {{ item.Data_x0020_do_x0020_BR | date }}
                      </span>
                      <!--                      <span class="job__location" v-show="item.OData__x00c1_rea_x0020_de_x0020_Apoio_0">-->
                      <!--                        {{ item.OData__x00c1_rea_x0020_de_x0020_Apoio_0 }}-->
                      <!--                      </span>-->
                      <!--                      <span class="job__location" v-show="item.OData__x00c1_rea_x0020_de_x0020_Apoio_">-->
                      <!--                        {{ item.OData__x00c1_rea_x0020_de_x0020_Apoio_ }}-->
                      <!--                      </span>-->
                    </div>
                    <h4 class="job__title">{{ item.Title || 'Sem titulo' }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-5">
                    <p class="job__desc" v-html="item.Assunto"></p>
                  </div><!-- /.col-lg-5 -->
                  <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                    <a :href="getFileUrl(item)" target="_blank" class="btn btn__secondary" v-show="item.Attachments">Abrir</a>
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
  name: "QLaw",
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    getFileUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : '#'
    }
  },
  data() {
    return {
      history: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("legislacao.json").then((data) => {
      this.history = data.data.d.results.filter(item => item.Tipo_x0020_de_x0020_Legisla_x00e === 'Lei' || item.Tipo_x0020_de_x0020_Legisla_x00e === 'Decreto Lei')
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
