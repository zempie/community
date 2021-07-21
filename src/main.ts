import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/api';
import './plugins/firebase'
import './plugins/axios'


import 'tiny-slider'
import '@/script/utils/svg-loader'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import "./css/styles.css";
import 'remixicon/fonts/remixicon.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)

export const bus = new Vue();




Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
