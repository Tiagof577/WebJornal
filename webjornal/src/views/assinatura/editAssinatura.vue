<template>
  <section class="page-section">
    <b-container>
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'listAssinaturas'}"
            tag="button"
            class="btn btn-outline-primary mr-2 mt-2"
          ><i class="fas fa-chevron-left"></i> Voltar</router-link>
          <router-link
            :to="{name:'admin'}"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <b-form @submit.prevent="update">
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
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import router from '@/router'
export default {
    data(){
        return{
            form:{
                metodo: null,
                nif: '',
                anos: null,
            },
            ano: [
          { value: null, text: 'Seleciona a subscrição' },
          { value: '2021', text: '2021 1 anos', disabled: true},
          { value: '2022', text: '2022 2 anos' },
          { value: '2023', text: '2023 3 anos' },
          { value: '2024', text: '2024 4 anos' },
          { value: '2025', text: '2025 5 anos' },
        ],
            metodos: [
          { value: null, text: 'Seleciona uma opção' },
          { value: 'Dinheiro', text: 'Dinheiro' },
          { value: 'Paypall', text: 'Paypall' },
          { value: 'CartaoDeCredito', text: 'Cartão de Credito' },
          { value: 'Transferencia', text: 'Transferencia Bancaria' }
        ]
        }
    },
  
  methods: {
      ...mapActions({
      editAssinatura: "assinaturas/editAssinatura",
      findAssinatura: "assinaturas/findAssinatura"
    }),
    update() {
        this.form.nif = this.$route.params.assinaturaNIF
        this.editAssinatura(JSON.parse(JSON.stringify(this.form.anos)))
        .then(
        () => {
          router.push({name: 'listAssinaturas'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        });
    }
  },
  computed: {
    ...mapGetters({
      assinatura: "assinaturas/assinatura"
    })
  },

  async created() {
    await this.findAssinatura(this.$route.params.assinaturaNIF);
  },


};
</script>
