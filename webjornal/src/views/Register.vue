<template>
  <section class="page-section">
    <b-container>

      <!--FORM--><b-row>
        <b-col cols="4"></b-col>
        <b-col cols="4">
          <form @submit.prevent="register" :model="user">
            <div class="form-group">
              <input
                v-model="user.email"
                type="email"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve o teu E-mail"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve o teu nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.nif"
                type="number"
                class="form-control form-control-lg"
                id="Nif"
                placeholder="escreve o NIF"
                required
              />
            </div>
            <div class="form-group">
              <b-form-datepicker 
                id="birth_date" 
                class="mb-2"
                v-model="user.birth_date"
                type="text"
                onmouseenter="(this.type='date')"
                onmouseleave="(this.type='text')"
                placeholder="escreve a tua data de nascimento"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.username"
                type="text"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve o teu username"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="user.password"
                type="password"
                class="form-control form-control-lg"
                id="txtPassword"
                placeholder="escreve  a tua password"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                id="txtConfirmPassword"
                placeholder="confirma a tua password"
              />
            </div>
            <button type="submit" class="btn btn-success mr-2">
              <i class="fas fa-file-signature"></i> REGISTAR
            </button>
            <router-link
              :to="{ name: 'login' }"
              tag="button"
              class="btn btn-danger"
            >
              <i class="fas fa-window-close"></i> CANCELAR</router-link
            >
          </form>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </b-container>
  </section>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
data() {
    return {
      user: {
        name: '',
        username: '',
        tipo: 'user',
        email: '',
        password: '',
        birth_date: '',
        error: '',
      },
    }
  },
    methods: {
    ...mapActions({
      registar: "auth/registar"
    }),

    async register() {
     if (
        document.querySelector("#txtPassword").value !==
        document.querySelector("#txtConfirmPassword").value
      ) {
        this.$alert(
          "Campos password não coincidem",
          "Erro de validação do formulário",
          "error"
        );
      } else {
        this.registar({ ...this.user });
        this.$router.push('/login');
      }
    }
  }
};
</script>
