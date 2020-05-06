import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import mavonEditor from 'mavon-editor'
import store from  './store'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.config.productionTip = false
Vue.config.productionSourceMap=false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
