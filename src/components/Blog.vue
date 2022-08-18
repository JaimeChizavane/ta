<template>
  <section class="blog-grid pb-50">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div class="heading text-center mb-40">
            <h2 class="heading__subtitle">{{ $tc('news', 2) }}</h2>
            <h3 class="heading__title">
              <router-link :to="{name: 'blog'}">
                {{ $tc('recent_article', 2) }}
              </router-link>
            </h3>
          </div><!-- /.heading -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
      <div class="row">
        <!-- Blog Item #1 -->
        <div class="col-sm-12 col-md-6 col-lg-4" v-for="(article) in news" :key="article.GUID">
          <div class="post-item">
            <div class="post__img">
              <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}">
                <img v-lazy="getImageUrl(article)" alt="blog image" class="cover__image">
              </router-link>
            </div><!-- /.blog-img -->
            <div class="post__body">
              <!--              <div class="post__meta-cat">-->
              <!--                <a href="#">Consulting</a><a href="#">Noticias</a>-->
              <!--              </div>&lt;!&ndash; /.blog-meta-cat &ndash;&gt;-->
              <h4 class="post__title">
                <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}">
                  {{ article.Title }}
                </router-link>
              </h4>
              <div class="post__meta">
                <span class="post__meta-date">{{ article.Data_x0020_Noticia || article.Created | date_with_week }}</span>
              </div>
              <p class="post__desc" v-html="$options.filters.excerpt(article.Content)"></p>
              <router-link :to="{name: 'blog-item', params: {guid : article.GUID}}"
                           class="btn btn__secondary btn__link">
                <span>{{ $tc('read_more') }}</span>
                <i class="icon-arrow-right"></i>
              </router-link>
            </div><!-- /.blog-content -->
          </div><!-- /.post-item -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
    <hr>
  </section><!-- /.blog Grid -->
</template>

<script>

export default {
  name: "QBlog",
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    },
  },
  async mounted() {

    const data = await this.$http.get("news.json")

    this.news = data.data.d.results.sort((item, next) => {
      return new Date(next.Data_x0020_Noticia || next.Created) - new Date(item.Data_x0020_Noticia || item.Created);
    }).slice(0, 3)

    this.$emit('news', this.news)
  },
  data() {
    return {
      news: []
    }
  }
}
</script>

<style scoped>

</style>
