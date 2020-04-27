import  axios from 'axios'

export function putimage(config) {

    let request = axios.create({
        baseURL:'http://127.0.0.1:2000'
    })
    return request(config)


}
export function putArt(obj) {

    let request = axios.create({
        baseURL:'http://127.0.0.1:2000',
        timeout:5000,
        method:'post'
    })
  return   request({
        url:'/put',
        method:'post',

        headers:{
            'Content-type':'application/x-www-form-urlencoded'
        },
        data:obj
    })




}
