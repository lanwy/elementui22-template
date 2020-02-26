import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css' // global css
import App from './App.vue'
import router from './router'
import store from './store'
//import './permission' // 角色权限控制
import i18n from './i18n'

import './utils/error-log' // error log

const { mockXHR } = require('./mock')
mockXHR()

Vue.use(ElementUI)

import elementui22 from 'elementui22'
Vue.use(elementui22)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
