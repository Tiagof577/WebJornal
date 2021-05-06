<template>
  <div class="home">
    <Noticia :noticias="noticias"/>
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
