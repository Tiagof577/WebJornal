import assinaturaService from "@/api/assinaturas.service.js";

export default {
    namespaced: true,

    state: {
        loading: false,
        assinaturas: [],
        assinatura: []
      },
    
      getters: {
        assinaturas: state => state.assinaturas || [],
        assinatura: state => state.assinatura || [],
        loading: state => !!state.loading
      },

      mutations: {
        NOTICIAS_STARTED(state) {
          state.loading = true;
        },
    
        NOTICIAS_SUCCESS(state, payload) {
          state.assinaturas = payload;
          state.loading = false;
        },
    
        NOTICIAS_ERROR(state, payload) {
          // eslint-disable-next-line
          console.error(payload);
          state.loading = false;
        },
        NOTICIA_STARTED(state) {
            state.loading = true;
        },
      
        NOTICIA_SUCCESS(state, payload) {
            state.assinatura = payload;
            state.loading = false;
        },
      
        NOTICIA_ERROR(state, payload) {
            // eslint-disable-next-line
            console.error(payload);
            state.loading = false;
        },
      },
    
      actions: {
        async editAssinatura(payload){
            await assinaturaService.editAssinatura(payload);
          
        },
        async findAssinaturas({ commit }) {
          try {
            commit("NOTICIAS_STARTED");
            const assinaturas = await assinaturaService.fetchAssinatura();
            commit("NOTICIAS_SUCCESS", assinaturas);
          } catch (error) {
            commit("NOTICIAS_ERROR", error);
          }
        },
        async findAssinatura({ commit }, payload) {
            try {
              commit("NOTICIA_STARTED");
              const assinatura = await assinaturaService.fetchAssinatura(payload);
              commit("NOTICIA_SUCCESS", assinatura);
            } catch (error) {
              commit("NOTICIA_ERROR", error);
            }
          },
          async addAssinatura({ commit }, payload) {
            try {
              await assinaturaService.addAssinatura(payload);
              commit("NOTICIAS_STARTED");
            } catch (error) {
              commit("NOTICIAS_STARTED", error);
            }
          },
      },


}