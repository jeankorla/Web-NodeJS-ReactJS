import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefa-backend1.herokuapp.com'
})
 
export default api;
