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
          <div class="col-12">
            <div class="jobs-container">
              <!-- career item #1 -->
              <div class="job-item" v-for="(type, typeName) in history" :key="typeName">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-4">
                    <h4 class="job__title">{{ typeName || 'Sem titulo' }}</h4>
                  </div><!-- /.col-lg-4 -->
                  <div class="col-sm-12 col-md-12 col-lg-8">
                    <section class="contact-info pt-0 pb-70">
                      <div class="container">
                        <div class="row">
                          <!-- Contact panel #1 -->
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
                          </div><!-- /.col-lg-4 -->
                        </div><!-- /.row -->
                      </div><!-- /.container -->
                    </section>
                  </div><!-- /.col-lg-5 -->
                </div><!-- /.row -->
              </div><!-- /.job-item -->
            </div>
          </div><!-- /.col-lg-12 -->
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

</style>
