import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/categories/create',
        // 路由懒加载
        component: (resolve) => {
          require(['@/views/CategoryEdit'], resolve)
        }
      },
      {
        // props为true，就会把id值传给对应的组件，组件中定义props接收即可使用
        path: '/categories/edit/:id',
        component: (resolve) => {
          require(['@/views/CategoryEdit'], resolve)
        },
        props: true
      },
      {
        path: '/categories/list',
        component: (resolve) => {
          require(['@/views/CategoryList'], resolve)
        }
      },

    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
