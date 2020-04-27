import axios from  'axios'
let  request  = axios.create({
    baseURL:'http://127.0.0.1:2000'
})
export function requestInfo() {
    return  request

}