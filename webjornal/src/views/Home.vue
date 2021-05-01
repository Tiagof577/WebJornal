<template>
  <div class="home">
    <Noticia :noticias="noticias"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Noticia from "@/components/Noticias"


export default {
  name: "Home",
  components: {
    Noticia
  },
  data() {
    return {
      noticias: [],
    }
  },methods: {
    async fetchNoticias() {
      const res = await fetch('http://localhost:8085/noticias')
      
      const data = await res.json()
      return data.body
    }
  },
  async created() {
    this.noticias = await this.fetchNoticias()
  },
};
</script>
