import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  Message from './utils/message'
import './utils/axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$message= new Message;
let $this=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default $this  
