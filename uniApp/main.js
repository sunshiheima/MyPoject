import Vue from 'vue'
import App from './App'
import  "./utils/tool.js";
import  "./utils/request.js";
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
