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
          <form @submit.prevent="update">
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
                v-model="noticia.group"
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
import { mapActions, mapGetters } from "vuex";
import router from '@/router'
export default {
    
  
  methods: {
      ...mapActions({
      findNoticia: "noticias/findNoticia",
      editNoticia: "noticias/editNoticia"
    }),
    update() {
        
        this.editNoticia(JSON.parse(JSON.stringify(this.noticia)))
        .then(
        () => {
          router.push({name: 'listNoticias'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        });
    }
  },
  computed: {
    ...mapGetters({
      noticia: "noticias/noticia"
    })
  },

  async created() {
    await this.findNoticia(this.$route.params.noticiaId);
  },


};
</script>
