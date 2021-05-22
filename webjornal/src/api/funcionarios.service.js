import API_URL from "./config.js";
import axios from "axios";
import nifvalidation from "./nifvalidation"

export const noticiasService = {

    async fetchFuncionarios() {
        const res = await fetch(`${API_URL}/funcionarios`)
        
        const data = await res.json()
        return data.body
      },
    async fetchFuncionario(id) {
        const res = await fetch(`${API_URL}/funcionarios/${id}`, {
          method: 'GET',
        })
        const data = await res.json()
        return data.body
      },
      
      async addFuncionario(payload) {
        console.log(payload)
        axios.post(`${API_URL}/funcionarios/add`, payload)
        .then(res => {
          this.error = '',res;
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
        
      },
      /*async editNoticia(payload) {
        
        const response = await fetch(`${API_URL}/noticias/update`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.parse(JSON.stringify(payload))
        })
        if (response.ok) {
          return await response.json();
        } else {
          throw Error(handleResponses(response.status));
        }
      },*/
      async editNoticia(payload) {
        console.log(payload)
        axios.post(`${API_URL}/noticias/update`, payload)
        .then(res => {
          this.error = '',res;
        }, err => {
          this.error = err.response.data.error
        })
        
      },
    
      async createFuncionario(payload) {
        const nifvalid = await nifvalidation.nifvalidation(payload);
        return nifvalid

      }
    

}



export default noticiasService;