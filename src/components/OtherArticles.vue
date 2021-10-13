<template>
  <div class="widget widget-posts">
    <h5 class="widget__title">Outros Artigos</h5>
    <div class="widget__content">
      <!-- post item #1 -->
      <div class="widget-post-item d-flex align-items-center" v-for="(item, index) in items" :key="index">
        <div class="widget-post__img">
          <router-link :to="{name: 'blog-item', params:{guid: item.GUID}}">
            <img :src="getImageUrl(item)" alt="thumb"></router-link>
        </div><!-- /.widget-post-img -->
        <div class="widget-post__content">
          <span class="widget-post__date">{{ item.Data_x0020_Noticia || item.Created | date }}</span>
          <h4 class="widget-post__title">
            <router-link :to="{name: 'blog-item', params:{guid: item.GUID}}">{{ item.Title }}</router-link>
          </h4>
        </div><!-- /.widget-post-content -->
      </div><!-- /.widget-post-item -->
    </div><!-- /.widget-content -->
  </div>
</template>

<script>
export default {
  name: "QOtherArticles",
  props: ['items'],
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    },
  }
}
</script>

<style scoped>

</style>
