<template>
<section>
    <div class="container">
        <div class="heading">
            <h2>{{ noticia.titulo }}</h2>
        </div>
        <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        <div class="row">
            <div class="col-12 col-md-6 offset-md-1 info">
                <p>{{ noticia.corpo }}</p>
            </div>
            <div class="col-12 col-md-3 offset-md-1 meta">
                <div class="tags">
                    <span class="meta-heading">Tags<br></span>
                    <a href="#">{{ noticia.group }}<br></a>
                    <span class="meta-heading">Data<br></span>
                    <span>25-04-2017</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    name: "Noticia",
    props: {
    noticia: Array,
  },
}
</script>