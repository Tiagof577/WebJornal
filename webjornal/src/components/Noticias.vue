<template>
  <div>
      <div :key="noticia._id" v-for="noticia in noticias">
        <div v-if="noticia.group===tipo">
          <b-link :to="{name: 'noticia', params:{noticiaId: noticia._id}}">
    <b-card :title="noticia.titulo" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top style="width:250px">
      <b-card-text>
        {{noticia.description}}
      </b-card-text>
    </b-card>
          </b-link>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Noticias",
  props: {
    noticias: Array,
    tipo: String,
  },
};
</script>
