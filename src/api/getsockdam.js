import axios from 'axios'
axios.defaults.baseURL = 'http://api.jwmsg.kr/';

export const getMessage = async ()=>{
    return await axios.get("/api/sockdam").then(res=>res.data)
}
