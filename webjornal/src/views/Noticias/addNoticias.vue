<template>
  <section class="page-section">
    <b-container>
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'listNoticias'}"
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
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="noticia.titulo"
                type="text"
                class="form-control"
                id="txtName"
                placeholder="escreve o Titulo"
                required
              />
            </div>
            <div class="form-group">
              <b-form-select required v-model="noticia.grupo" :options="options"  class="mt-3"></b-form-select>
            </div>
            <div class="form-group">
              <textarea
                id="txtDescription"
                class="form-control"
                placeholder="escreve uma descrição"
                cols="30"
                rows="10"
                v-model="noticia.description"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <textarea
                id="txtCorpo"
                class="form-control"
                placeholder="corpo da noticia"
                cols="30"
                rows="10"
                v-model="noticia.corpo"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-outline-success mr-2"><i class="fas fa-save"></i> GRAVAR </button>
            <router-link
              :to="{name: 'listNoticias'}"
              tag="button"
              class="btn btn-outline-danger"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
   data() {
    return {
      noticia: {
        titulo: '',
        grupo: null,
        corpo: '',
        description: '',
      },
      options: [
          { value: null, text: 'seleciona o grupo' },
          { value: 'desporto', text: 'Desporto' },
          { value: 'economia', text: 'Economia' },
          { value: 'politica', text: 'Politica' }
        ],
    }
  },
  methods: {
      add() {
          console.log(this.$data)
        this.addNoticia(this.$data)
        .then(
        () => {
          router.push({name: 'listNoticias'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    ...mapActions({
      addNoticia: "noticias/addNoticia"
    }),
  },
}
</script>