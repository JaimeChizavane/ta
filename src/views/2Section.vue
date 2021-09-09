<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section id="overview" class="features-layout3 pt-130 pb-130">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-7 col-xl-6">
            <div class="heading heading-layout2 mb-50">
              <h5> De acordo com o artigo n.º 1 do Decreto n.º 58/2010 de 14 de
                Dezembro, os serviços de apoio do Tribunal Administrativo compreendem as seguintes unidades orgânicas:
              </h5>
              <ul class="list-items list-items-layout2 list-unstyled">
                <li> Contadoria da Conta Geral do Estado;</li>
                <li> Contadoria de Contas e Auditorias;</li>
                <li> Contadoria do Visto;</li>
                <li> Direcção de Administração e Finanças;</li>
                <li> Direcção de Recursos Humanos;</li>
                <li> Direcção de Sistema de Informação e Comunicação;</li>
                <li> Direcção de Planificação e Cooperação;</li>
                <li> Gabinete de Estudos;</li>
                <li> Gabinete Jurídico;</li>
                <li> Gabinete do Presidente;</li>
                <li> Cartório da 1.ª Secção;</li>
                <li> Cartório da 2.ª Secção;</li>
                <li> Departamento de Documentação, Biblioteca e Arquivo;</li>
                <li> Secretária-Geral.</li>
              </ul>
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
