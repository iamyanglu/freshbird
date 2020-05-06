import Vue from 'vue'
import vuex from  'vuex'
Vue.use(vuex)
const store = new vuex.Store({
    state:{

        isLog:false
    },
    mutations:{
        log(state)
        {
            this.state.isLog=true
        }
    },
    actions:{},
    getters:{},
    modules:{}



}



)

export  default  store