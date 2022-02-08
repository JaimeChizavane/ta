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
    'item.Title': function () {
      this.changeTitle()
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
      }) || []

      return items.sort(() => 0.5 - Math.random()).slice(0, 8)
    },
    navigation: function () {
      let prev = this.news.find((article) => {
        return new Date(article.Data_x0020_Noticia || article.Created) < new Date(this.item.Data_x0020_Noticia || this.item.Created) && article.GUID !== this.item.GUID
      }) || { GUID: null }

      let reversed = this.news.slice()

      let next = reversed.reverse().find((article) => {
        return new Date(article.Data_x0020_Noticia || article.Created).getTime() > new Date(this.item.Data_x0020_Noticia || this.item.Created).getTime() && article.GUID !== this.item.GUID
      }) || { GUID: null }

      return {
        previous: prev,
        next: next
      }
    }
  },
  methods: {
    changeTitle() {
      this.$route.meta.display = this.$options.filters.excerpt_shorter(this.item.Title)

      this.$eventHub.$emit('new-page-title', this.$options.filters.excerpt_shorter(this.item.Title))
    }
  },
  async mounted() {
    const data = await this.$http.get("news.json")

    this.news = data.data.d.results

    window.mainExecution()

    this.changeTitle()
  }
}
</script>

<style scoped>

</style>
