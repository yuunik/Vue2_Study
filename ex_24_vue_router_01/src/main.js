import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from "vue-router";
import FindMusic from "@/views/FindMusic.vue";
import MyMusic from "@/views/MyMusic.vue";
import MyFriend from "@/views/MyFriend.vue";
// VueRouter 插件初始化
Vue.use(VueRouter);

const router = new VueRouter({
  // 路由规则
  routes: [
    {
      path: "/find",
      component: FindMusic
    },
    {
      path: "/my",
      component: MyMusic
    },
    {
      path: "/friend",
      component: MyFriend
    }
  ]
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
