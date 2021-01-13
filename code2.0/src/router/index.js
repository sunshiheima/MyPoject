import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wordOut',
    name: 'wordOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/wordOut/index.vue'),
    meta:{
      name:'word导出',
    }
  },
  {
    path: '/arcgisImg',
    name: 'arcgisImg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/arcgisImg/arcgisImg.vue'),
    meta:{
      name:'arcgis',
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
