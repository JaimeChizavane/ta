<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div class="heading heading-layout2 mb-50">
              <h3>CONTENCIOSO ADMINISTRATIVO</h3>
              <h4>1.ª SECÇÃO</h4>
              <br>
              <h5>O QUE É CONTENCIOSO ADMINISTRATIVO?</h5>
              <p>
                O Contencioso Administrativo é uma garantia constitucional que representa a forma mais elevada e eficaz da defesa de direitos subjectivos e dos interesses 
                legalmente protegidos dos particulares, perante a actuação da Administração Pública que efectiva por meio dos tribunais administrativos.
              </p>
              <br>
              <h5>SECÇÃO DO CONTENCIOSO ADMINISTRATIVO</h5>
              <p>
                Nos termos do artigo 17, n.º 1, alínea a) da Lei n.º 7/2015, de 06 Outubro – Lei Orgânica da Jurisdição Administrativa – LO alterada e republicada pela Lei 
                n.º 8/2015, de 6 de Outubro, a 1ª Secção do Tribunal Administrativo denomina-se Contencioso Administrativo, cabendo a mesma dirimir os litígios entre a 
                Administração Pública e os particulares e vice-versa, por aplicação das normas do Direito Administrativo e, supletivamente, as disposições relativas aos tribunais 
                judiciais, com as devidas adaptações.
              </p>
              <br>
              <h5>SECÇÃO DO CONTENCIOSO ADMINISTRATIVO</h5>
              <p>
                Nos termos do artigo 17, n.º 1, alínea a) da Lei n.º 7/2015, de 06 Outubro – Lei Orgânica da Jurisdição Administrativa – LO alterada e republicada pela Lei 
                n.º 8/2015, de 6 de Outubro, a 1ª Secção do Tribunal Administrativo denomina-se Contencioso Administrativo, cabendo a mesma dirimir os litígios entre a 
                Administração Pública e os particulares e vice-versa, por aplicação das normas do Direito Administrativo e, supletivamente, as disposições relativas aos tribunais 
                judiciais, com as devidas adaptações.
              </p>
              <br>

            </div>
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 offset-xl-1">
            <div class="sticky-top">
              <img src="assets/images/sliders/8.png" alt="banner">
            </div>
          </div><!-- /col-lg-5 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.Features Layout 3 -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QSupportServices",
  components: { QBreadCrumb, QHeader, QFooter },
  mounted() {
    window.mainExecution()
  }
}
</script>

<style scoped>

</style>
