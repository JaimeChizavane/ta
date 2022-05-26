<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pagetitle__form">
              <label class="offset-11">
                <button @click="clear"><i class="icon-query"></i> Limpar</button>
              </label>
              <form @submit.prevent="search">
                <div class="form-row">
                  <div class="col-12">
                    <input v-model="query.assunto" type="text" class="form-control bordered-box"
                           placeholder="Escreva o que procurar e pise em ENTER">
                  </div>
                </div>
              </form>
            </div>
          </div><!-- /.col-xl-6 -->
        </div>
      </div>
    </section>
    <section class="careers" v-if="query.assunto && legisltationItems.length">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">
                <router-link :to="{name: 'others'}">
                  {{ $tc('menus.legislation') }}
                </router-link>
              </h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in legisltationItems" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="table-responsive">
                      <table border="1px" class="table">
                        <tr>
                          <td class="ta_table job__type" colspan="2">
                            <div class="job__meta">
                              <span class="font-weight-bold">Tipo de Legislação:</span> &nbsp;&nbsp;&nbsp;&nbsp;
                              {{ item.Tipo_x0020_de_x0020_Legisla_x00e }}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>N. BR: </span>' + item.N_x00fa_mero_x0020_do_x0020_BR"></td>
                          <td class="ta_table">
                            <span class="font-weight-bold">N. Legislação:</span>
                            {{ item.N_x00fa_meroDaLegisla_x00e7__x00 }}
                          </td>
                        </tr>
                        <tr>
                          <td class="ta_table">
                            <span class="font-weight-bold">Legislação </span>
                            {{ item.Legisla_x00e7__x00e3_o_x0020_Ger }}
                          </td>
                          <td class="ta_table" v-if="item.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results">
                            <span class="font-weight-bold">Área de Apoio:</span>
                            <span v-for="(area, areadIndex) in item.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results"
                                  :key="areadIndex">
                          {{ area }}
                          <span
                              v-show="areadIndex !== (item.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results.length - 1)">,
                          </span>
                        </span>
                          </td>
                          <td class="ta_table" v-else>
                            <span class="font-weight-bold"> Área de Apoio:</span>
                            {{ item.OData__x00c1_rea_x0020_de_x0020_Apoio_0 }}
                          </td>
                        </tr>
                      </table>
                    </div>
                    <hr>

                    <span class="job__location">
                        {{ item.Data_x0020_do_x0020_BR | date }}
                      </span>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.AttachmentFiles.results.length">
                    <div class="row mb-5" v-for="file in item.AttachmentFiles.results" :key="file.__metadata.id">
                      <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc">{{ item.Title || file.FileName }}</p>
                      </div><!-- /.col-lg-5 -->
                      <div class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap">
                        <a :href="getFileUrl(file)" target="_blank" class="btn btn__secondary">Abrir</a>
                      </div><!-- /.col-lg-3 -->
                    </div>
                    <hr>
                    <div class="row col-sm-12">
                      <div class="row col-sm-12">
                        <span class="font-weight-bold">Sumário: </span>
                      </div>
                      <div class="row col-sm-12">
                        <span class="job__desc" v-html="item.Assunto"></span>
                      </div>
                    </div>
                  </div>
                </div><!-- /.row -->
              </div><!-- /.job-item -->
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.careers -->
    <section class="careers" v-if="query.assunto && jurisdictionItems.length">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">
                <router-link :to="{name: 'jurispendency_all'}">
                  {{ $tc('menus.jurisdiction') }}
                </router-link>
              </h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in jurisdictionItems" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="table-responsive">
                      <table border="1px" class="table">
                        <tr v-show="item.Entidade">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>Entidade: </span>'+item.Entidade"></td>
                        </tr>
                        <tr v-show="item.Benefici_x00e1_rio_x0020_do_x002">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>Beneficiário: </span>'+item.Benefici_x00e1_rio_x0020_do_x002"></td>
                        </tr>
                        <tr v-show="item.Contratante">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>Contratante: </span>'+item.Contratante"></td>
                        </tr>
                        <tr v-show="item.Contratado">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>Contratado: </span>'+item.Contratado"></td>
                        </tr>
                        <tr>
                          <td class="ta_table job__type">
                            <div class="job__meta">
                              <span class="font-weight-bold">Tipo:</span> &nbsp;&nbsp;&nbsp;&nbsp;
                              {{ item.Ac_x00f3_rd_x00e3_o_x0020_ou_x00 }}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="ta_table"><span class="font-weight-bold">Secção de origem:</span>
                            {{ item.Sec_x00e7__x00e3_o_x0020_de_x002 }}
                          </td>
                        </tr>
                        <tr v-show="item.Subsec_x00e7__x00e3_o">
                          <td class="ta_table"><span class="font-weight-bold">Subsecção:</span>
                            {{ item.Subsec_x00e7__x00e3_o }}
                          </td>
                        </tr>
                        <tr v-show="item.N_x00b0__x0020_do_x0020_Acord_x0">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>N. Acórdão: </span>'+item.N_x00b0__x0020_do_x0020_Acord_x0"></td>
                        </tr>
                        <tr v-show="item.N_x002e__x00ba__x0020_do_x0020_P">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>N. do Processo: </span>'+item.N_x002e__x00ba__x0020_do_x0020_P"></td>
                        </tr>
                        <tr v-show="item.Relator">
                          <td class="ta_table"
                              v-html="'<span class=\'font-weight-bold\'>Relator: </span>'+item.Relator"></td>
                        </tr>
                      </table>
                    </div>
                    <hr>
                    <div class="job__meta">
                      <span class="job__location">
                        {{ item.Data_x0020_do_x0020_Ac_x00f3_rd_ | date }}
                      </span>
                    </div>
                    <!--   <h4 class="job__title" v-html="item.Title || item.Objecto_x0020_de_x0020_Recurso"></h4> -->
                    <!--   <div class="job__meta">
                        <span class="job__location" v-html="'Relator: ' + item.Relator"></span>
                      </div> -->

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
                    <hr>
                    <div class="row col-sm-12" v-show="item.Sum_x00e1_rio">
                      <div class="row col-sm-12">
                        <span class="font-weight-bold">Sumário: </span>
                      </div>
                      <div class="row col-sm-12">
                        <span class="job__desc" v-html="item.Sum_x00e1_rio"></span>
                      </div>
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
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.careers -->
    <section class="portfolio-grid" v-if="query.assunto && publicationItems.length">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">
                <router-link :to="{name: 'publications'}">
                  {{ $tc('menus.publications') }}
                </router-link>
              </h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-sm-3 col-md-3 col-lg-2"
                   v-for="(file, index) in publicationItems" :key="index">
                <div class="portfolio-item">
                  <div class="portfolio__img" @click="zoomImage(file.File)">
                    <img :src="getFileThumb(file.File)" alt="portfolio img">
                  </div><!-- /.portfolio-img -->
                  <div class="portfolio__content">
                    <h4 class="portfolio__title">
                      <a :href="getFileUrl(file.File)" target="_blank" v-html="file.File.Name"></a>
                    </h4>
                    <div class="portfolio__cat">
                      <a :href="getFileUrl(file.File)" target="_blank">{{ file.Tipo }}</a>
                    </div><!-- /.portfolio-cat -->

                    <div class="portfolio__cat">
                      <a class="btn btn__secondary btn__link" :href="getFileUrl(file.File)" target="_blank">
                        <span>{{ $tc('read_more') }}</span>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </div><!-- /.portfolio-cat -->
                  </div><!-- /.portfolio-content -->
                </div><!-- /.portfolio-item -->
              </div><!-- /.col-lg-4 -->
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.portfolio layout 3  -->
    <section class="blog-grid pb-50" v-if="query.assunto && newsItems.length">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">
                <router-link :to="{name: 'blog'}">
                  {{ $tc('blog') }}
                </router-link>
              </h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
        <div class="row">
          <!-- Blog Item #1 -->
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="(article) in newsItems" :key="article.GUID">
            <div class="post-item">
              <div class="post__img">
                <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}">
                  <img :src="getImageUrl(article)" alt="blog image" class="cover__image">
                </router-link>
              </div><!-- /.blog-img -->
              <div class="post__body">
                <h4 class="post__title">
                  <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}">
                    {{ article.Title }}
                  </router-link>
                </h4>
                <div class="post__meta">
                  <span class="post__meta-date">{{
                      article.Data_x0020_Noticia || article.Created | date_with_week
                    }}</span>
                </div>
                <p class="post__desc" v-html="$options.filters.excerpt(article.Content)"></p>
                <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}"
                             class="btn btn__secondary btn__link">
                  <span>{{ $tc('read_more') }}</span>
                  <i class="icon-arrow-right"></i>
                </router-link>
              </div><!-- /.blog-content -->
            </div><!-- /.post-item -->
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
      <hr>
    </section><!-- /.blog Grid -->

    <section class="careers"
             v-if="!legisltationItems.length && !jurisdictionItems.length && !publicationItems.length && !newsItems.length">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="heading text-center mb-20">
              <h3 class="heading__title">Sem resultados...</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  name: "QLaw",
  components: { QBreadCrumb, QHeader, QFooter, CoolLightBox },
  methods: {
    getFileThumb(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + '/thumbs/' + item.ServerRelativeUrl + '.png' : '#'
    },
    zoomImage(file) {
      this.slideImages = [{
        src: this.getFileThumb(file),
        description: file.Name
      }]
      this.index = 0
    },
    clear() {
      this.query.assunto = ''
      this.$route.query.query = ''
    },
    fetchFromApi(url) {
      return this.$http.get(url).then((data) => {
        return data
      })
    },
    search() {
      this.$route.query.query = this.query.assunto

      Promise.all([
        this.fetchFromApi("legislacaoAll.json"),
        this.fetchFromApi("jurispudenciaAll.json"),
        this.fetchFromApi("publicacoes.json"),
        this.fetchFromApi("news.json")
      ]).then((datas) => {
        this.legisltationItems = datas[0].data.d.results.filter(file => (this.query.assunto === ''
            || file.Title?.toLowerCase().includes(this.query.assunto.toLowerCase())
            || file.Assunto?.toLowerCase().includes(this.query.assunto.toLowerCase()))
        )

        this.jurisdictionItems = datas[1].data.d.results
            .filter(file => (this.query.assunto === ''
                || file.Assunto.results.find(i => i?.toLowerCase().includes(this.query.assunto.toLowerCase()))
                || file.Relator?.toLowerCase().includes(this.query.assunto.toLowerCase())
                || file.N_x002e__x00ba__x0020_do_x0020_P?.toLowerCase().includes(this.query.assunto.toLowerCase())
                || file.N_x00b0__x0020_do_x0020_Acord_x0?.toLowerCase().includes(this.query.assunto.toLowerCase()))
            )


        this.publicationItems = datas[2].data.d.results.filter(i => i.Folder.Files && i.Folder.Files.results?.length
            && !i.Tipo.toLowerCase().trim().includes('Relatórios de Auditorias às Contas do TA'.toLowerCase())
        ).flatMap((item) => {
          if (item.Folder.Files) {
            return item.Folder.Files.results.flatMap((file) => {
              return {
                Tipo: item.Tipo,
                Title: item.Title || item.Folder.Name,
                File: file
              }
            })
          }
        }).filter(file => (this.query.assunto === ''
            || file.File.Name?.toLowerCase().includes(this.query.assunto.toLowerCase())
            || file.Tipo?.toLowerCase().includes(this.query.assunto.toLowerCase())
            || file.Title?.toLowerCase().includes(this.query.assunto.toLowerCase()))
        ).slice(0, 10)


        this.newsItems = datas[3].data.d.results.sort((item, next) => {
          return new Date(next.Data_x0020_Noticia || next.Created) - new Date(item.Data_x0020_Noticia || item.Created);
        }).filter(article =>
            (this.query.assunto === '' || article?.Title?.toLowerCase().includes(this.query.assunto.toLowerCase()))
        ).slice(0, 10)


      }).catch((error) => {
        console.log(error)
      })
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl : '#'
    },
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    },
  },
  data() {
    return {
      index: null,
      slideImages: [],

      legisltationItems: [],
      jurisdictionItems: [],
      publicationItems: [],
      newsItems: [],
      query: {
        assunto: ''
      },

    }
  },
  mounted() {
    window.mainExecution()

    this.query.assunto = this.$route.query.query

    this.search()
  }
}
</script>

<style scoped>

</style>
