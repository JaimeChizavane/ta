<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />

    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">{{ $tc($route.meta.display) }}</h3>
            </div>
            <!-- /.heading -->
          </div>
          <!-- /.col-lg-10 -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-12">
            <div class="pagetitle__form mb-50">
              <label class="offset-11">
                <button @click="clear">
                  <i class="icon-query"></i> Limpar
                </button>
              </label>
              <div class="form-row">
                <div class="col-md-4 col-sm-6">
                  <select
                    class="form-control bordered-box mb-20"
                    @change="search"
                    v-model="query.assunto"
                  >
                    <option value="">Todos assuntos</option>
                    <option v-for="assunto in assuntos" :key="assunto.Id">
                      {{ assunto.Title }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4 col-sm-6">
                  <select
                    class="form-control bordered-box mb-20"
                    @change="search"
                    v-model="query.tipo"
                  >
                    <option value="">Todos tipos de jurisp.</option>
                    <option v-for="tipo in tipos" :key="tipo.Id">
                      {{ tipo.Title }}
                    </option>
                  </select>
                </div>

                <!--  <div class="col-md-4 col-sm-6">
                  <select
                    class="form-control bordered-box mb-20"
                    @change="search"
                    v-model="query.seccao_origem"
                  >
                    <option value="">Todas Secções de Origem</option>
                    <option v-for="tipo in areas" :key="tipo.Id">
                      {{ tipo.Title }}
                    </option>
                  </select>
                </div> -->

                <!--  <div
                  class="col-md-2 col-sm-6"
                  v-show="query.seccao_origem === '3a Secção'"
                >
                  <select
                    class="form-control bordered-box mb-20"
                    @change="search"
                    v-model="query.subseccao_origem"
                  >
                    <option value="">Todas Subsecções de Origem</option>
                    <option v-for="(tipo, index) in subsecs" :key="index">
                      {{ tipo }}
                    </option>
                  </select>
                </div> -->
                <div class="col-md-4 col-sm-6">
                  <input
                    @change="search"
                    v-model="query.data"
                    type="date"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por data do acordão..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.acordao"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por acordão/despacho..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.processo"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por n. do processo..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.relator"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por relator..."
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-xl-6 -->
        </div>
        <div class="row">
          <div class="col-12">
            <div class="jobs-container" v-if="items.length">
              <b-pagination
                v-model="currentPage"
                :total-rows="items.length"
                :per-page="perPage"
                striped
                hover
                aria-controls="my-table"
                align="center"
              ></b-pagination>
              <b-table
                id="my-table"
                :items="items"
                :per-page="perPage"
                :current-page="currentPage"
                :fields="fields"
                :small="true"
                :striped="true"
                :hover="true"
                :responsive="true"
                :foot-clone="true"
              >
                <template v-slot:cell(Data_do_Acórdão)="data">
                  <span class="job__location">
                    {{ data.item.data_acordao | date }}
                  </span>
                </template>
                <template v-slot:cell(Sumario)="data">
                  <span class="job__location">
                    {{ data.item.sumario | excerpt }}
                  </span>
                </template>
                <template v-slot:cell(Assunto)="data">
                  <div
                    class="job__meta"
                    v-for="(subject, index) in data.item.assunto"
                    :key="'subject' + index"
                  >
                    <span class="job__location">
                      {{ subject }}
                    </span>
                  </div>
                </template>
                <template v-slot:cell(Document)="data">
                  <div
                    class="col-sm-12 col-md-12 col-lg-8"
                    v-if="data.item.documento.length"
                  >
                    <div
                      class="row mb-5"
                      v-for="(file, index) in data.item.documento"
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
              </b-table>
            </div>

            <div class="heading text-center mb-20" v-else>
              <h3 class="heading__title">Sem resultados...</h3>
            </div>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.careers -->
    <q-footer />
  </div>
</template>
<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';
//import Datatable from "@/components/Datatable/Datatable.vue";

export default {
  name: 'QAboutUs',
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    clear() {
      this.query = {
        assunto: '',
        tipo: '',
        processo: '',
        acordao: '',
        pessoas: '',
        relator: '',
        data: '',
        seccao_origem: '',
        subseccao_origem: '',
      };

      this.search();
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : '#';
    },
    search() {
      if (
        this.query.assunto ||
        this.query.tipo ||
        this.query.relator ||
        this.query.processo ||
        this.query.acordao ||
        this.query.data ||
        this.query.seccao_origem
      ) {
        this.items = this.allItems.filter(
          (file) =>
            (this.query.assunto === '' ||
              file.assunto.find((i) =>
                i?.toLowerCase().includes(this.query.assunto.toLowerCase())
              )) &&
            (this.query.relator === '' ||
              file.relator
                ?.toLowerCase()
                .includes(this.query.relator.toLowerCase())) &&
            (this.query.data === '' ||
              file.data_acordao
                ?.toLowerCase()
                .includes(this.query.data.toLowerCase())) &&
            (this.query.tipo === '' ||
              this.query.tipo
                .toLowerCase()
                .includes(file.tipo_acordao?.toLowerCase())) &&
            (this.query.seccao_origem === '' ||
              this.query.seccao_origem
                .toLowerCase()
                .includes(file.seccao_origem?.toLowerCase())) &&
            (this.query.subseccao_origem === '' ||
              this.query.subseccao_origem
                .toLowerCase()
                .includes(file.subseccao_origem?.toLowerCase())) &&
            (this.query.processo === '' ||
              file.n_processo
                ?.toLowerCase()
                .includes(this.query.processo.toLowerCase())) &&
            (this.query.acordao === '' ||
              file.n_acordao
                ?.toLowerCase()
                .includes(this.query.acordao.toLowerCase()))
        );
      } else {
        this.items = this.allItems;
      }
    },
  },
  data() {
    return {
      items: [],
      allItems: [],
      assuntos: [],
      areas: [],
      tipos: [],
      subsecs: ['1.ª Subsecção', '2.ª Subsecção'],
      query: {
        assunto: '',
        tipo: '',
        processo: '',
        acordao: '',
        pessoas: '',
        relator: '',
        data: '',
        seccao_origem: '',
        subseccao_origem: '',
      },
      filtered: [],
      searcheable: [],
      perPage: 10,
      currentPage: 1,
      fields: [
        /* {
          key: "Ac_x00f3_rd_x00e3_o_x0020_ou_x00",
          label: "Tipo",
          sortable: true,
          thClasss: "btn__primary",
        }, */
        {
          key: 'seccao_origem',
          label: 'Secção de origem',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'n_acordao',
          label: 'N. Acórdão',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'n_processo',
          label: 'N. do Processo',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Data_do_Acórdão',
          label: 'Data do Acórdão',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'relator',
          label: 'Relator',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Assunto',
          label: 'Assunto',
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
        '',
      ],
    };
  },
  mounted() {
    this.$http
      .get('jurispudencia1secao.json')
      .then((data) => {
        this.allItems = data.data.d.results.map((f) => {
          return {
            seccao_origem: f.Sec_x00e7__x00e3_o_x0020_de_x002,
            n_processo: f.Numero_x0020_Processo
              ? f.Numero_x0020_Processo
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
        this.items = this.allItems
          .sort((a, b) => new Date(a.Created) - new Date(b.Created))
          .reverse();
        // this.searcheable = this.items.flatMap(item => item.Folders.results.flatMap(s => s.Files.results))
        // this.searcheable = this.items
        console.log('tamanho' + this.items.length);
        console.log(data.data.d.results[0]);
        console.log(this.items[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get('assuntos.json')
      .then((data) => {
        this.assuntos = data.data.d.results;

        // window.mainExecution()
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get('tipos.json')
      .then((data) => {
        this.tipos = data.data.d.results;

        // window.mainExecution()
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get('seccoes.json')
      .then((data) => {
        this.areas = data.data.d.results;

        // window.mainExecution()
      })
      .catch((error) => {
        console.log(error);
      });

    window.mainExecution();
  },
};
</script>

<style scoped></style>
