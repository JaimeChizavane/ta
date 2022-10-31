<template>
  <div class="wrapper">
    <q-header />
    <q-bread-crumb />
    <sub-menu />
    <q-item
      :item="item"
      :navigation="navigation"
      :related="related"
      route-name="tfps.blog-item"
    />
    <q-footer />
  </div>
</template>

<script>
import QFooter from '@/components/Footer';
import QHeader from '@/components/Header/Header';
import QBreadCrumb from '@/components/BreadCrumb';
import QItem from '@/components/Item';
import SubMenu from '@/views/fiscal/tfps/components/SubMenu';

export default {
  name: 'QBlogItem',
  components: { SubMenu, QItem, QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      news: [],
    };
  },
  watch: {
    item: function(val) {
      this.$route.meta.display = val.Title;
    },
  },
  computed: {
    item: function() {
      return (
        this.news.find((article) => {
          return article.GUID === this.$route.params.guid;
        }) || {}
      );
    },
    related: function() {
      let items =
        this.news.filter((article) => {
          return ![
            this.item.GUID,
            this.navigation.next.GUID,
            this.navigation.previous.GUID,
          ].includes(article.GUID);
        }) || [];

      return items
        .sort((item, next) => {
          return (
            new Date(next.Data_x0020_Noticia || next.Created) -
            new Date(item.Data_x0020_Noticia || item.Created)
          );
        })
        .slice(0, 4);
    },
    navigation: function() {
      let prev = this.news.find((article) => {
        return (
          new Date(article.Data_x0020_Noticia || article.Created) <
            new Date(this.item.Data_x0020_Noticia || this.item.Created) &&
          article.GUID !== this.item.GUID
        );
      }) || { GUID: null };

      let next = this.news.find((article) => {
        return (
          new Date(article.Data_x0020_Noticia || article.Created) >
            new Date(this.item.Data_x0020_Noticia || this.item.Created) &&
          article.GUID !== this.item.GUID
        );
      }) || { GUID: null };

      return {
        previous: prev,
        next: next,
      };
    },
  },
  async mounted() {
    window.mainExecution();

    const data = await this.$http.get('tfpsnews.json');

    this.news = data.data.d.results;

    this.$route.meta.display = this.item.Title;
  },
};
</script>

<style scoped></style>
