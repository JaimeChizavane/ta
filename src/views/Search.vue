<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
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
                    <input v-model="query.search" type="text" class="form-control bordered-box"
                      placeholder="Escreva o que procurar e pise em ENTER" @keyup="search">
                  </div>
                </div>
              </form>
            </div>
          </div><!-- /.col-xl-6 -->
        </div>
      </div>
    </section>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <v-card v-show="query.search">
              <v-card-title>
                Resultado da legilação

              </v-card-title>
              <v-card-text>
                <v-data-table :headers="legislacao.headers" :items="legislacao.items" :search="query.search">
                  <template v-slot:item.Sumario="{item}">
                  <span class="job__location">
                    {{ item.sumario | excerpt }}
                  </span>
                </template>
                  <template v-slot:item.Document="{ item }">
                    <div
                    class="col-sm-12 col-md-12 col-lg-8"
                    v-if="item.AttachmentFiles.results.length"
                  >
                    <div
                      class="row mb-5"
                      v-for="(file, index) in item.AttachmentFiles.results"
                      :key="'file' + index"
                    >
                      <!-- /.col-lg-5 -->
                      <div
                        class="
                          align-items-center
                          justify-content-end
                          btn-wrap
                        "
                      >
                        <a
                          :href="getFileUrl(file)"
                          target="_blank"
                          class="btn btn__secondary"
                          >Abrir</a
                        >
                      </div>
                      <!-- /.col-lg-3 -->
                    </div>
                    <hr />
                  </div>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>

            <v-card v-show="query.search" class="mt-20">
              <v-card-title>
                Resultado da jurisprudência

              </v-card-title>
              <v-card-text>
                <v-data-table :headers="jurisprudencia.headers" :items="jurisprudencia.items" :search="query.search">
                </v-data-table>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </section>
    <v-container>


      <v-row>

      </v-row>
      <!-- /.container -->
    </v-container>
    <!-- /.careers -->
    <q-footer />
  </div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';

export default {
  name: 'QLaw',
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    clear() {
      this.query.search = '';
      this.query.br = '';
      this.query.diploma = '';
      this.query.data = '';
      this.query.area = '';

      this.search();
    },
    searchLegislacao() {
      /*  if (
         this.query.assunto ||
         this.query.br ||
         this.query.diploma ||
         this.query.data ||
         this.query.area
       ) {
         this.legislacao.items = this.legislacao.data.filter(
           (file) =>
             (this.query.assunto === '' ||
               file.Title?.toLowerCase().includes(
                 this.query.assunto.toLowerCase()
               ) ||
               file.Assunto?.toLowerCase().includes(
                 this.query.assunto.toLowerCase()
               )) &&
             (this.query.br === '' ||
               file.N_x00fa_mero_x0020_do_x0020_BR?.toLowerCase().includes(
                 this.query.br.toLowerCase()
               )) &&
             (this.query.area === '' ||
               file.OData__x00c1_rea_x0020_de_x0020_Apoio_0.results?.find((x) =>
                 x.toLowerCase().includes(this.query.area.toLowerCase())
               ) ||
               file.OData__x00c1_rea_x0020_de_x0020_Apoio_?.toLowerCase().includes(
                 this.query.area.toLowerCase()
               )) &&
             (this.query.diploma === '' ||
               file.N_x00fa_meroDaLegisla_x00e7__x00?.toLowerCase().includes(
                 this.query.diploma.toLowerCase()
               )) &&
             (this.query.data === '' ||
               this.compareDate(file.Data_x0020_do_x0020_BR, this.query.data))
         );
       } else {
         this.legislacao.items = this.legislacao.data;
       } */
    },
    search() {

    },
    compareDate(a, b) {
      let dateA = new Date(a).toDateString();
      let dateB = new Date(b).toDateString();

      return dateA.toLowerCase().includes(dateB.toLowerCase());
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : '#';
    },
    initLegislcacao() {
      this.$http
        .get('legislacaoAll.json')
        .then((data) => {
          this.legislacao.data = data.data.d.results;

          this.legislacao.items = this.legislacao.data
            .sort(
              (a, b) =>
                new Date(a.Data_x0020_do_x0020_BR) -
                new Date(b.Data_x0020_do_x0020_BR)
            )
            .reverse();

        })
        .catch((error) => {
          console.log(error);
        });

      this.$http
        .get('legislacaoAll_bak.json')
        .then((data) => {
          this.allItemsBak = data.data.d.results;


          if (this.legislacao.data.length < 10) {

            this.legislacao.data = this.allItemsBak;
            this.legislacao.items = this.legislacao.data
              .sort(
                (a, b) =>
                  new Date(a.Data_x0020_do_x0020_BR) -
                  new Date(b.Data_x0020_do_x0020_BR)
              )
              .reverse();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initJurisprudencia() {
      this.$http
        .get('jurispudenciaAll.json')
        .then((data) => {
          this.jurisprudencia.data = data.data.d.results.map((f) => {
            return {
              seccao_origem: f.Sec_x00e7__x00e3_o_x0020_de_x002,
              n_processo: f.Numero_x0020_Processo
                ? f.Numero_x0020_Processo
                : f.N_x002e__x00ba__x0020_do_x0020_P
                  ? f.N_x002e__x00ba__x0020_do_x0020_P
                  : f.NProcesso,
              n_acordao: f.OData__N_x00b0__x0020_do_x0020_Acord_x
                ? f.OData__N_x00b0__x0020_do_x0020_Acord_x
                : f.NAcordao
                  ? f.NAcordao
                  : f.N_x00b0__x0020_do_x0020_Acord_x0,
              data_acordao: f.Data_x0020_do_x0020_Ac_x00f3_rd_,
              relator: f.OData__Relator ? f.OData__Relator : f.Relator,
              assunto: f.Assunto.results,
              sumario: f.Sum_x00e1_rio,
              documento: f.AttachmentFiles.results,
              tipo_acordao: f.Ac_x00f3_rd_x00e3_o_x0020_ou_x00,
              subseccao: f.Subsec_x00e7__x00e3_o,
              Created: f.Created,
            };
          });

          this.jurisprudencia.items = this.jurisprudencia.data
            .sort((a, b) => new Date(a.Created) - new Date(b.Created))
            .reverse();

        })
        .catch((error) => {
          console.log(error);
        });

      this.$http
        .get('jurispudenciaAll_bak.json')
        .then((data) => {
          this.allItemsBak = data.data.d.results.map((f) => {
            return {
              seccao_origem: f.Sec_x00e7__x00e3_o_x0020_de_x002,
              n_processo: f.Numero_x0020_Processo
                ? f.Numero_x0020_Processo
                : f.N_x002e__x00ba__x0020_do_x0020_P
                  ? f.N_x002e__x00ba__x0020_do_x0020_P
                  : f.NProcesso,
              n_acordao: f.OData__N_x00b0__x0020_do_x0020_Acord_x
                ? f.OData__N_x00b0__x0020_do_x0020_Acord_x
                : f.NAcordao
                  ? f.NAcordao
                  : f.N_x00b0__x0020_do_x0020_Acord_x0,
              data_acordao: f.Data_x0020_do_x0020_Ac_x00f3_rd_,
              relator: f.OData__Relator ? f.OData__Relator : f.Relator,
              assunto: f.Assunto.results,
              sumario: f.Sum_x00e1_rio,
              documento: f.AttachmentFiles.results,
              tipo_acordao: f.Ac_x00f3_rd_x00e3_o_x0020_ou_x00,
              subseccao: f.Subsec_x00e7__x00e3_o,
              Created: f.Created,
            };
          });


          if (this.jurisprudencia.data.length < 10) {

            this.jurisprudencia.data = this.allItemsBak;
            this.jurisprudencia.items = this.jurisprudencia.data
              .sort(
                (a, b) =>
                  new Date(a.Data_x0020_do_x0020_BR) -
                  new Date(b.Data_x0020_do_x0020_BR)
              )
              .reverse();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      legislacao: {
        headers: [
          {
            value: 'Tipo_x0020_de_x0020_Legisla_x00e',
            text: 'Tipo de Legislação',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'N_x00fa_mero_x0020_do_x0020_BR',
            text: 'Número do BR',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'N_x00fa_meroDaLegisla_x00e7__x00',
            text: 'Número de Legislação',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Legisla_x00e7__x00e3_o_x0020_Ger',
            text: 'Legislação',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Data_do_BR',
            text: 'Data do BR',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Área de Apoio',
            text: 'Área de Apoio',
            sortable: true,
            thClass: 'btn__primary',
          },

          {
            value: 'Sumario',
            text: 'Sumário',
            sortable: true,
            thClass: 'btn__primary col-3',
          },
          {
            value: 'Document',
            text: 'Documento',
            sortable: true,
            thClass: 'btn__primary',
          },
        ],
        items: [],
        data: [],
      },
      jurisprudencia: {
        headers: [
          {
            value: 'Tipo_x0020_de_x0020_Legisla_x00e',
            text: 'Tipo de Legislação',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'seccao_origem',
            text: 'Secção de origem',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'n_acordao',
            text: 'N. Acórdão',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'n_processo',
            text: 'N. do Processo',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Data_do_Acórdão',
            text: 'Data do Acórdão',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'relator',
            text: 'Relator',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Assunto',
            text: 'Assunto',
            sortable: true,
            thClass: 'btn__primary',
          },
          {
            value: 'Sumario',
            text: 'Sumário',
            sortable: true,
            thClass: 'btn__primary col-3',
          },
          {
            value: 'Document',
            text: 'Documento',
            sortable: true,
            thClass: 'btn__primary',
          },
        ],
        items: [],
        data: [],
      },
      allItems: [],
      allItemsBak: [],
      items: [],
      areas: [],
      filtered: [],
      searcheable: [],
      query: {
        search: '',
        assunto: '',
        br: '',
        diploma: '',
        data: '',
        area: '',
      },
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: 'Tipo_x0020_de_x0020_Legisla_x00e',
          label: 'Tipo de Legislação',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'N_x00fa_mero_x0020_do_x0020_BR',
          label: 'Número do BR',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'N_x00fa_meroDaLegisla_x00e7__x00',
          label: 'Número de Legislação',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Legisla_x00e7__x00e3_o_x0020_Ger',
          label: 'Legislação',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Data_do_BR',
          label: 'Data do BR',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Área de Apoio',
          label: 'Área de Apoio',
          sortable: true,
          thClass: 'btn__primary',
        },

        {
          key: 'Sumario',
          label: 'Sumário',
          sortable: true,
          thClass: 'btn__primary col-3',
        },
        {
          key: 'Document',
          label: 'Documento',
          sortable: true,
          thClass: 'btn__primary',
        },
      ],
    };
  },
  created() { },
  mounted() {
    window.mainExecution();
    this.initLegislcacao();
    this.initJurisprudencia();
    this.query.search = this.$route.query.query;

  }
};
</script>

<style scoped></style>
