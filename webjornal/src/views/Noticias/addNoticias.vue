<template>
  <section class="page-section">
    <b-container>
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
              <input
                v-model="noticia.grupo"
                type="text"
                class="form-control"
                id="txtName"
                placeholder="seleciona o grupo"
                required
              />
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
            <button type="submit" class="btn btn-outline-success mr-2"><i class="fas fa-save"></i> GRAVAR QUESTÃO</button>
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
        grupo: '',
        corpo: '',
        description: '',
      },
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