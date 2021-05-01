<template>
  <div>
    <b-card-group columns style="margin: 50px">
      <div :key="noticia._id" v-for="noticia in noticias">
        <b-link :to="{name: 'noticia', params:{noticiaId: noticia._id}}">
        <b-card
          :title="noticia.titulo"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-5"
        >
          <b-card-text>
            {{ noticia.description }}
          </b-card-text>
        </b-card>
        </b-link>
      </div>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "Noticias",
  props: {
    noticias: Array,
  },
};
</script>
