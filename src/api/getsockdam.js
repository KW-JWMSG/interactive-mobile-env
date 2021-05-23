import axios from 'axios'
axios.defaults.baseURL = '';

export const getMessage = async ()=>{
    return await axios.get("/api/sockdam").then(res=>res.data)
}
