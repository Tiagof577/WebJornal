<template>
    <Noticia :noticia="noticia"/>
</template>
<script>
import Noticia from "@/components/Noticia"

export default {
    name: 'noticia',
    components:{
        Noticia
    },
    data() {
    return {
      noticia: [],
    }
  },methods: {
    async fetchNoticia(id) {
      const res = await fetch(`http://localhost:8085/noticias/${id}`, {
        method: 'GET',
      })
      
      const data = await res.json()
      console.log(data.body)
      return data.body
    }
  },
    async created() {
        this.noticia = await this.fetchNoticia(this.$route.params.noticiaId);
    },
}
</script>
