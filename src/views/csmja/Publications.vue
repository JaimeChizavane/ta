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
                            class="col-sm-4 col-md-4 col-lg-3"
                            v-for="file in faq.Files.results"
                            :key="file.UniqueId"
                          >
                            <div class="portfolio-item">
                              <div
                                class="portfolio__img"
                                @click="zoomImage(file)"
                              >
                                <img
                                  v-lazy="getFileThumb(file)"
                                  alt="portfolio img"
                                />
                              </div>
                              <!-- /.portfolio-img -->
                              <div class="portfolio__content">
                                <h4 class="portfolio__title">
                                  <a
                                    :href="getFileUrl(file)"
                                    target="_blank"
                                    v-html="file.Name"
                                  ></a>
                                </h4>
                                <div class="portfolio__cat">
                                  <a :href="getFileUrl(file)" target="_blank"
                                    ><i class="icon-download"></i>
                                    {{ file.Folder.Name }}</a
                                  >
                                </div>
                                <!-- /.portfolio-cat -->
                                <div class="portfolio__cat">
                                  <a
                                    class="btn btn__secondary btn__link"
                                    :href="getFileUrl(file)"
                                    target="_blank"
                                  >
                                    <span>{{ $tc("read_more") }}</span>
                                    <i class="icon-arrow-right"></i>
                                  </a>
                                </div>
                                <!-- /.portfolio-cat -->
                              </div>
                              <!-- /.portfolio-content -->
                              <!-- /.portfolio-item -->
                            </div>
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
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import SubMenu from "@/views/csmja/components/SubMenu";

import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "QStrategicPlan",
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
        : "#";
    },
    getFileThumb(item) {
      return item && item.ServerRelativeUrl
        ? process.env.VUE_APP_ROOT_DOCS +
            "/thumbs/" +
            item.ServerRelativeUrl +
            ".png"
        : "#";
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
      query: "",
    };
  },
  mounted() {
    window.mainExecution();

    this.$http
      .get("csmjapublicacoes.json")
      .then((data) => {
        this.history = data.data.d.results
          .filter((i) => i.Name !== "Forms")
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
