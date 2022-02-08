<template>
  <section class="blog-grid">
    <div class="container">
      <div class="row">
        <!-- Blog Item #1 -->
        <div class="col-sm-12 col-md-6 col-lg-4" v-for="(item, index) in dataList.data" :key="index">
          <div class="post-item">
            <div class="post__img">
              <router-link :to="{name: itemRoute, params: {guid : item.GUID}}">
                <img
                    :src="getImageUrl(item)"
                    alt="blog image" class="cover__image">
              </router-link>
            </div><!-- /.blog-img -->
            <div class="post__body">
              <!--              <div class="post__meta-cat">-->
              <!--                <a href="#">Consulting</a><a href="#">Sales</a>-->
              <!--              </div>&lt;!&ndash; /.blog-meta-cat &ndash;&gt;-->
              <h4 class="post__title">
                <router-link :to="{name: itemRoute, params: {guid : item.GUID}}">
                  {{ item.Title }}
                </router-link>
              </h4>
              <div class="post__meta">
                <span class="post__meta-date">{{ item.Data_x0020_Noticia || item.Created | date_with_week }}</span>
              </div>
              <p class="post__desc" v-html="$options.filters.excerpt(item.Content)"></p>
              <router-link :to="{name: itemRoute, params: {guid : item.GUID}}"
                           class="btn btn__secondary btn__link">
                <span>{{ $tc('read_more') }}</span>
                <i class="icon-arrow-right"></i>
              </router-link>
            </div><!-- /.blog-content -->
          </div><!-- /.post-item -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <q-pagination :meta="meta" v-if="paginate"/>
    </div><!-- /.container -->
  </section><!-- /.blog Grid -->
</template>

<script>
import QPagination from "@/components/Pagination";

export default {
  name: "QItemList",
  components: { QPagination },
  data() {
    return {
      meta: {
        current_page: 1,
        per_page: 6,
        prev_page: null,
        next_page: null,
        total_items: 0,
        total_pages: 0
      }
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemRoute: {
      type: String,
      required: true
    },
    paginate: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    },
    paginator(items, current_page, per_page_items) {
      let page = current_page || 1,
          per_page = per_page_items || 6,
          offset = (page - 1) * per_page,
          paginatedItems = items.slice(offset).slice(0, per_page),
          total_pages = Math.ceil(items.length / per_page);

      this.meta = {
        current_page: page,
        per_page: per_page,
        prev_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total_items: items.length,
        total_pages: total_pages
      }

      return {
        data: paginatedItems
      }
    }
  },
  computed: {
    dataList: function () {
      if (this.paginate) {
        return this.paginator(this.items, this.meta.current_page, this.meta.per_page)
      }

      return {
        data: this.items
      }
    }
  },
  mounted() {
    this.$eventHub.$on('navigate', (page) => {
      this.meta = {
        current_page: page,
        per_page: this.meta.per_page,
        prev_page: page - 1 ? page - 1 : null,
        next_page: (this.meta.total_pages > page) ? page + 1 : null,
        total_items: this.meta.total_items,
        total_pages: this.meta.total_pages
      }

      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    })
  },
  beforeDestroy() {
    this.$eventHub.$off('navigate')
  }
}
</script>

<style scoped>

</style>
