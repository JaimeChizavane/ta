<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
        <div class="heading text-center mb-0 mt-40">
          <h3 class="heading__title">
            <router-link :to="{name: 'blog'}">
              {{ $tc('recent_article', 2) }}
            </router-link>
          </h3>
        </div><!-- /.heading -->
      </div><!-- /.col-lg-6 -->
    </div><!-- /.row -->
    <q-item-list :items="news" itemRoute="blog-item"/>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import QItemList from "@/components/ItemList";

export default {
  name: "QBlogList",
  components: { QItemList, QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      news: []
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("news.json").then((data) => {
      this.news = data.data.d.results.sort((item, next) => {
        return new Date(next.Data_x0020_Noticia || next.Created) - new Date(item.Data_x0020_Noticia || item.Created);
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>
