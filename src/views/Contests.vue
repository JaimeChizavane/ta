@@ -0,0 +1,104 @@
<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-3">
            <div class="pagetitle__form mb-50">
              <input
                @keyup="search"
                v-model="query"
                type="text"
                class="form-control bordered-box"
                placeholder="Procurar..."
              />
            </div>
          </div>
          <!-- /.col-xl-6 -->
        </div>
        <div class="container">
          <div class="row" id="accordion">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div
                class="accordion-item"
                v-for="(faq, index) in items"
                :key="index"
              >
                <div
                  class="accordion__header"
                  data-toggle="collapse"
                  :data-target="'#collapse' + index"
                >
                  <a class="accordion__title" @click.prevent>{{ faq.Tipo }}</a>
                </div>
                <div
                  :id="'collapse' + index"
                  class="collapse"
                  data-parent="#accordion"
                >
                  <div class="accordion__body">
                    <div class="row">
                      <div class="col-12">
                        <div class="jobs-container">
                          <!-- career item #1 -->
                          <div
                            class="job-item"
                            v-for="(item, index) in faq.Folder.Files.results"
                            :key="index"
                          >
                            <div class="row">
                              <div class="col-sm-12 col-md-12 col-lg-4">
                                <div class="job__meta">
                                  <span
                                    class="job__type"
                                    v-show="item.TimeLastModified"
                                  >
                                    {{ item.TimeLastModified | date }}
                                  </span>
                                </div>
                                <h4 class="job__title">
                                  {{ item.Name || 'Sem titulo' }}
                                </h4>
                              </div>
                              <!-- /.col-lg-4 -->
                              <div class="col-sm-12 col-md-12 col-lg-5">
                                <p class="job__desc" v-html="item.Name"></p>
                              </div>
                              <!-- /.col-lg-5 -->
                              <div
                                class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap"
                              >
                                <a
                                  :href="getFileUrl(item)"
                                  target="_blank"
                                  class="btn btn__secondary"
                                  >Abrir</a
                                >
                              </div>
                              <!-- /.col-lg-3 -->
                            </div>
                            <!-- /.row -->
                          </div>
                          <!-- /.job-item -->
                        </div>
                      </div>
                      <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                  </div>
                  <!-- /.accordion-item-body -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(item, index) in items" :key="index">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <div class="job__meta">
                      <span class="job__type">{{ item.Tipo }}</span>
                    </div>
                    <h4 class="job__title">{{ item.Tipo }}</h4>
                  </div>
                  <!-- /.col-lg-4 -->
                  <div class="clo-sm-12 col-md-12 col-lg-8">
                    <div
                      class="row"
                      v-for="(file, index) in item.Folder.Files.results"
                      :key="index + 'File'"
                    >
                      <div class="col-sm-12 col-md-12 col-lg-9">
                        <p class="job__desc" v-html="file.Name"></p>
                      </div>
                      <!-- /.col-lg-5 -->
                      <div
                        class="col-sm-12 col-md-12 col-lg-3 d-flex align-items-center justify-content-end btn-wrap mb-2"
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
                  </div>
                  <!--                  <div class="col-sm-12 col-md-12 col-lg-8" v-if="item.Folder">-->
                  <!--                    <a target="_blank" :href="getFileUrl(file)" v-for="(file, index) in item.Folder.Files.results"-->
                  <!--                       :key="index">-->
                  <!--                      <p class="job__desc mb-20">{{ file.Name }}</p>-->
                  <!--                    </a>-->
                  <!--                  </div>&lt;!&ndash; /.col-lg-5 &ndash;&gt;-->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.job-item -->
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
  name: 'QAboutUs',
  components: { QBreadCrumb, QHeader, QFooter },
  methods: {
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : '#';
    },
    search() {
      if (this.query) {
        this.items = this.allItems
          .filter(
            (item) =>
              item.Tipo && item.Folder.Files && item.Folder.Files.results.length
          )
          .filter(
            (item) =>
              item.Folder.Name.toLowerCase().includes(
                this.query.toLowerCase()
              ) ||
              item.Tipo.toLowerCase().includes(this.query.toLowerCase()) ||
              item.Folder.Files.results.find((i) =>
                i.Name.toLowerCase().includes(this.query.toLowerCase())
              )
          );
      } else {
        this.items = this.allItems.filter((item) => item.Folder.Files);
      }
    },
  },
  data() {
    return {
      items: [],
      allItems: [],
      query: '',
    };
  },
  mounted() {
    window.mainExecution();

    this.$http
      .get('concursos.json')
      .then((data) => {
        this.allItems = data.data.d.results;
        this.items = this.allItems.filter((item) => item.Folder.Files);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
