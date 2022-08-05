<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="about-layout1 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 offset-xl-1">
            <div class="heading text-center">
            </div><!-- /heading -->
            <div class="heading__title">
              <span class="" v-html="services.Content">                
              </span>
              <img :src="getImageUrl(services)" alt="blog image" class="cover__image"> 
            </div>
          </div><!-- /.col-xl-7 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QCompetencies",
  components: { QBreadCrumb, QHeader, QFooter },
   methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/about/1.jpg'
    },
  },
  data() {
    return {
      services: {
        Content: null
      }
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("instituicao.json").then((data) => {
      this.services = data.data.d.results.find(item => item.Id === 19)
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
