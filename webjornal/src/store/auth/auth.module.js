import authService from "@/api/auth.service.js";

export default {
  namespaced: true,

   state: {
    token:
      localStorage.getItem("user_token") ||
      sessionStorage.getItem("user_token") ||
      "",
    profile: JSON.parse(
      localStorage.getItem("user_profile") ||
        sessionStorage.getItem("user_profile") ||
        "{}"
    )
  },
  
  // getters
   getters: {
    isUserLoggedIn: state => state.token != "",
    getProfileName: state => state.profile.name,
    getUserType: state => state.profile.type,
    getProfile: state => state.profile
  },
  
  // actions
   actions: {
   
    async registar({ commit }, payload) {
      
      try {
        await authService.registar(payload);
        commit("REGISTAR_SUCCESS");
      } catch (error) {
        commit("REGISTAR_ERROR", error);
      }
    },

    async login({ commit }, payload){
        await authService.login(payload)
        setTimeout(function(){ commit("AUTH_LOGIN_SUCCESS") }, 500);
        
    }
  },
  
  // mutations
   mutations: {
    AUTH_LOGIN_SUCCESS(state) {
      state.token = localStorage.getItem('user_token');
      state.profile = localStorage.getItem('user_profile');
    },
  
    AUTH_LOGOUT_SUCCESS(state){
      state.token = "";
      state.profile = {};
      localStorage.removeItem("user_token");
      localStorage.removeItem("user_profile");
    },
    REGISTAR_SUCCESS(state, data) {
      state.register = data;
    },
    REGISTAR_ERROR(state, message){
      state.message = message;
    }
  },


}


