import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 注册自定义指令
Vue.directive("focus", {
  inserted(el) {
    el.blur();
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
