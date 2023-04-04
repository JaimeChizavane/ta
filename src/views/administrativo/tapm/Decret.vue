<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <sub-menu />
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
                <!-- <div class="col-md-3 col-sm-6">
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
                </div> -->
                <div class="col-md-3 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.assunto"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por assunto..."
                  />
                </div>
                <div class="col-md-3 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.br"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por n. do BR..."
                  />
                </div>
                <div class="col-md-3 col-sm-6">
                  <input
                    @keyup="search"
                    v-model="query.diploma"
                    type="text"
                    class="form-control bordered-box mb-20"
                    placeholder="Procurar por n. da legislação..."
                  />
                </div>
                <div class="col-md-3 col-sm-6">
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
                    {{ data.item.Sum_x00e1_rio | excerpt }}
                  </span>
                </template>
                <!--  <template v-slot:cell(Área_de_Apoio)="data">
                  <span
                    v-for="(area, areadIndex) in data.item
                      .OData__x00c1_rea_x0020_de_x0020_Apoio.results"
                    :key="areadIndex"
                  >
                    {{ area }}
                  </span>
                </template> -->
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
      </div>
      <!-- /.container -->
    </section>
    <q-footer />
  </div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';
import SubMenu from '@/views/administrativo/tapm/components/SubMenu';

export default {
  name: 'QLaw',
  components: { SubMenu, QBreadCrumb, QHeader, QFooter },
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
              file.Data_x0020_do_x0020_BR?.toLowerCase().includes(
                this.query.data.toLowerCase()
              ))
        );

        console.log(this.items, this.query.area);
      } else {
        this.items = this.allItems;
      }
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
          key: 'Tipo_x0020_de_x0020_Diploma',
          label: 'Tipo de Legislação',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'Title',
          label: 'Número do BR',
          sortable: true,
          thClass: 'btn__primary',
        },
        {
          key: 'N_x00fa_mero_x0020_de_x0020_Dipl',
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
        /*  {
          key: "Área de Apoio",
          label: "Área de Apoio",
          sortable: true,
          thClass: "btn__primary",
        }, */

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
  mounted() {
    window.mainExecution();

    this.$http
      .get('tapmlaw.json')
      .then((data) => {
        this.allItems = data.data.d.results.filter(
          (item) => item?.Tipo_x0020_de_x0020_Diploma === 'Decreto'
        );
        this.items = this.allItems
          .sort(
            (a, b) =>
              new Date(a.Data_x0020_do_x0020_BR) -
              new Date(b.Data_x0020_do_x0020_BR)
          )
          .reverse();
        // this.searcheable = this.items.flatMap((item) => {
        //   if (item.AttachmentFiles.results) {
        //     return item.AttachmentFiles.results.flatMap((file) => {
        //       return {
        //         Tipo: item.Tipo_x0020_de_x0020_Legisla_x00e,
        //         Area_x0020_de_x0020_Apoio: item.Area_x0020_de_x0020_Apoio,
        //         Tipo_x0020_de_x0020_Legisla_x00e: item.Tipo_x0020_de_x0020_Legisla_x00e,
        //         OData__x00c1_rea_x0020_de_x0020_Apoio_: item.OData__x00c1_rea_x0020_de_x0020_Apoio_,
        //         OData__x00c1_rea_x0020_de_x0020_Apoio_0: item.OData__x00c1_rea_x0020_de_x0020_Apoio_0,
        //         Title: item.Title,
        //         Descricao: item.Descricao,
        //         Assunto: item.Assunto,
        //         N_x00fa_meroDeBR: item.N_x00fa_meroDeBR,
        //         N_x00fa_meroDaLegisla_x00e7__x00: item.N_x00fa_meroDaLegisla_x00e7__x00,
        //         Data_x0020_do_x0020_BR: item.Data_x0020_do_x0020_BR,
        //         Legisla_x00e7__x00e3_o_x0020_Ger: item.Legisla_x00e7__x00e3_o_x0020_Ger,
        //         Cart_x00f3_rio_x0020_da_x0020_3a: item.Cart_x00f3_rio_x0020_da_x0020_3a,
        //         File: file
        //       }
        //     })
        //   }
        // })
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
