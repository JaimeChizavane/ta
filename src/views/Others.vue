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
                    v-model="query.area"
                  >
                    <option value="">Todas Áreas</option>
                    <option v-for="tipo in areas" :key="tipo.Id">
                      {{ tipo.Title }}</option
                    >
                  </select>
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.assunto"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por assunto..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.br"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por n. do BR..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.diploma"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por n. da legislação..."
                  />
                </div>
                <div class="col-md-4 col-sm-6">
                  <input
                    @change="search"
                    v-model="query.data"
                    type="date"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por data do BR..."
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
                <template v-slot:cell(Data_do_BR)="data">
                  <span class="job__location">
                    {{ data.item.Data_x0020_do_x0020_BR | date }}
                  </span>
                </template>
                <template v-slot:cell(Sumario)="data">
                  <span class="job__location">
                    {{ data.item.Assunto | excerpt }}
                  </span>
                </template>
                <template v-slot:cell(Área_de_Apoio)="data">
                  <span
                    v-for="(area, areadIndex) in data.item
                      .OData__x00c1_rea_x0020_de_x0020_Apoio_0.results"
                    :key="areadIndex"
                  >
                    {{ area }}
                  </span>
                </template>
                <template v-slot:cell(Document)="data">
                  <div
                    class="col-sm-12 col-md-12 col-lg-8"
                    v-if="data.item.AttachmentFiles.results.length"
                  >
                    <div
                      class="row mb-5"
                      v-for="(file, index) in data.item.AttachmentFiles.results"
                      :key="'file' + index"
                    >
                      <!--  <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc" v-html="file.FileName"></p>
                      </div> -->
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

export default {
  name: 'QLaw',
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    clear() {
      this.query.assunto = '';
      this.query.br = '';
      this.query.diploma = '';
      this.query.data = '';
      this.query.area = '';

      this.search();
    },
    search() {
      if (
        this.query.assunto ||
        this.query.br ||
        this.query.diploma ||
        this.query.data ||
        this.query.area
      ) {
        this.items = this.allItems.filter(
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
        this.items = this.allItems;
      }
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
  },
  data() {
    return {
      allItems: [],
      allItemsBak: [],
      items: [],
      areas: [],
      filtered: [],
      searcheable: [],
      query: {
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
  created() {},
  mounted() {
    window.mainExecution();

    this.$http
      .get('legislacaoAll.json')
      .then((data) => {
        this.allItems = data.data.d.results;
        this.allItems = this.allItems.filter(
          (l) =>
            !(
              l?.N_x00fa_meroDaLegisla_x00e7__x00 === '9/2018' &&
              (l?.N_x00fa_mero_x0020_do_x0020_BR == null ||
                l?.N_x00fa_mero_x0020_do_x0020_BR == '')
            )
        );
        this.items = this.allItems
          .sort(
            (a, b) =>
              new Date(a.Data_x0020_do_x0020_BR) -
              new Date(b.Data_x0020_do_x0020_BR)
          )
          .reverse();
        console.log('all' + this.allItems.length);
      })
      .catch((error) => {
        console.log(error);
      });

    this.$http
      .get('legislacaoAll_bak.json')
      .then((data) => {
        this.allItemsBak = data.data.d.results;
        this.allItemsBak = this.allItemsBak.filter(
          (l) =>
            !(
              l?.N_x00fa_meroDaLegisla_x00e7__x00 === '9/2018' &&
              (l?.N_x00fa_mero_x0020_do_x0020_BR == null ||
                l?.N_x00fa_mero_x0020_do_x0020_BR == '')
            )
        );
        console.log('allBak' + this.allItemsBak.length);
        if (this.allItems.length < 10) {
          console.log('change to backup');
          this.allItems = this.allItemsBak;
          this.items = this.allItems
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

    this.$http
      .get('areas.json')
      .then((data) => {
        this.areas = data.data.d.results;

        // window.mainExecution()
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
