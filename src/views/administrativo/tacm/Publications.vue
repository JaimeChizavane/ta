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
                v-for="(faq, index) in history"
                :key="index"
              >
                <div
                  class="accordion__header"
                  data-toggle="collapse"
                  :data-target="'#collapse' + index"
                >
                  <a class="accordion__title" @click.prevent>{{ faq.Name }}</a>
                </div>
                <!-- /.accordion-item-header -->
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
                            v-for="(item, index) in faq.Files.results"
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
                                <!--   <h4 class="job__title">{{ item.Name || 'Sem titulo' }}</h4> -->
                              </div>
                              <!-- /.col-lg-4 -->
                              <div class="col-sm-12 col-md-12 col-lg-5">
                                <h4 class="job__title" v-html="item.Name"></h4>
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
                    <!-- /.row -->
                  </div>
                  <!-- /.accordion-item-body -->
                </div>
              </div>
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /.careers -->
    <q-footer />
    <CoolLightBox :items="slideImages" :index="index" @close="index = null">
    </CoolLightBox>
  </div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';
import SubMenu from '@/views/aduaneiro/tadcm/components/SubMenu';

import CoolLightBox from 'vue-cool-lightbox';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

export default {
  name: 'QStrategicPlan',
  components: { QBreadCrumb, QHeader, QFooter, CoolLightBox, SubMenu },
  methods: {
    search() {
      if (this.query) {
        this.history = this.allItems.filter(
          (item) =>
            item.Name?.toLowerCase().includes(this.query.toLowerCase()) ||
            item.Files.results.find((f) =>
              f.Name?.toLowerCase().includes(this.query.toLowerCase())
            )
        );
      } else {
        this.history = this.allItems;
      }
    },
    getFileUrl(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS + item.ServerRelativeUrl
        : '#';
    },
    getFileThumb(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS +
            '/thumbs/' +
            item.ServerRelativeUrl +
            '.png'
        : '#';
    },
    zoomImage(file) {
      this.slideImages = [
        {
          src: this.getFileThumb(file),
          description: file.Name,
        },
      ];
      this.index = 0;
    },
    filterImages(name = null) {
      this.activeFilter = name;

      if (name) {
        this.items = this.allItems;
      } else {
        this.items = this.allItems;
      }
    },
  },
  data() {
    return {
      allItems: [],
      history: [],
      query: '',
    };
  },
  mounted() {
    window.mainExecution();

    this.$http
      .get('tadcm_publicacao.json')
      .then((data) => {
        this.history = data.data.d.results
          .filter((i) => i.Name !== 'Forms')
          .sort((a, b) => a.Name.localeCompare(b.Name));

        this.history.forEach((item) => {
          item.Files.results = item.Files.results
            .sort((a, b) => a.TimeLastModified - b.TimeLastModified)
            .reverse();
          this.allItems.push(item);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>
