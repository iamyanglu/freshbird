import  Vue from 'vue'
import Router from  'vue-router'
const index =()=> import('@/views/index/index')
const part =()=> import('@/views/publishArt/pArt')
const detail =()=> import('@/views/detail/detail')
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
    },
    {
        path:'/detail/:id',
        component:detail
    }
]
const router = new Router({
    routes,
    mode:'history'

})
export default router