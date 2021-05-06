<template>
  <section class="page-section">
    <b-container>
      
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'addNoticia'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR NOTICIA</router-link>
          <router-link
            :to="{name:'admin'}"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      
      <!--TABLE
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  Noticia
                  <i class="fas fa-arrow-up" v-if="sortType===1" @click="sort()"></i>
                  <i class="fas fa-arrow-down" v-else  @click="sort()"></i>                
                  </th>
                <th scope="col">NÍVEL</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="question of questions" :key="question._id">
                <td  class="pt-4">{{question.question}}</td>
                <td class="pt-4">{{question.level}}</td>
                <td>
                  <router-link
                    :to="{name:'editQuestion', params:{questionId: question._id}}"
                    tag="button"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button
                    @click="viewQuestion(question._id)"
                    type="button"
                    class="btn btn-outline-warning mr-2"
                  ><i class="fas fa-search"></i> VER</button>
                  <button
                    @click="removeQuestion(question._id)"
                    type="button"
                    class="btn btn-outline-danger mr-2"
                  ><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
          <b-col cols="1"></b-col>
      </b-row>-->
    </b-container>
  </section>
</template>

<script>



export default {
  name: "ListQuestions",
   components: {
    
  },
  
  computed: {
    
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>
<style>
.green {
  color: green
}

.red {
  color: red
}
</style>