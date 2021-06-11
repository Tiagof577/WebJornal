<template>
  <section class="page-section">
    <b-container>
      
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'addFuncionario'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR ASSINATURA</router-link>
          <router-link
            :to="{name:'admin'}"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      
      <!--TABLE-->
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">NOME</th>
                <th scope="col">NIF</th>
                <th scope="col">ULTIMO ANO PAGO</th>
                <th scope="col">DATA DE ASSINATURA</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="assinatura of assinaturas" :key="assinatura._id">
                <td  class="pt-4">{{assinatura.nome}}</td>
                <td class="pt-4">{{assinatura.nif}}</td>
                <td class="pt-4">{{assinatura.ano}}</td>
                <td  class="pt-4">{{assinatura.data_assinatura}}</td>
                <td>
                  <router-link
                    tag="button"
                    :to="{name:'pagamentoAssinatura', params:{assinaturaNIF: assinatura.nif}}"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-edit"></i> PAGAMENTO</router-link>
                  <button
                    @click="eliminar(assinatura._id)"
                    type="button"
                    class="btn btn-outline-danger mr-2"
                  ><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
          <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "listAssinaturas",
  computed: {
    ...mapGetters({
      assinaturas: "assinaturas/assinaturas"
    })
  },

  async created() {
    this.findassinaturas();
  },

  methods: {
    eliminar(id){
      console.log(id);
    },
    ...mapActions({
      findassinaturas: "assinaturas/findAssinaturas"
    })
  }
};
</script>
<style>
.green {
  color: green
}

.red {
  color: red
}
</style>