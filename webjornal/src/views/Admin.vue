<template>
  <section class="page-section">
    <b-container fluid>
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <b-card-group deck>
            <AdminOptionBox routeName="listFuncionarios" iconName="users" title="Funcionarios"/>
            <AdminOptionBox routeName="listNoticias" iconName="far fa-newspaper"  title="Noticias"/>
          </b-card-group>
          <b-card-group deck class="mt-3">
            <AdminOptionBox routeName="listAssinaturas" iconName="far fa-edit"  title="Assinaturas"/>
          </b-card-group>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AdminOptionBox from "@/components/AdminOptionBox.vue";
export default {
    name:'Admin',
  components: {
    AdminOptionBox,
  }
};
</script>