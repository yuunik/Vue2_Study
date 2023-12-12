// 引入 axios
import axios from 'axios'
// 购物车模块
export default {
  // 开启命名空间
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  actions: {
    // 发送 ajax 请求, 获取购物车数据
    async getCartList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      const dataList = res.data
      // 提交修改 state 请求
      context.commit('updateCartList', dataList)
    },
    editCount (context, data) {
      // 发送 ajax 请求, 修改后台数据
      axios.patch(`http://localhost:3000/cart/${data.id}`, {
        count: data.count
      })
      // 修改 cart模块 count 数据
      context.commit('updateCount', data)
    }
  },
  mutations: {
    updateCartList (state, newCartList) {
      state.cartList = newCartList
    },
    updateCount (state, data) {
      const cart = state.cartList.find(cart => cart.id === data.id)
      // 修改商品数量
      cart.count = data.count
    }
  },
  getters: {
    totalCount (state) {
      return state.cartList.reduce((sum, cart) => sum + cart.count, 0)
    },
    totalPrice (state) {
      return state.cartList.reduce((sum, cart) => sum + cart.count * cart.price, 0).toFixed(2)
    }
  }
}
