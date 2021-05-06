import API_URL from "./config.js";
import axios from "axios";

export const authService = {
   login(payload) {
    axios.post(`${ API_URL }/auth`, payload)
    .then(res => {
      
      //if successfull
      if (res.status === 200) {
        localStorage.setItem('user_token', res.data.token)
        localStorage.setItem('user_profile', JSON.stringify(res.data.profile))
            return res.data;
      }
    }, err => {
      console.log(err.response);
      this.error = err.response.data.error
    })
         
  },
  /**
   * Registers a new user
   * @param {asd ads} payload
   */
  async registar(payload) {
    axios.post(`${API_URL}/users`, payload)
        .then(res => {
          this.error = '';
          console.log(res);
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
  },
  async getInfo(token) {
    const response = await fetch(`${API_URL}/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    return await response.json();
  }
};



export default authService;
