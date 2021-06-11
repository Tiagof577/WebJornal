<template>
    <div>
        <div v-if="assinaturas">
            <section class="page-section">
                <b-container>
                <b-card class="overflow-hidden mt-5" style="max-width: 1540px; ">
                    <b-row>
                    <b-col md="6" align="center">
                        <br />
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="PERFIL" align="center">
                        <b-card-text align="left">
                            <h5>Dados da assinatura</h5>
                            <strong>Nome:  </strong>
                            <br />
                            <strong>Data de assinatura:  </strong> 
                            <br />
                            <strong>NIF: </strong>
                            <br />
                            <br />
                            <h5>Conta</h5>                
                            <strong>Data de registo: </strong> 
                            <br />
                            <strong>Username: </strong> 
                            <br />
                            <br/>
                        </b-card-text>
                        <br />
                        <b-button variant="outline-success" class="mr-2 mt-2" :to="{ name: 'Updateuser',  }">
                            <i class="fas fa-user-edit"></i> EDITAR PERFIL
                        </b-button>
                        <b-button variant="outline-danger" class="mr-2 mt-2" @click="logout()">
                            <i class="fas fa-sign-out-alt"></i> LOGOUT
                        </b-button>
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
                </b-container>
            </section>
        </div>
        <div v-if="!assinaturas">
            <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background-image: url(img/theme/subscritionbackground.jpg); background-size: cover; background-position: center top;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-success opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row >
            <b-col lg="7" md="10">
              <h1 class="display-2" style="color:green">Subscrição</h1>
              <h2 class="mt-0 mb-5" style="color:green">Aproveite o sabor de noticias frescas no conforto do seu lar!
                  adequira a capacidade de receber o jornal fisico no seu lar por apenas 25€ por ano. 
                  Aproveite e assine já o nosso Jornal.
              </h2>
              <div>
  <b-button v-b-modal.modal-1>Subescrever</b-button>
  

  <b-modal id="modal-1" size="lg" title="Subscrição"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk">
    <b-form @submit.stop.prevent="handleSubmit">
      <b-form-group >
        <b-form-select
          v-model="form.anos"
          :options="ano"
          required
        ></b-form-select>
      </b-form-group>
        <b-form-group >
        <b-form-select
          v-model="form.metodo"
          :options="metodos"
          required
        ></b-form-select>
      </b-form-group>
    </b-form>
  </b-modal>
</div>
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
        </div>
    </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
import router from "@/router";
export default {
    props: ['user'],
    created() {
      this.findAssinatura(this.user.nif)
    },
    data(){
        return{
            assinaturas: false,
            form:{
                metodo: null,
                nome: '',
                nif: '',
                anos: null,
            },
            ano: [
          { value: null, text: 'Seleciona a subscrição' },
          { value: '2021', text: '2021 1 anos' },
          { value: '2022', text: '2022 2 anos' },
          { value: '2023', text: '2023 3 anos' },
          { value: '2024', text: '2024 4 anos' },
          { value: '2025', text: '2025 5 anos' },
        ],
            metodos: [
          { value: null, text: 'Seleciona uma opção' },
          { value: 'Paypall', text: 'Paypall' },
          { value: 'CartaoDeCredito', text: 'Cartão de Credito' },
          { value: 'Transferencia', text: 'Transferencia Bancaria' }
        ]
        }
    },
    computed: {
    ...mapGetters({
      assinatura: "assinaturas/assinatura",
      ass: "assinaturas/loading"
    })
  },
    methods: {
    ...mapActions({
      addAssinaturas: "assinaturas/addAssinatura",
      findAssinatura: "assinaturas/findAssinatura"
    }),
      checkFormValidity() {
        if(this.form.metodo===null){
            return null
        }else{
            return true
        }
      },
      resetModal() {
        this.form.metodo = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.form.nif = this.user.nif
        this.form.nome = this.user.name
        console.log(this.form)
        // Push the name to submitted names
        this.addAssinaturas(this.form)
        router.push("/");
        // Hide the modal manually
          this.$bvModal.hide('modal-prevent-closing')
      }
    }

}
</script>