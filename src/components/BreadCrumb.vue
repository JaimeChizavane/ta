<template>
  <section class="page-title page-title-layout12 bg-overlay bg-overlay-gradient bg-parallax text-center">
    <div class="bg-img"><img src="assets/images/sliders/2.jpg" alt="background"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="pagetitle__heading">{{ $tc(title, 2) }}</h1>
          <nav>
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link :to="{name: 'home'}">{{ $tc('home') }}</router-link>
              </li>
              <li class="breadcrumb-item" v-show="$route.meta.parent">
                <router-link :to="{name: ''}">{{ $tc($route.meta.parent) }}</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ $tc($route.meta.display, 2) }}</li>
            </ol>
          </nav>
        </div><!-- /.col-lg-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.page-title -->
</template>

<script>
export default {
  name: "QBreadCrumb",
  mounted() {
    this.$eventHub.$on('new-page-title', (title) => {
      this.title = title
    })
  },
  data() {
    return {
      title: this.$route.meta.display
    }
  },
  beforeDestroy() {
    this.$eventHub.$off('new-page-title')
  }
}
</script>

<style scoped>

</style>
