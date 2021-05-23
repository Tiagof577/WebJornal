import API_URL from "./config.js";
import axios from "axios";

export const assinaturaService = {

    async fetchAssinaturas() {
        const res = await fetch(`${API_URL}/assinaturas`)
        
        const data = await res.json()
        return data.body
      },
    async fetchAssinatura(id) {
        const res = await fetch(`${API_URL}/assinaturas/${id}`, {
          method: 'GET',
        })
        const data = await res.json()
        return data.body
      },
      
      async addAssinatura(payload) {
        console.log(payload)
        axios.post(`${API_URL}/assinatura/add`, payload)
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
      async editAssinatura(payload) {
        console.log(payload)
        axios.post(`${API_URL}/assinaturas/update`, payload)
        .then(res => {
          this.error = '',res;
        }, err => {
          this.error = err.response.data.error
        })
        
      },
    
    

}



export default assinaturaService;