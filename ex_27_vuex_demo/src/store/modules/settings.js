// settings 模块
const state = {
  theme: 'light',
  desc: 'demo'
}

const actions = {
  updateTheme (context, newTheme) {
    setTimeout(() => {
      context.commit('setTheme', newTheme)
    })
  }
}

const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}

const getters = {
  UpperCaseTheme (state) {
    return state.theme.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
