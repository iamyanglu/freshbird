import  Vue from 'vue'
import Router from  'vue-router'
const index =()=> import('@/views/index/index')
const part =()=> import('@/views/publishArt/pArt')
Vue.use(Router)
const routes=[
    {
        path:'',
        redirect:'/index'
    },
    {
        path:'/index',
        component:index
    },
    {
        path:'/admin',
        component:part
    }
]
const router = new Router({
    routes,
    mode:'history'

})
export default router