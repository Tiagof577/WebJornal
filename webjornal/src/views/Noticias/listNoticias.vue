<template>
  <section class="page-section">
    <b-container>
      
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'addNoticia'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR NOTICIA</router-link>
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
                  Noticia             
                  </th>
                <th scope="col">Autor</th>
                <th scope="col">Grupo</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="noticia of noticias" :key="noticia._id">
                <td  class="pt-4">{{noticia.titulo}}</td>
                <td class="pt-4">Tiago</td>
                <td  class="pt-4">{{noticia.group}}</td>
                <td>
                  <router-link
                    tag="button"
                    :to="{name:'editNoticia', params:{noticiaId: noticia._id}}"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-edit"></i> EDITAR</router-link>
                  <router-link
                    :to="{name: 'noticia', params:{noticiaId: noticia._id}}"
                    type="button"
                    class="btn btn-outline-warning mr-2"
                  ><i class="fas fa-search"></i> VER</router-link>
                  <button
                    @click="eliminar(noticia._id)"
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
  name: "listNoticias",
  computed: {
    ...mapGetters({
      noticias: "noticias/noticias"
    })
  },

  async created() {
    this.findNoticias();
  },

  methods: {
    eliminar(id){
      console.log(id);
    },
    ...mapActions({
      findNoticias: "noticias/findNoticias"
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