<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="faq pt-120 pb-70">
      <div class="bg-img"><img src="assets/images/backgrounds/4.png" alt="backgrounds"></div>
      <div class="container">
        <div class="row" id="accordion">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
              <div class="accordion__header" data-toggle="collapse" :data-target="'#collapse' + index">
                <a class="accordion__title" @click.prevent>{{ faq.Title }}</a>
              </div><!-- /.accordion-item-header -->
              <div :id="'collapse' + index" class="collapse" data-parent="#accordion">
                <div class="accordion__body">
                  <p>{{ faq.Content }}</p>
                </div><!-- /.accordion-item-body -->
              </div>
            </div>
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.FAQ -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QFolhetoDaJurisdicao",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      faqs: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("FolhetoDaJurisdicao.json").then((data) => {
      this.faqs = data.data.d.results
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
