// 引入 Vue、Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import settings from '@/store/modules/settings'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 开启严格模式
  strict: true,
  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  actions: {
    changeCountAction (context, number) {
      setTimeout(() => {
        context.commit('changeCount', number)
      }, 1000)
    }
  },
  mutations: {
    addCount (state, n) {
      state.count += n
    },
    subCount (state, n) {
      state.count -= n
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // 类似于计算属性
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 模块
  modules: {
    user,
    settings
  }
})

// 导出给 main.js 使用
export default store
