import API_URL from "./config.js";

export const noticiasService = {

    async fetchNoticias() {
        const res = await fetch(`${API_URL}/noticias`)
        
        const data = await res.json()
        return data.body
      },
    async fetchNoticia(id) {
        const res = await fetch(`${API_URL}/noticias/${id}`, {
          method: 'GET',
        })
        const data = await res.json()
        console.log(data.body)
        return data.body
      },
      
      async addNoticia(payload) {
        const response = await fetch(`${API_URL}/noticias`, {
          method: "POST",
          body: JSON.stringify(payload)
        })
        if (response.ok) {
          return await response.json();
        } else {
          throw Error(handleResponses(response.status));
        }
      },
    

}
function handleResponses(code) {
  let message = ""
  switch (code) {
    case 401:
      message = "Não está autorizado a executar esta ação!"
      break;
    default:
      message = "Mensagem desconhecida"
      break;
  }
  return message
}
export default noticiasService;