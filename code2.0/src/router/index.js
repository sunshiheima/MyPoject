import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/wordOut",
    children: [
      {
        path: '/wordOut',
        name: 'wordOut',
        component: () => import(/* webpackChunkName: "wordOut" */ '../views/wordOut/index.vue'),
        meta: {
          name: 'word导出',
        }
      },
      {
        path: '/arcgisImg',
        name: 'arcgisImg',
        component: () => import(/* webpackChunkName: "arcgisImg" */ '../views/arcgisImg/arcgisImg.vue'),
        meta: {
          name: 'arcgis图片',
        }
      },
      {
        path: '/button',
        name: 'button',
        component: () => import(/* webpackChunkName: "button" */ '../views/button/button.vue'),
        meta: {
          name: '按钮',
        }
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "menu" */ '../views/menu/menu.vue'),
        meta: {
          name: '菜单',
        }
      },
      {
        path: '/imgTochBox',
        name: 'imgTochBox',
        component: () => import(/* webpackChunkName: "imgTochBox" */ '../views/imgTouchBox/imgTochBox.vue'),
        meta: {
          name: '图片框',
        }
      },
      {
        path: '/slicksort',
        name: 'slicksort',
        component: () => import(/* webpackChunkName: "imgTochBox" */ '../views/slicksort/slicksort.vue'),
        meta: {
          name: '拖拽',
        },
        children: [
          {
            path: '/testMenu',
            name: 'testMenu',
            component: () => import(/* webpackChunkName: "imgTochBox" */ '../views/slicksort/slicksort.vue'),
            meta: {
              name: '菜单子级test',
            },
          }
        ]
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
