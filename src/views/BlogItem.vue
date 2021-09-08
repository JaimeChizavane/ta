<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <q-item :item="item" :navigation="navigation" :related="related"/>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";
import QItem from "@/components/Item";

export default {
  name: "QBlogItem",
  components: { QItem, QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      news: []
    }
  },
  watch: {
    item: function (val) {
      this.$route.meta.display = val.Title1
    }
  },
  computed: {
    item: function () {
      return this.news.find((article) => {
        return article.GUID === this.$route.params.guid
      }) || {}
    },
    related: function () {
      let items = this.news.filter((article) => {
        return ![this.item.GUID, this.navigation.next.GUID, this.navigation.previous.GUID].includes(article.GUID)
      }).slice(0, 4) || []

      return items
    },
    navigation: function () {
      let prev = this.news.find((article) => {
        return new Date(article.Created1) < new Date(this.item.Created1) && article.GUID !== this.item.GUID
      }) || { GUID: null }

      let next = this.news.find((article) => {
        return new Date(article.Created1) > new Date(this.item.Created1) && article.GUID !== this.item.GUID
      }) || { GUID: null }

      return {
        previous: prev,
        next: next
      }
    }
  },
  async mounted() {
    window.mainExecution()

    await import('@/mocking_data/Noticias.json').then((data) => {
      this.news = data.d.results

      this.$route.meta.display = this.item.Title1
    })
  }
}
</script>

<style scoped>

</style>
