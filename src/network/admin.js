import  axios from 'axios'

export function putimage(config) {

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000'
    })
    return request(config)


}
export function putArt(obj) {

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,
        method:'post'
    })
  return   request({
        url:'/put',
        method:'post',

        headers:{
            'Content-type':'application/json'
        },
        data:obj
    })
}

export function getart(Apage){
    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,

    })
    return request({
            url:'/getart',
       params:{
            page:Apage
       }

    })
}
export function getartByid(id){

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,
    })
    return request({
        url:'/qid',
        params:{
            id:id
        }
    })

}
export function addSuport(id){

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,
    })
    return request({
        url:'/addPrase',
        params:{
            id:id
        }

    })
}  //添加点赞
export function addViews(id){

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,
    })
    return request({
        url:'/addViews',
        params:{
            id:id
        }

    })
} //添加观看
//查询文章总数
export function total(id){

    let request = axios.create({
        baseURL:'http://49.235.121.158:2000',
        timeout:5000,
    })
    return request({
        url:'/total',

    })
}