import Vue from 'vue'
import App from './App.vue'
import router from  './router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import echarts from 'echarts'
Vue.use(mavonEditor)
Vue.prototype.$echarts =echarts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
