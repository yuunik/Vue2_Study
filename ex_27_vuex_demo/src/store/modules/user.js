// user 模块
const state = {
  userInfo: {
    name: 'zhangsan',
    age: 18
  },
  address: 'Beijing'
}

const actions = {
  updateUserInfo (context, newUserInfo) {
    setTimeout(() => {
      context.commit('setUserInfo', newUserInfo)
    })
  }
}

const mutations = {
  setUserInfo (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
