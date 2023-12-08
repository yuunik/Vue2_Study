// 核心作用: 导入 App.vue, 基于 App.vue 创建结构, 渲染index.html
// 导入 Vue 核心包
import Vue from 'vue'
// 导入 App.vue 根组件
import App from './App.vue'

// 提示: 当前处于什么环境(生产环境 / 开发环境)
Vue.config.productionTip = false

// Vue 实例化, 提供 render 方法, 基于 App.vue 创建结构渲染 index.html
new Vue({
  // el: "#app", 作用： 和$mount("选择器")作用一致, 用于指定 Vue 所管理的容器
  // 基于 App 创建元素结构
  render: h => h(App),
}).$mount('#app')
