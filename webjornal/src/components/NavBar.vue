<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" class="ml-5">
        <router-link
          to="/"
          tag="img"
          :src="require('@/assets/img/logo.png')"
          style="width: 250px; height: 50px"
          title="Página principal"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-item>ANIMAIS</b-nav-item
          ><!-- :to="{ name: 'animals' }" :disabled="!isUserLoggedIn" -->
          <b-nav-item>QUIZZES</b-nav-item
          ><!--:to="{ name: 'quizzes' }"  :disabled="!isUserLoggedIn" -->
          <b-nav-item>CONTACTOS</b-nav-item>
          <!-- to="#contacts" -->

          <div v-if="isUserLoggedIn">
            <b-nav-item-dropdown id="dropdown-1" text="Conta" class="m-md-2">
          <b-dropdown-item>Perfil</b-dropdown-item>
    <b-dropdown-item>Assinatura</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item @click="logout()">log Out</b-dropdown-item>
    <div v-if="getUserType !== 'user'">
      <b-dropdown-item :to="{ name: 'admin' }">ADMIN</b-dropdown-item>
    </div>
    </b-nav-item-dropdown>
          </div>
          <div v-if="!isUserLoggedIn">
            <b-nav-item :to="{ name: 'login' }">LOGIN</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  },
  methods: {
    logout() {
      this.$confirm(
        "Se sim, clique em OK",
        "Queres mesmo sair do Animalec?",
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
}
}
</script>
