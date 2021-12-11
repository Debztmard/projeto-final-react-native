import axios from "axios";

 const Api = axios.create({
    baseURL: 'https://api-nossa-loja.herokuapp.com/'
});

export default Api;