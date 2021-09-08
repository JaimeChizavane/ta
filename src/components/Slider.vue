<template>
  <section class="slider">
    <div class="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
         data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
      <div class="slide-item align-v-h bg-overlay bg-overlay-gradient">
        <div class="bg-img"><img src="assets/images/sliders/1.jpg" alt="slide img"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <div class="slide__content">
                <span class="slide__subtitle">Seja bem-vindo ao site do Tribunal Administrativo de Moçambique.</span>
                <h2 class="slide__title">O Tribunal Administrativo </h2>
                <p class="slide__desc">É o órgão superior da hierarquia dos tribunais administrativos. </p>
                <div class="d-flex flex-wrap align-items-center">
                  <router-link :to="{name: 'AboutUs'}" class="btn btn__primary btn__primary-style2 mr-30">
                    <i class="icon-arrow-right"></i>
                    <span> Saber Mais</span>
                  </router-link>
                  <!--<a href="it-solutions.html" class="btn btn__white">Our Services</a>-->
                </div>
              </div><!-- /.slide-content -->
            </div><!-- /.col-xl-7 -->


            <!--<div class="col-xl-5 d-none d-xl-flex justify-content-end">
                <div class="cta-banner">
                  <div class="slick-carousel" data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'>
                    <div>
                      <div class="cta__icon">
                        <i class="icon-file"></i>
                      </div>
                      <h4 class="cta__title mb-0">Encontre nossas representações</h4>
                    </div>
                    <div>
                      <div class="cta__icon">
                        <i class="icon-network"></i>
                      </div>
                      <h4 class="cta__title mb-0">Estamos representados em todo território nacional
                      </h4>
                    </div>
                  </div>
                </div>
              </div>-->


          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.slide-item -->
      <div class="slide-item align-v-h bg-overlay">
        <div class="bg-img"><img src="assets/images/sliders/2.jpg" alt="slide img"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <div class="slide__content">
                <span class="slide__subtitle">Atribuições e Competências do Tribunal Administrativo </span>
                <h2 class="slide__title">Tribunal Administrativo em prol da Justiça</h2>
                <p class="slide__desc">O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais
                  administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais
                  aduaneiros. </p>
                <div class="d-flex flex-wrap align-items-center">
                  <router-link :to="{name: 'AboutUs'}" class="btn btn__primary btn__primary-style2 mr-30">
                    <i class="icon-arrow-right"></i>
                    <span> Saber Mais</span>
                  </router-link>
                  <!--<a href="it-solutions.html" class="btn btn__white">Our Services</a>-->
                </div>
              </div><!-- /.slide-content -->
            </div><!-- /.col-xl-7 -->

            <!--<div class="col-xl-5 d-none d-xl-flex justify-content-end">
                <div class="cta-banner">
                  <div class="slick-carousel" data-slick='{"slidesToShow": 1, "arrows": false, "dots": true}'>
                    <div>
                      <div class="cta__icon">
                        <i class="icon-network"></i>
                      </div>
                      <h4 class="cta__title mb-0">Utilising the latest processing solutions & decades of experience.
                      </h4>
                    </div>
                    <div>
                      <div class="cta__icon">
                        <i class="icon-file"></i>
                      </div>
                      <h4 class="cta__title mb-0">Thinking insights, verified research, and make right decisions!</h4>
                    </div>
                  </div>
                </div>
              </div>-->

          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.slide-item -->
    </div><!-- /.carousel -->
  </section><!-- /.slider -->
</template>

<script>
export default {
  name: "QSlider"
}
</script>

<style scoped>

</style>
