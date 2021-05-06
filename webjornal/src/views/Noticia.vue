<template>
    <Noticia :noticia="noticia"/>
</template>
<script>
import Noticia from "@/components/Noticia"
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'noticia',
    components:{
        Noticia
    },
  computed: {
    ...mapGetters({
      noticia: "noticias/noticia"
    })
  },

  async created() {
    this.findNoticia(this.$route.params.noticiaId);
  },

  methods: {
    ...mapActions({
      findNoticia: "noticias/findNoticia"
    })
  }

}
</script>
