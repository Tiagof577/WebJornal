import Vue from "vue";
import Vuex from "vuex";
import moduleAuth from "./auth/auth.module";
import moduleNoticia from "./noticias/noticias.module";
import moduleFuncionario from "./funcionario/funcionarios.module";
import moduleUser from "./users/users.module";
import moduleAssinatura from "./assinatura/assinaturas.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: moduleAuth,
    noticias: moduleNoticia,
    funcionarios: moduleFuncionario,
    users: moduleUser,
    assinaturas: moduleAssinatura,
  }
});