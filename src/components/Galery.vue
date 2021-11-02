<template>
  <section class="work-process pt-130 pb-130">
    <div class="bg-img"><img src="assets/images/backgrounds/2.jpg" alt="background"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-7">
          <div class="banners-wrapper sticky-top">
            <div class="tab-content mb-50">
              <div class="tab-pane fade show active" id="tab1">
                <div class="video__banner">
                  <img src="assets/images/work-process/1.jpg" class="rounded" alt="banner">
                  <a class="video__btn video__btn-white popup-video"
                     href="#">
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div><!-- /.video__banner -->
              </div>
              <div class="tab-pane fade" id="tab2">
                <div class="video__banner">
                  <img src="assets/images/work-process/2.jpg" class="rounded" alt="banner">
                  <a class="video__btn video__btn-white popup-video"
                     href="#">
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div><!-- /.video__banner -->
              </div>
              <div class="tab-pane fade" id="tab3">
                <div class="video__banner">
                  <img src="assets/images/work-process/3.jpg" class="rounded" alt="banner">
                  <a class="video__btn video__btn-white popup-video"
                     href="#">
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div><!-- /.video__banner -->
              </div>
              <div class="tab-pane fade" id="tab4">
                <div class="video__banner">
                  <img src="assets/images/work-process/4.jpg" class="rounded" alt="banner">
                  <a class="video__btn video__btn-white popup-video"
                     href="#">
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div><!-- /.video__banner -->
              </div>
            </div><!-- /.tab-content -->
            <div class="cta-banner mt-30 mb-30 d-flex flex-wrap align-items-center">
              <h4 class="cta__title my-3 pr-30">
                Encontre a nossa galeria online, com todos as coberturas de eventos:
              </h4>
              <router-link :to="{name: 'videos'}" class="btn btn__primary btn__primary-style2">
                <span>Ver mais </span>
                <i class="icon-arrow-right"></i>
              </router-link>
            </div> <!-- /.cta-banner -->
          </div>
        </div><!-- /.col-lg-7 -->
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
          <div class="heading mb-70">
            <h2 class="heading__subtitle color-primary">Galeria</h2>
            <h3 class="heading__title color-white">Encontre a nossa galeria digital! </h3>
          </div>
          <nav class="nav nav-tabs">
            <!-- process Item #1 -->
            <a class="process-item active" data-toggle="tab" href="#tab1">
              <div class="process-item__content">
                <h4 class="process-item__title">Nomeação do Presidente do TA</h4>
                <p class="process-item__desc">Acompanhe o video aqui...</p>
              </div>
            </a><!-- /.process-item -->
            <!-- process Item #2 -->
            <a class="process-item" data-toggle="tab" href="#tab2">
              <div class="process-item__content">
                <h4 class="process-item__title">Video 2</h4>
                <p class="process-item__desc">Acompanhe o video aqui...
                </p>
              </div>
            </a><!-- /.process-item -->
            <!-- process Item #3 -->
            <a class="process-item" data-toggle="tab" href="#tab3">
              <div class="process-item__content">
                <h4 class="process-item__title">Video 3</h4>
                <p class="process-item__desc">Acompanhe o video aqui...
                </p>
              </div>
            </a><!-- /.process-item -->
            <!-- process Item #4 -->
            <a class="process-item" data-toggle="tab" href="#tab4">
              <div class="process-item__content">
                <h4 class="process-item__title">Video 3</h4>
                <p class="process-item__desc">Acompanhe o video aqui...</p>
              </div>
            </a><!-- /.process-item -->
          </nav>
        </div><!-- /.col-lg-5 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.Work Process -->
</template>

<script>
export default {
  name: "QGalery"
}
</script>

<style scoped>

</style>
