import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式

import './styles/index.css' // 页面样式

// 引入全局组件
import BaseGoodsItem from "@/components/BaseGoodsItem.vue"
import BaseBrandsItem from "@/components/BaseBrandsItem.vue";
import BaseTopicItem from "@/components/BaseTopicItem.vue";

// 使用全局组件
Vue.component("BaseGoodsItem", BaseGoodsItem)
Vue.component("BaseBrandsItem", BaseBrandsItem)
Vue.component("BaseTopicItem", BaseTopicItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
