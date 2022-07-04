/*
 * @Author: your name
 * @Date: 2021-06-21 09:58:54
 * @LastEditTime: 2021-11-26 16:18:13
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vwrem_appd:\sunshiheima\myStudy\MyPoject\vueApp+vw+rem\vwremjs\vwrem\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
