<template>
  <section class="page-section">
    <b-container>
      <b-card class="overflow-hidden mt-5" style="max-width: 1540px; ">
        <b-row>
          <b-col md="6" align="center">
            <br />
          </b-col>
          <b-col md="6">
            <b-card-body title="PERFIL" align="center">
              <b-card-text align="left">
                <h5>Dados pessoais</h5>
                <strong>Nome: {{user.name}} </strong>
                <br />
                <strong>Data de nascimento:  {{setCurrentDateTime(user.birth_date)}}</strong> 
                <br />
                <strong>NIF: {{user.nif}}</strong>
                <br />
                <br />
                <h5>Conta</h5>                
                <strong>Data de registo: {{setCurrentDateTime(user.registration_date)}}</strong> 
                <br />
                <strong>Username: {{user.username}}</strong> 
                <br />
                <br/>
                
                
              </b-card-text>
              <br />
              <b-button variant="outline-success" class="mr-2 mt-2" :to="{ name: 'Updateuser', params:{user: user} }">
                <i class="fas fa-user-edit"></i> EDITAR PERFIL
              </b-button>
              <b-button variant="outline-danger" class="mr-2 mt-2" @click="logout()">
                <i class="fas fa-sign-out-alt"></i> LOGOUT
              </b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </section>
</template>

<script>

export default {
    props:['user'],
    methods: {
    setCurrentDateTime(paramDate) {
      const date = new Date(paramDate);
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay();
    },
    logout() {
      this.$confirm(
        "Se sim, clique em OK",
        "Queres mesmo sair?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.commit(`auth/AUTH_LOGOUT_SUCCESS`);
          this.$router.push("/").catch(()=>{});
        },
        () => {
          this.$alert("Estás de volta!", "Informação", "info");
        }
      );
    },
},
}


</script>
