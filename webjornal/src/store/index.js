import Vue from "vue";
import Vuex from "vuex";

import moduleAuth from "./auth/auth.module";
import moduleNoticia from "./noticias/noticias.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: moduleAuth,
    noticias: moduleNoticia,
  }
});
