<template>
  <section class="contact-layout2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="contact-panel d-flex flex-wrap">
            <div class="stats-banner contact-panel__info d-flex flex-column justify-content-between">
              <div class="bg-img"><img src="assets/images/backgrounds/1.jpg" alt="banner"></div>
              <div>
                <h4 class="stats-banner__ttile mb-20">O nosso canal digital permite uma melhor cobertura e transparência
                  de modo que possa-se tornar visivel os resultados do TA.
                </h4>
              </div>
            </div><!-- /.stats-banner-->
            <form class="contact-panel__form" method="post" @submit.prevent="submit()" id="contactForm">
              <div class="row">
                <div class="col-sm-12">
                  <div class="alert alert-danger" v-show="error">{{ error }}</div>
                  <div class="alert alert-success" v-show="success">{{ success }}</div>
                  <h4 class="contact-panel__title">Submeter uma questão</h4>
                  <p class="contact-panel__desc mb-20">Use o nosso canal digital para submeter as suas questões ao
                    Tribunal Admnistrativo, a nossa equipa irá entrar em contacto por email.</p>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nome" id="contact-name" name="contact-name"
                           v-model="denuncia.Nome"
                           required>
                  </div>
                </div><!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" id="contact-email"
                           v-model="denuncia.Email"
                           name="contact-email" required>
                  </div>
                </div><!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <select class="form-control" v-model="denuncia.Title">
                     
                      <option v-for="(area, index) in areas" :key="index" :selected="area.Title == denuncia.Tipo"
                              :value="area.Title">
                        {{ area.Title }}
                      </option>
                    </select>
                  </div>
                </div><!-- /.col-lg-6 -->
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="form-group">
                    <input type="number" class="form-control" placeholder="Telefone" id="contact-Phone"
                           v-model="denuncia.Telefone"
                           name="contact-phone" required>
                  </div>
                </div><!-- /.col-lg-6 -->
                <div class="col-12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Assunto"
                           v-model="denuncia.Assunto" required>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                      <textarea class="form-control" placeholder="Descreva a sua submissão!" required
                                v-model="denuncia.Descri_x00e7__x00e3_o" id="contact-message"
                                name="contact-message"></textarea>
                  </div>
                  <button @click.prevent="submit()" class="btn btn__secondary btn__icon btn__xhight mt-10">
                    <span>Submeter</span> <i class="icon-arrow-right"></i>
                  </button>
                </div><!-- /.col-lg-12 -->
              </div><!-- /.row -->
            </form><!-- /.contact-panel__form -->
          </div>
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section><!-- /.contact layout 2 -->
</template>

<script>
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv'
dotenv.config();
export default {
  name: "QContact",
  methods: {
    submit() {
      let valid = true;
      this.error = "";
      this.success = "";

      for (const [key, value] of Object.entries(this.denuncia)) {
        if (value == "") {
          valid = false;
          console.log(key);
          break;
        }
      }

      if (valid) {
       
        this.$http
          .post(process.env.VUE_APP_ROOT_SUBMIT + "/denuncias", this.denuncia)
          .then(() => {
            this.success = "Dados submetidos com sucesso";
            this.sendEmail();
            this.clear();
          })
          .catch((error) => {
            console.log(error);

            this.error = "Não foi possível submeter a informação.";
          });
        //enviar email
      } else {
        this.error = "Preencha todos os campos antes de submeter a informação.";
      }
    },
    clear() {
      this.denuncia = {
        Assunto: "",
        Nome: "",
        Email: "",
        Telefone: "",
        Title: "Denúncia",
        Descri_x00e7__x00e3_o: "",
      };
    },
    sendEmail() {
      try {
        //emailjs.init(process.env.EMAILJS_PUBLIC_KEY); 
        emailjs.init('yytkK3EOJG8Mmeuk_'); 
        emailjs
          .send('service_js218vk','template_s5srp5j', {
         // .send(process.env.EMAILJS_SERVICE_ID,process.env.EMAILJS_TEMPLATE_ID, {
            name: this.denuncia.Nome,
            email: this.denuncia.Email,
            message: "A sua "+this.denuncia.Title+", foi submetida com sucesso!"
            

          })
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      } catch (error) {
        console.log({ error });
      }
      
    },
  },
  data() {
    return {
      areas: [],
      error: "",
      success: "",
      denuncia: {
        Assunto: "",
        Nome: "",
        Email: "",
        Telefone: "",
        Title: "Denúncia",
        Descri_x00e7__x00e3_o: "",
      },
    };
  },

  mounted() {
      console.log("publickey "+process.env.EMAILJS_PUBLIC_KEY);
    this.$http
      .get("denuncias.json")
      .then((data) => {
        this.areas = data.data.d.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
</style>
