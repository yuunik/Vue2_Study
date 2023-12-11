import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 封装全局自定义指令
// focus指令用于立即获取焦点
Vue.directive("focus", {
  inserted(el, binding) {
    el.focus();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
