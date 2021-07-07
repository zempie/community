import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/api';
import './plugins/firebase'
import './plugins/axios'


import 'tiny-slider'
import '@/script/utils/svg-loader'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./css/styles.css";
import 'remixicon/fonts/remixicon.css'
import Vuelidate from 'vuelidate'

export const bus = new Vue();

Vue.use(Vuelidate)
Vue.use(BootstrapVue)



Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
