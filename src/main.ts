import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import 'tiny-slider'
import '@/js/utils/svg-loader'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
