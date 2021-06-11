import funcionariosService from "@/api/funcionarios.service.js";
import usersService from "@/api/users.service.js";

export default {
    namespaced: true,

    state: {
        loading: false,
        funcionarios: [],
        funcionario: [],
        conta: [],
        nifvalid: {
          nif: '',
          verify: null,
          msg: '',
        }
      },
    
      getters: {
        funcionarios: state => state.funcionarios || [],
        funcionario: state => state.funcionario || [],
        conta: state => state.conta || [],
        loading: state => !!state.loading,
        nif_valid: state => state.nifvalid,
      },

      mutations: {
        FUNCIONARIO_CONTA(state, payload){
          state.conta = payload
        },
        FUNCIONARIO_S_CONTA(state){
          state.conta = null;
        },
        NIF_VALIDATION(state, payload){
          state.nifvalid.verify = payload.nifvalid.verify
          state.nifvalid.msg = payload.nifvalid.msg
          state.nifvalid.nif = payload.nifvalid.nif
        },
        FUNCIONARIOS_STARTED(state) {
          state.loading = true;
        },
    
        FUNCIONARIOS_SUCCESS(state, payload) {
          state.funcionarios = payload;
          state.loading = false;
        },
    
        FUNCIONARIOS_ERROR(state, payload) {
          // eslint-disable-next-line
          console.error(payload);
          state.loading = false;
        },
        FUNCIONARIO_STARTED(state) {
            state.loading = true;
        },
      
        FUNCIONARIO_SUCCESS(state, payload) {
            state.funcionario = payload;
            state.loading = false;
        },
      
        FUNCIONARIO_ERROR(state) {
            // eslint-disable-next-line
            console.error(payload);
            state.loading = false;
        },
      },
    
      actions: {
        async editFuncionario(payload){
            await funcionariosService.editFuncionario(payload);
          
        },
        async findFuncionarios({ commit }) {
          try {
            commit("FUNCIONARIOS_STARTED");
            const funcionarios = await funcionariosService.fetchFuncionarios();
            console.log(funcionarios[0])
            commit("FUNCIONARIOS_SUCCESS", funcionarios);
          } catch (error) {
            commit("FUNCIONARIOS_ERROR", error);
          }
        },
        async findFuncionario({ commit }, payload) {
            try {
              const funcionario = await funcionariosService.fetchFuncionario(payload);
              commit("FUNCIONARIO_SUCCESS", funcionario);
            } catch (error) {
              commit("FUNCIONARIO_ERROR", error);
            }
          },
          async createFuncionario({ commit }, payload){
            commit("FUNCIONARIO_STARTED");
            const nifvalid = await funcionariosService.createFuncionario(payload);
            commit("NIF_VALIDATION", nifvalid)
            const user = await usersService.fetchUser(payload);
            console.log(user);
            if(user){
              commit("FUNCIONARIO_CONTA", user)
            }else{
              commit("FUNCIONARIO_S_CONTA")
            }
            
          },
          async addFuncionario({ commit }, payload) {
            commit("FUNCIONARIO_STARTED");
            
            try {
              await funcionariosService.addFuncionario(payload);
              commit("FUNCIONARIOS_STARTED");
            } catch (error) {
              commit("FUNCIONARIOS_STARTED", error);
            }
          },
      },


}