<template>
  <div class="wrapper">
    <q-header/>
    <section class="page-404 bg-overlay bg-overlay-gradient mt--140 py-0">
      <div class="bg-img"><img src="assets/images/banners/1.jpg" alt="background"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
              <h1 class="error-code">404</h1>
              <h2 class="error-title">Oops! {{ $t('errors.404') }}</h2>
              <router-link :to="{name:'home'}" class="btn btn__primary btn__primary-style2 btn__icon">
                <span>{{ $t('errors.go_home') }}</span> <i class="icon-arrow-right"></i>
              </router-link>
            </div>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.page-404 -->
    <q-footer/>
  </div>
</template>

<script>
import QHeader from "@/components/Header/Header";
import QFooter from "@/components/Footer";

export default {
  name: "Q404",
  components: { QFooter, QHeader },
  mounted() {
    window.mainExecution()
  }
}
</script>

<style scoped>

</style>
