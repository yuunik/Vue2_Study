import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from "@/views/NotFound.vue";
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  // 路由模式设施
  mode: "history",
  routes: [
    // 路由重定向
    { name: "root", path: "/", redirect: "/home" },
    { name: "home", path: '/home', component: Home },
    // 若动态路由传参后面没有可选符 ? ,则该参数为必传值。没有该参数，则不会显示对应的页面组件
    { name: "search", path: '/search/:words?', component: Search },
    // Vue 路由 - 404， 用于处理 404 页面
    { path: "*", component: NotFound }
  ]
})

export default router
