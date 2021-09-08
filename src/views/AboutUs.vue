<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="about-layout2 pt-130 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-5">
            <div class="about__img mb-40">
              <img src="assets/images/about/1.jpg" alt="about">
              <blockquote class="blockquote mb-0">
                <h4 class="blockquote__title">O  Tribunal  Administrativo  é  o  órgão  superior  da  hierarquia  dos  tribunais  administrativos provinciais e da Cidade de Maputo, dos tribunais fiscais e dos  tribunais aduaneiros.
                </h4>
              </blockquote>
            </div><!-- /.about-img -->
          </div><!-- /.col-xl-5 -->
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 offset-xl-1">
            <div class="heading-layout2 mb-40">
              <h3 class="heading__title">Tribunal Administrativo.</h3>
            </div><!-- /heading -->
            <div class="about-text-wrapper">
              <div class="about__Text">
                <p class="font-weight-bold mb-30">A menção de um “Tribunal Administrativo” aparece, pela primeira vez,
                  na história da justiça
                  administrativa de Moçambique, na Segunda Carta Orgânica das Colónias Portuguesas aprovada pelo Decreto
                  de 1 de Dezembro de 1869, reformando a Administração Pública. Nessa altura chamava-se Conselho de
                  Província..</p>
                <ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
                  <li>No dia 4 de Outubro de 1926 criou-se um tribunal privativo de contencioso, denominado Tribunal
                    Administrativo, Fiscal e de Contas.
                  </li>


                </ul>
                <ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
                  <li>Em 15 de Novembro de 1933, o Decreto-Lei n.º 23.229, conhecido como Reforma Administrativa
                    Ultramarina
                    (RAU), reconhece a existência de Tribunais Administrativos a par do Conselho Superior das Colónias.
                    A
                    Reforma Administrativa Ultramarina consagra o princípio da independência destes tribunais face ao
                    Poder Executivo. No que se refere às competências, a Reforma Administrativa Ultramarina distribui-as
                    pelas Secções do Contencioso Administrativo, Contencioso Fiscal e Aduaneiro, Contas e Consultas.
                  </li>
                </ul>
                <ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
                  <li>A Constituição de 25 de Junho de 1975, alterada em 13 de Agosto de 1978, não menciona formalmente
                    a
                    existência do Tribunal Administrativo ou de uma jurisdição administrativa. No entanto, o Tribunal
                    Administrativo, Fiscal e de Contas, herdado da organização judiciária colonial, sempre existiu. Este
                    foi extinto formalmente ao abrigo do artigo 44 da Lei 5/ 92, de 6 de Maio (“É extinto o Tribunal
                    Administrativo, Fiscal e de Contas de Moçambique”), o que supõe que ele funcionava, pelo menos
                    teoricamente.
                  </li>
                </ul>
                <ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
                  <li>A Constituição de 30 de Novembro de 1990, consagra a existência, na ordem jurídica moçambicana, do
                    Tribunal Administrativo, atribuindo a este, como competências, em termos gerais, o controlo da
                    legalidade dos actos administrativo e a fiscalização da legalidade das despesas públicas. Compete
                    ainda ao Tribunal Administrativo o exercício da jurisdição fiscal e aduaneira, em instância única ou
                    em segunda instância.
                  </li>
                </ul>
                <ul class="list-items list-items-layout2 list-unstyled mb-0 mt-60">
                  <li>A lei fundamental de 16 de Novembro de 2004, no seu artigo 223 reafirma a existência do Tribunal
                    Administrativo e suas competências no mapa jurídico moçambicano..
                  </li>
                </ul>
              </div>

            </div>
          </div><!-- /.col-xl-7 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.About Layout 2 -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QAboutUs",
  components: { QBreadCrumb, QHeader, QFooter },
  mounted() {
    window.mainExecution()
  }
}
</script>

<style scoped>

</style>
