<template>
<div>

  <footer class="footer bg-secondary">
    <div class="container">
      <div class="footer-top pt-50 pb-30">
        <div class="row">
          <div class="col-sm-4 col-md-2 col-lg-4">
            <img src="assets/images/logo/logo-light-small.png" alt="logo" class="mb-30">
          </div><!-- /.col-lg-2 -->
          <div class="col-sm-8 col-md-4 col-lg-3">
            <h6 class="footer-top__title">Subscreva a nossa NewsLetter</h6>
          </div><!-- /.col-lg-3 -->
          <div class="col-sm-12 col-md-6 col-lg-5">
            <form class="footer-form d-flex mb-0">
              <input type="text" class="form-control mr-20" placeholder="Insira seu email">
              <button type="submit" class="btn btn__primary btn__primary-style2">
                <span>Subscrever</span>
                <i class="icon-arrow-right"></i>
              </button>
            </form>
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
      </div><!-- /.footer-top -->
      <div class="footer-primary">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
            <div class="footer-widget__content">
              <div class="contact-info">
                <h6 class="footer-widget__title">Contacto rapido</h6>
                <ul class="contact-list list-unstyled">
                  <li class="color-gray">Entre em contacto rapido com o TA.
                  </li>
                  <li class="mt-20 mb-20">
                    <a href="tel:01061245741" class="phone-number">
                      <i class="icon-phone"></i> <span>+258 21345002/3</span>
                    </a>
                  </li>
                  <li class="color-body">Praça da Independência, N.º1117</li>
                </ul>
              </div><!-- /.contact-info -->
              <ul class="social-icons list-unstyled mb-0">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              </ul><!-- /.social-icons -->
            </div><!-- /.footer-widget__content -->
          </div><!-- /.col-xl-2 -->
          <div class="col-sm-6 col-md-6 col-lg-2 offset-lg-1 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Tribunal Administrativo</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="about-us.html">Acerca</a></li>
                  <li><a href="leadership-team.html">Organograma</a></li>
                  <li><a href="blog.html">Estrategia</a></li>
                  <li><a href="projects-grid.html">Artigos</a></li>
                  <li><a href="contacs.html">Contacts</a></li>
                  <li><a href="#">Imprensa</a></li>
                </ul>
              </nav>
            </div><!-- /.footer-widget__content -->
          </div><!-- /.col-lg-2 -->
          <!--<div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Solutions</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="#">IT Management</a></li>
                  <li><a href="#">Cyber Security</a></li>
                  <li><a href="#">Cloud Computing</a></li>
                  <li><a href="#">IT Consulting</a></li>
                  <li><a href="#">Software Dev</a></li>
                  <li><a href="#">IT Support</a></li>
                </ul>
              </nav>
            </div>
          </div>-->
          <!--<div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Resources</h6>
            <div class="footer-widget__content">
              <nav>
                <ul class="list-unstyled">
                  <li><a href="pricing.html">Pricing and plans</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="faqs.html">Help & FAQ</a></li>
                  <li><a href="contacs.html">Contact Us</a></li>
                  <li><a href="#">Site map</a></li>
                </ul>
              </nav>
            </div>
          </div>-->
          <!--<div class="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
            <h6 class="footer-widget__title">Download</h6>
            <div class="footer-widget__content">
              <a href="#" class="btn btn__white btn__download mb-20">
                <i class="fab fa-apple"></i>
                <span>App Store</span>
              </a>
              <a href="#" class="btn btn__white btn__download mb-20">
                <i class="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>--><!-- /.col-lg-2 -->
        </div><!-- /.row -->
      </div><!-- /.footer-primary -->
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 text-center pb-40">
          <span class="fz-14">&copy; 2021, Todos Direitos reservados. Desenvolvido com </span>
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

  <!--   <div class="login-popup" id="register-popup">
       <div class="login-popup-wrapper">
         <form class="login-popup__form">
           <h3 class="login-popup__title">Register!</h3>
           <p class="login-popup__desc">Connect, organize and get things done to keep your IT business safe.</p>
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
               <input type="checkbox" class="custom-control-input" id="customCheck2">
               <label class="custom-control-label" for="customCheck2">I read & agree to <a href="#">Terms &
                   Conditions</a></label>
             </div>
           </div>
           <button type="submit" class="btn btn__primary btn__block btn__xl">
             <span>Register</span>
             <i class="icon-arrow-right"></i>
           </button>
         </form>
         <div class="d-flex justify-content-center align-items-center mt-20">
           <span class="color-white fz-14 font-weight-bold">Have An Account?</span>
           <button id="go-login" class="go-login fz-14 font-weight-bold">
             <span>Login Here</span><i class="icon-arrow-right"></i>
           </button>
         </div>
       </div>
     </div>-->

  <!-- /.login-popup -->

  <div class="search-popup">
    <button type="button" class="search-popup__close"><i class="fas fa-times"></i></button>
    <form class="search-popup__form">
      <input type="text" class="search-popup__form__input" placeholder="Type Words Then Enter">
      <button class="search-popup__btn"><i class="icon-search"></i></button>
    </form>
  </div><!-- /. search-popup -->
</div><!-- /.wrapper -->
</template>

<script>
export default {
  name: "QFooter"
}
</script>

<style scoped>

</style>