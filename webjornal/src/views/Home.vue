<template>
  <div class="home">
    <h1>Desporto</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'desporto'}}">Ver mais</b-button>
    <div class="row">
    <b-card-group columns>
    <Noticia :noticias="noticias" tipo="desporto"/>
    </b-card-group>
    </div>
    <h1>Economia</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'economia'}}">Ver mais</b-button>
    <b-card-group columns>
    <Noticia :noticias="noticias" tipo="economia"/>
    </b-card-group>
    <h1>politica</h1>
    <b-button :to="{name: 'noticias', params:{tipo: 'politica'}}">Ver mais</b-button>
    <b-card-group columns>
    <Noticia :noticias="noticias" tipo="politica"/>
    </b-card-group>
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
