import Vue from "vue"
import VueRouter from 'vue-router'

// 1. 安装插件
Vue.use(VueRouter);

const Home = () => import("../views/home/Home");
const Category = () => import("../views/Category/Category");
const Cart = () => import("../views/Cart/Cart");
const Profile = () => import("../views/Profile/Profile");

// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3. 导出router
export default router;