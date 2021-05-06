import noticiasService from "@/api/noticias.service.js";

export default {
    namespaced: true,

    state: {
        loading: false,
        noticias: [],
        noticia: []
      },
    
      getters: {
        noticias: state => state.noticias || [],
        noticia: state => state.noticia || [],
        loading: state => !!state.loading
      },

      mutations: {
        NOTICIAS_STARTED(state) {
          state.loading = true;
        },
    
        NOTICIAS_SUCCESS(state, payload) {
          state.noticias = payload;
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
            state.noticia = payload;
            state.loading = false;
        },
      
        NOTICIA_ERROR(state, payload) {
            // eslint-disable-next-line
            console.error(payload);
            state.loading = false;
        },
      },
    
      actions: {
        async findNoticias({ commit }) {
          try {
            commit("NOTICIAS_STARTED");
            const noticias = await noticiasService.fetchNoticias();
            commit("NOTICIAS_SUCCESS", noticias);
          } catch (error) {
            commit("NOTICIAS_ERROR", error);
          }
        },
        async findNoticia({ commit }, payload) {
            try {
              commit("NOTICIA_STARTED");
              const noticia = await noticiasService.fetchNoticia(payload);
              console.log("hello");
              commit("NOTICIA_SUCCESS", noticia);
            } catch (error) {
              commit("NOTICIA_ERROR", error);
            }
          },
          async addNoticia({ commit }, payload) {
            try {
              await noticiasService.addNoticia(payload);
              commit("NOTICIAS_STARTED");
            } catch (error) {
              commit("NOTICIAS_STARTED", error);
            }
          },
      },


}