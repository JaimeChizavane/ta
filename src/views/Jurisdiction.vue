<template>
  <div class="wrapper">
    <q-header/>
    <q-bread-crumb/>
    <section class="careers">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div class="heading text-center mb-50">
              <h3 class="heading__title">{{ $tc($route.meta.display) }}</h3>
            </div><!-- /.heading -->
          </div><!-- /.col-lg-10 -->
        </div><!-- /.row -->
        <div class="row">
          <div class="container">
            <div class="row" id="accordion">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="accordion-item" v-for="(type, typeName) in history" :key="typeName.replace(' ', '')">
                  <div class="accordion__header" data-toggle="collapse" :data-target="'#collapse' + typeName.replace(' ', '')">
                    <a class="accordion__title" @click.prevent>{{ typeName }}</a>
                  </div><!-- /.accordion-item-header -->
                  <div :id="'collapse' + typeName.replace(' ', '')" class="collapse" data-parent="#accordion">
                    <div class="accordion__body">
                      <hr>
                      <div class="col-sm-12 col-md-6 col-lg-6" v-for="item in type" :key="item.Id">
                        <div class="contact-info-box">

                          <h4 class="contact__info-box-title">{{ item.Title }}</h4>
                          <ul class="contact__info-list list-unstyled">
                            <li>
                              Endereço:
                              <p v-html="item.Address"></p>
                            </li>
                            <li>
                              Contactos:
                              <p v-html="item.Contacts"></p>
                            </li>
                          </ul><!-- /.contact__info-list -->
                        </div><!-- /.contact-info-box -->
                      </div><!-- /.contact-info-box -->
                    </div><!-- /.accordion-item-body -->
                  </div>
                </div>
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
          </div><!-- /.container -->
          <!--          <div class="col-12">-->
          <!--            <div class="jobs-container">-->
          <!--              &lt;!&ndash; career item #1 &ndash;&gt;-->
          <!--              <div class="job-item" v-for="(type, typeName) in history" :key="typeName">-->
          <!--                <div class="row">-->
          <!--                  <div class="col-sm-12 col-md-12 col-lg-4">-->
          <!--                    <h4 class="job__title">{{ typeName || 'Sem titulo' }}</h4>-->
          <!--                  </div>&lt;!&ndash; /.col-lg-4 &ndash;&gt;-->
          <!--                  <div class="col-sm-12 col-md-12 col-lg-8">-->
          <!--                    <section class="contact-info pt-0 pb-0">-->
          <!--                      <div class="container">-->
          <!--                        <div class="row" id="accordion">-->
          <!--                          &lt;!&ndash; Contact panel #1 &ndash;&gt;-->
          <!--                          <div class="col-sm-12 col-md-6 col-lg-6" v-for="item in type" :key="item.Id">-->
          <!--                            <div class="accordion-item">-->
          <!--                              <div class="accordion__header" data-toggle="collapse"-->
          <!--                                   :data-target="'#collapse' + item.Id">-->
          <!--                                <a class="accordion__title" @click.prevent>{{ item.Title }}</a>-->
          <!--                              </div>&lt;!&ndash; /.accordion-item-header &ndash;&gt;-->
          <!--                              <div :id="'collapse' + item.Id" class="collapse" data-parent="#accordion">-->
          <!--                                <div class="accordion__body">-->
          <!--                                  <ul class="contact__info-list list-unstyled">-->
          <!--                                    <li>-->
          <!--                                      Endereço:-->
          <!--                                      <p v-html="item.Address"></p>-->
          <!--                                    </li>-->
          <!--                                    <li>-->
          <!--                                      Contactos:-->
          <!--                                      <p v-html="item.Contacts"></p>-->
          <!--                                    </li>-->
          <!--                                  </ul>&lt;!&ndash; /.contact__info-list &ndash;&gt;-->
          <!--                                </div>&lt;!&ndash; /.accordion-item-body &ndash;&gt;-->
          <!--                              </div>-->
          <!--                            </div>-->
          <!--                          </div>&lt;!&ndash; /.col-lg-4 &ndash;&gt;-->
          <!--                        </div>&lt;!&ndash; /.row &ndash;&gt;-->
          <!--                      </div>&lt;!&ndash; /.container &ndash;&gt;-->
          <!--                    </section>-->
          <!--                  </div>&lt;!&ndash; /.col-lg-5 &ndash;&gt;-->
          <!--                </div>&lt;!&ndash; /.row &ndash;&gt;-->
          <!--              </div>&lt;!&ndash; /.job-item &ndash;&gt;-->
          <!--            </div>-->
          <!--          </div>&lt;!&ndash; /.col-lg-12 &ndash;&gt;-->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.careers -->
    <q-footer/>
  </div>
</template>

<script>
import QFooter from "@/components/Footer";
import QHeader from "@/components/Header/Header";
import QBreadCrumb from "@/components/BreadCrumb";

export default {
  name: "QLaw",
  components: { QBreadCrumb, QHeader, QFooter },
  data() {
    return {
      allItems: [],
      history: {},
      query: ''
    }
  },
  mounted() {
    window.mainExecution()

    this.$http.get("jurisdicao.json").then((data) => {
      this.allItems = data.data.d.results

      let newItem = {}
      let newItems = {}


      this.allItems.forEach((item) => {

        newItem = {
          Id: item.GUID,
          Type: item.Tipo_x0020_Jurisdicao,
          Title: item.Title,
          Address: item.Endereco,
          Contacts: item.Contactos,
          History: item.Historico
        }

        if (newItems[item.Tipo_x0020_Jurisdicao]) {
          newItems[item.Tipo_x0020_Jurisdicao].push(newItem)
        } else {
          newItems[item.Tipo_x0020_Jurisdicao] = [newItem]
        }
      })

      this.history = newItems
      this.allItems = newItems

    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
/*.accordion-item {*/
/*  border: 0px;*/
/*}*/
</style>
