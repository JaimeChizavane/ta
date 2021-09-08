<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="about-layout1 pb-130">
      <div class="container">
        <div class="row align-items-end">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-5">
            <div class="about__img">
              <img src="assets/images/sliders/7.jpg" alt="about">
            </div><!-- /.about-img -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 offset-xl-1">
            <p class="mb-30">
              O Tribunal Administrativo é o órgão superior da hierarquia dos tribunais
              administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos tribunais
              aduaneiros.
            </p>
            <div class="heading-layout2">
              <h5 class="mb-30">
                De acordo com a Constituição da República, no seu artigo 230, compete ao Tribunal
                Administrativo:
              </h5>
            </div><!-- /heading -->
            <div class="about__Text">
              <ul class="list-items list-items-layout2 list-unstyled">
                <li> Julgar as acções que tenham por objecto litígios emergentes das relações jurídicas
                  administrativas;
                </li>
                <li> Julgar os recursos contenciosos interpostos das decisões dos órgãos do Estado, dos respectivos
                  titulares e agentes;
                </li>
                <li> Conhecer dos recursos interpostos das decisões proferidas pelos tribunais administrativos, fiscais
                  e aduaneiras;
                </li>
                <li> Emitir o relatório e o parecer sobre a Conta Geral do Estado;</li>
                <li> Fiscalizar, previamente, a legalidade e a cobertura orçamental dos actos e contratos sujeitos à
                  jurisdição do Tribunal Administrativo;
                </li>
                <li> Fiscalizar, sucessiva e concomitantemente os dinheiros públicos;</li>
                <li> Fiscalizar a aplicação dos recursos financeiros obtidos no estrangeiro, nomeadamente através de
                  empréstimos, subsídios, avales e donativos.
                </li>
              </ul>
            </div>

            <div class="heading-layout2">
              <h6 class="mb-30 mt-50">
                Por sua vez, o artigo 4 da Lei n.º 24/2013, de 1 de Novembro, alterada e republicada pela Lei n.º
                7/2015, de 6 de Outubro, apresenta como competências do Tribunal Administrativo as seguintes:
              </h6>
            </div><!-- /heading -->
            <div class="about__Text">
              <ul class="list-items list-items-layout2 list-unstyled">
                <li> Julgar as acções e recursos que tenham por objecto litígios emergentes das relações
                  jurídico-administrativas;
                </li>
                <li> O controlo da legalidade dos actos administrativos e da aplicação das normas regulamentares
                  emitidas pela Administração Pública do nível central;
                </li>
                <li> A fiscalização das receitas e das despesas públicas e a respectiva efectivação da responsabilidade
                  por infracção financeira.
                </li>
              </ul>
            </div>
          </div><!-- /.col-xl-7 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QCompetencies",
  components: { QBreadCrumb, QHeader, QFooter },
  mounted() {
    window.mainExecution()
  }
}
</script>

<style scoped>

</style>
