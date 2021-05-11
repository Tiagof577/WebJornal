<template>
  <div class="home">
    <h1>Desporto</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'desporto'}}">Ver mais</b-button>
    <Noticia :noticias="noticias" tipo="desporto"/>
    <h1>Economia</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'economia'}}">Ver mais</b-button>
    <Noticia :noticias="noticias" tipo="economia"/>
    <h1>politica</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'politica'}}">Ver mais</b-button>
    <Noticia :noticias="noticias" tipo="politica"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Noticia from "@/components/Noticias"
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Noticia
  },
  computed: {
    ...mapGetters({
      noticias: "noticias/noticias"
    })
  },

  async created() {
    this.findNoticias();
  },

  methods: {
    ...mapActions({
      findNoticias: "noticias/findNoticias"
    })
  }
};
</script>
