<template>
  <section class="page-section">
    <b-container>

      <!--FORM-->
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <form @submit.prevent="iniciarsessao" :model="login">
            <div class="form-group">
              <input
                type="text"
                v-model="login.username"
                class="form-control form-control-lg"
                id="exampleInputEmail1"
                placeholder="escreve o teu username"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="login.password"
                class="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="escreve a tua password"
                required
              />
            </div>
            <button type="submit" class="btn btn-success mr-2">
              <i class="fas fa-sign-in-alt"></i> ENTRAR
            </button>
            <router-link
              :to="{ name: 'register' }"
              tag="button"
              class="btn btn-danger"
            >
              <i class="fas fa-file-signature"></i> REGISTAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "@/router";

export default {
  name: 'Login',
  data() {
    return {
      login:{
        username: '',
        password: '',
        error: '',
      },
    }
  },
  computed: {
    ...mapGetters("auth", ["getMessage"])
  },
  methods: {
    ...mapActions({
      logIn: "auth/login"
    }),

    async iniciarsessao() {
      this.logIn({ ...this.login });
      setTimeout(function(){router.push("/"); }, 1000);
      
     
    }
  }
}
</script>

