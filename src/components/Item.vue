<template>
  <section class="blog blog-single pt-0 pb-80 mt-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-8">
          <div class="post-item mb-0">
            <div class="post__img">
              <router-link :to="{name: ''}">
                <img :src="getImageUrl(item)" alt="blog image">
              </router-link>
            </div><!-- /.post-img -->
            <div class="post__meta d-flex align-items-center mb-20">
              <span class="post__meta-date">{{ item.Data_x0020_Noticia || item.Created | date }}</span>
              <!--              <div class="post__meta-cat">-->
              <!--                <a href="#">Consulting</a><a href="#">Sales</a>-->
              <!--              </div>&lt;!&ndash; /.blog-meta-cat &ndash;&gt;-->
              <!--              <span class="post__meta-author"><span class="color-secondary">By:</span>-->
              <!--                  <a href="#">Mike Dooley</a>-->
              <!--                </span>-->
            </div><!-- /.blog-meta -->
            <h1 class="post__title mb-30">
              {{ item.Title }}
            </h1>
            <div class="post__desc" v-html="item.Content">
            </div><!-- /.blog-desc -->
          </div><!-- /.post-item -->
          <div class="bordered-box mb-40 mt-40">
            <div class="row row-no-gutter">
              <!--              <div class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">-->
              <!--                <div class="blog-tags d-flex flex-wrap">-->
              <!--                  <strong class="mr-20 color-heading">Tags</strong>-->
              <!--                  <ul class="list-unstyled d-flex flex-wrap mb-0">-->
              <!--                    <li><a href="#">Consulting</a></li>-->
              <!--                    <li><a href="#">Tech</a></li>-->
              <!--                    <li><a href="#">Employee</a></li>-->
              <!--                    <li><a href="#">Organization</a></li>-->
              <!--                  </ul>-->
              <!--                </div>&lt;!&ndash; /.blog-tags &ndash;&gt;-->
              <!--              </div>-->
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="blog-share d-flex flex-wrap justify-content-end">
                  <strong class="mr-20 color-heading">Partilhar</strong>
                  <ul class="list-unstyled social-icons social-icons-primary d-flex mb-0">
                    <li><a target="_blank"
                           :href="'https://www.facebook.com/sharer/sharer.php?u='+getCurrentUrl()+'&picture='+getImageUrl(item)+'&title='+item.Title+'&description='+item.Title"><i
                        class="fab fa-facebook-f"></i></a></li>
                    <li><a target="_blank" :href="'https://twitter.com/share?text='+item.Title+'&url='+getCurrentUrl()"><i
                        class="fab fa-twitter"></i></a></li>
                  </ul>
                </div><!-- /.blog-share -->
              </div>
            </div>
          </div>
          <div class="widget-nav d-flex justify-content-between mb-40">
            <router-link :to="{name: routeName, params:{guid: navigation.previous.GUID}}"
                         class="widget-nav__prev d-flex flex-wrap" v-if="navigation.previous.Title">
              <div class="widget-nav__img">
                <div class="widget-nav__overlay"></div>
                <img :src="getImageUrl(navigation.previous)" alt="blog thumb">
              </div>
              <div class="widget-nav__content">
                <span>Artigo Anterior</span>
                <h5 class="widget-nav__ttile mb-0">{{ navigation.previous.Title }}</h5>
              </div>
            </router-link>
            <span v-else></span>
            <router-link :to="{name: routeName, params:{guid: navigation.next.GUID}}"
                         class="widget-nav__next d-flex flex-wrap" v-if="navigation.next.Title">
              <div class="widget-nav__img">
                <div class="widget-nav__overlay"></div>
                <img :src="getImageUrl(navigation.next)" alt="blog thumb">
              </div>
              <div class="widget-nav__content">
                <span>Artigo Seguinte</span>
                <h5 class="widget-nav__ttile mb-0">{{ navigation.next.Title }}</h5>
              </div>
            </router-link><!-- /.widget-next  -->
          </div>
        </div><!-- /.col-lg-8 -->
        <div class="col-sm-12 col-md-12 col-lg-4">
          <aside class="sidebar">
<!--            <div class="widget widget-search">-->
<!--              <h5 class="widget__title">Procurar</h5>-->
<!--              <div class="widget__content">-->
<!--                <form class="widget__form-search">-->
<!--                  <input type="text" class="form-control" placeholder="Search...">-->
<!--                  <button class="btn"><i class="icon-search"></i></button>-->
<!--                </form>-->
<!--              </div>&lt;!&ndash; /.widget-content &ndash;&gt;-->
<!--            </div>&lt;!&ndash; /.widget-search &ndash;&gt;-->
            <q-other-articles :items="related" :route-name="routeName"/>
            <!--            <div class="widget widget-categories">-->
            <!--              <h5 class="widget__title">Categories</h5>-->
            <!--              <div class="widget-content">-->
            <!--                <ul class="list-unstyled mb-0">-->
            <!--                  <li><a href="#"><span>IT Management</span><span class="cat-count">9</span></a></li>-->
            <!--                  <li><a href="#"><span>Cyber Security</span><span class="cat-count">2</span></a></li>-->
            <!--                  <li><a href="#"><span>Cloud Computing</span><span class="cat-count">5</span></a></li>-->
            <!--                  <li><a href="#"><span>IT Consulting</span><span class="cat-count">1</span></a></li>-->
            <!--                  <li><a href="#"><span>Software Dev</span><span class="cat-count">7</span></a></li>-->
            <!--                </ul>-->
            <!--              </div>&lt;!&ndash; /.widget-content &ndash;&gt;-->
            <!--            </div>-->
            <!--            <div class="widget widget-tags">-->
            <!--              <h5 class="widget__title">Tags</h5>-->
            <!--              <div class="widget-content">-->
            <!--                <ul class="list-unstyled mb-0">-->
            <!--                  <li><a href="#">Insights</a></li>-->
            <!--                  <li><a href="#">Industry</a></li>-->
            <!--                  <li><a href="#">Modern</a></li>-->
            <!--                  <li><a href="#">Corporate</a></li>-->
            <!--                  <li><a href="#">Business</a></li>-->
            <!--                </ul>-->
            <!--              </div>&lt;!&ndash; /.widget-content &ndash;&gt;-->
            <!--            </div>-->
          </aside><!-- /.sidebar -->
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.blog Single -->
</template>

<script>
import QOtherArticles from "@/components/OtherArticles";

export default {
  name: "QItem",
  components: { QOtherArticles },
  methods: {
    getImageUrl(item) {
      return item && item.Attachments ? process.env.VUE_APP_ROOT_DOCS + item.AttachmentFiles.results[0].ServerRelativeUrl : 'assets/images/blog/grid/1.jpg'
    },
    getCurrentUrl() {
      // return 'https://ekutivasolutions.com'
      return window.location.href
    }
  },
  props: {
    item: {
      type: Object
    },
    routeName: {
      type: String,
      default: 'blog-item'
    },
    navigation: Object,
    related: Array
  }
}
</script>

<style scoped>

</style>
