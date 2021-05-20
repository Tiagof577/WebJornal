import API_URL from "./config.js";
import axios from "axios";

export const noticiasService = {

    async fetchNoticias() {
        const res = await fetch(`${API_URL}/noticias`)
        
        const data = await res.json()
        return data.body
      },
    async fetchUser(nif) {
        const res = await fetch(`${API_URL}/users/${nif}`, {
          method: 'GET',
        })
        if(res){
        const data = await res.json()
        return data.body
      }else{
        return null
      }
      },
      
      async addNoticia(payload) {
        console.log(payload)
        axios.post(`${API_URL}/noticias/add`, payload)
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
    
    

}



export default noticiasService;