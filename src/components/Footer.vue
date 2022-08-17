<template>
  <div>

    <footer class="footer bg-secondary">
      <div class="container">
        <div class="footer-top pt-50 pb-30">
          <div class="row">
            <!-- <div class="col-sm-4 col-md-2 col-lg-4">
              <img src="assets/images/logo/logo-light-small.png" alt="logo" class="mb-30">
            </div> --><!-- /.col-lg-2 -->
            <!-- <div class="col-sm-8 col-md-4 col-lg-3">
              <h6 class="footer-top__title">Subscreva a nossa NewsLetter</h6>
            </div> --><!-- /.col-lg-3 -->
            <!-- <div class="col-sm-12 col-md-6 col-lg-5">
              <form class="footer-form d-flex mb-0">
                <input type="text" class="form-control mr-20" placeholder="Insira seu email">
                <button type="submit" class="btn btn__primary btn__primary-style2">
                  <span>Subscrever</span>
                  <i class="icon-arrow-right"></i>
                </button>
              </form>
            </div> --><!-- /.col-lg-6 -->
          </div><!-- /.row -->
        </div><!-- /.footer-top -->
        <div class="footer-primary">
          <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-4 footer-widget footer-widget-about">
              <div class="footer-widget__content">
                <div class="contact-info">
                  <h6 class="footer-widget__title">Contacto</h6>
                  <ul class="contact-list list-unstyled">
                    <li class="color-gray">Entre em contacto connosco.
                    </li>
                    <li class="mt-20 mb-20">
                      <a href="tel:21345002" class="phone-number">
                        <i class="icon-phone"></i> <span>+258 21345002/3</span>
                      </a>
                    </li>
                    <li class="mt-20 mb-20">
                      <a href="mailto:ta@ta.gov.mz" class="phone-number">
                        <i class="icon-mail"></i> <span>ta@ta.gov.mz</span>
                      </a>
                    </li>
                    <li class="mt-20 mb-20">
                      <a href="https://www.ta.gov.mz" class="phone-number">
                        <i class="icon-website"></i> <span>www.ta.gov.mz</span>
                      </a>
                    </li>
                    <li class="color-body">Praça da Independência, N.º1117, Maputo - Moçambique</li>
                  </ul>
                </div><!-- /.contact-info -->

                <!--                <ul class="social-icons list-unstyled mb-0">-->
                <!--                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>-->
                <!--                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>-->
                <!--                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>-->
                <!--                </ul>&lt;!&ndash; /.social-icons &ndash;&gt;-->
              </div><!-- /.footer-widget__content -->
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4 footer-widget footer-widget-about">
              <div class="contact-info">
                <h6 class="footer-widget__title">Links Importantes</h6>
                <ul class="contact-list list-unstyled">
                  <li><a href="https://www.portaldogoverno.gov.mz/por/" target="_blank"> Portal do Governo </a>
                  </li>

                </ul>
              </div>
            </div> <!--links importantes-->
            <div class="col-sm-4 col-md-4 col-lg-4 footer-widget footer-widget-about">
              <div class="contact-info">
                <h6 class="footer-widget__title">Redes Sociais</h6>
                <ul class="contact-list list-unstyled">
                  <li class="mt-20 mb-20"><a href="#" class="phone-number"><i class="fab fa-facebook"></i><span> facebook</span>
                  </a></li>
                  <li class="mt-20 mb-20"><a href="#" class="phone-number"><i class="fab fa-instagram"></i> <span> instagram</span>
                  </a></li>
                  <li class="mt-20 mb-20"><a href="#" class="phone-number"><i class="fab fa-twitter"></i>
                    <span> twitter </span></a></li>
                </ul>
              </div>
            </div> <!--redes sociais-->
            <!--  <div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav" v-for="(menu, index) in menus"
                  :key="index">
               <h6 class="footer-widget__title">{{ $t(menu.name) | upper }}</h6>
               <div class="footer-widget__content">
                 <nav>
                   <ul class="list-unstyled">
                     <li v-for="(sub, index) in menu.sub_menus" :key="'sub'+index">
                       <router-link :to="{name: sub.to}">
                         {{ $t(sub.name) | upper }}
                       </router-link>
                     </li>
                   </ul>
                 </nav>
               </div><!/.footer-widget__content
             </div> -->
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 text-center pb-40">
            <span class="fz-14">&copy; {{year}}, Todos Direitos reservados. Desenvolvido com </span>
            <a class="fz-14 color-primary" href="#">AMBISIG</a>
          </div><!-- /.col-lg-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </footer><!-- /.Footer -->
    <button id="scrollTopBtn"><i class="fas fa-long-arrow-alt-up"></i></button>

    <div class="login-popup" id="login-popup">
      <div class="login-popup-wrapper">
        <form class="login-popup__form">
          <h3 class="login-popup__title">Entrar!</h3>
          <p class="login-popup__desc">Mantenha-se conectado ao TA.</p>
          <div class="form-group mb-20">
            <i class="icon-mail input-icon"></i>
            <input type="text" class="form-control" placeholder="Email">
          </div>
          <div class="form-group mb-20">
            <i class="icon-lock input-icon"></i>
            <input type="password" class="form-control" placeholder="********">
          </div>
          <div class="d-flex align-items-center justify-content-between mb-20">
            <div class="custom-control custom-checkbox d-flex align-items-center">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Lembrar-me!</label>
            </div>
            <a href="#" class="fz-14 font-weight-bold color-secondary">Esqueci a password?</a>
          </div>
          <button type="submit" class="btn btn__primary btn__block btn__xl">
            <span>Login</span>
            <i class="icon-arrow-right"></i>
          </button>
        </form>
        <div class="d-flex justify-content-center align-items-center mt-20">
          <span class="color-white fz-14 font-weight-bold">Nao tem uma conta?</span>
          <button id="go-register" class="go-register fz-14 font-weight-bold">
            <span>Register Here</span><i class="icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </div><!-- /.login-popup -->

    <!-- /.login-popup -->

    <div class="search-popup">
      <button type="button" class="search-popup__close"><i class="fas fa-times"></i></button>
      <form class="search-popup__form" @submit.prevent="search">
        <input type="text" class="search-popup__form__input" placeholder="Escreva e pressione ENTER"
               v-model="searchQuery">
        <button class="search-popup__btn"><i class="icon-search"></i></button>
      </form>
    </div><!-- /. search-popup -->
  </div><!-- /.wrapper -->
</template>

<script>
import menus from '@/mocking_data/menu.json'

export default {
  name: "QFooter",
  data() {
    return {
      searchQuery: '',
      year:''
    }
  },
  computed: {
    menus: function () {
      return menus.filter((menu) => {
        return menu.sub_menus && menu.sub_menus.length
      })
    }
  },
  methods: {
    search() {
      window.$(".search-popup__close")[0].click()


      this.$router.push({ name: 'search', query:{ query: this.searchQuery } })
    }
  },
  mounted() {
    this.year = new Date().getFullYear()
  }
}
</script>

<style scoped>

</style>
