import funcionariosService from "@/api/funcionarios.service.js";

export default {
    namespaced: true,

    state: {
        loading: false,
        funcionarios: [],
        funcionario: []
      },
    
      getters: {
        funcionarios: state => state.funcionarios || [],
        funcionario: state => state.funcionario || [],
        loading: state => !!state.loading
      },

      mutations: {
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
      
        FUNCIONARIO_ERROR(state, payload) {
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
            commit("FUNCIONARIOS_SUCCESS", funcionarios);
          } catch (error) {
            commit("FUNCIONARIOS_ERROR", error);
          }
        },
        async findFuncionario({ commit }, payload) {
            try {
              commit("FUNCIONARIO_STARTED");
              const funcionario = await funcionariosService.fetchFuncionario(payload);
              commit("FUNCIONARIO_SUCCESS", funcionario);
            } catch (error) {
              commit("FUNCIONARIO_ERROR", error);
            }
          },
          async addFuncionario({ commit }, payload) {
            try {
              await funcionariosService.addFuncionario(payload);
              commit("FUNCIONARIOS_STARTED");
            } catch (error) {
              commit("FUNCIONARIOS_STARTED", error);
            }
          },
      },


}