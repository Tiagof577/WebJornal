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
          ><i class="fas fa-plus-square"></i> ADICIONAR FUNCIONARIO</router-link>
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
                <th scope="col">
                  Funcionario             
                  </th>
                <th scope="col">FUNCIONARIO</th>
                <th scope="col">ESCRITOR</th>
                <th scope="col">RECURSOS HUMANOS</th>
                <th scope="col">DIRETOR</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="funcionario of funcionarios" :key="funcionario._id">
                <td  class="pt-4">{{funcionario.name}}</td>
                <td class="pt-4">Autor</td>
                <td class="pt-4">Data</td>
                <td class="pt-4">Data</td>
                <td  class="pt-4">{{funcionario.group}}</td>
                <td>
                  <router-link
                    tag="button"
                    :to="{name:'editFuncionario', params:{funcionarioId: funcionario._id}}"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-edit"></i> EDITAR</router-link>
                  <router-link
                    :to="{name: 'funcionario', params:{funcionarioId: funcionario._id}}"
                    type="button"
                    class="btn btn-outline-warning mr-2"
                  ><i class="fas fa-search"></i> VER</router-link>
                  <button
                    @click="eliminar(funcionario._id)"
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
  name: "listFuncionarios",
  computed: {
    ...mapGetters({
      funcionarios: "funcionarios/funcionarios"
    })
  },

  async created() {
    this.findfuncionarios();
  },

  methods: {
    eliminar(id){
      console.log(id);
    },
    ...mapActions({
      findfuncionarios: "funcionarios/findFuncionarios"
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