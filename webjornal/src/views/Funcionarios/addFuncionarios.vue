<template>
  <section class="page-section">
    <b-container>
      <!--MENU DE TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'listFuncionarios'}"
            tag="button"
            class="btn btn-outline-primary mr-2 mt-2"
          ><i class="fas fa-chevron-left"></i> Voltar</router-link>
          <router-link
            :to="{name:'admin'}"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
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
                type="text"
                class="form-control form-control-lg"
                id="nif"
                placeholder="NIF"
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
            <b-form-select v-model="user.tipo" :options="options"  class="mt-3"></b-form-select>
            </div>
            <div class="form-group">
              <input
                v-model="user.username"
                type="text"
                class="form-control form-control-lg"
                id="txtusername"
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


            <button type="submit" class="btn btn-outline-success mr-2"><i class="fas fa-save"></i> GRAVAR </button>
            <router-link
              :to="{name: 'listFuncionarios'}"
              tag="button"
              class="btn btn-outline-danger"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
   data() {
    return {
      user: {
        name: '',
        username: '',
        tipo: null,
        nif: '',
        email: '',
        password: '',
        birth_date: '',
        error: '',
      },
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'funcionario', text: 'Funcionario' },
          { value: 'admin', text: 'Administrador' },
          { value: 'user', text: 'User' }
        ]
    }
  },
  methods: {
      add() {
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
        this.addFuncionario(this.$data)
        .then(
        () => {
          router.push({name: 'listFuncionarios'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
      }
        
    },
    ...mapActions({
      addFuncionario: "funcionarios/addFuncionario",
      registar: "auth/registar"
    }),
  },
}
</script>