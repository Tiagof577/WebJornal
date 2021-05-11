<template>
  <div class="home">
    <h1>{{tipo}}</h1>
     <Noticia :noticias="noticias" :tipo="tipo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Noticia from "@/components/Noticias"
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  props:['tipo'],
  
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
