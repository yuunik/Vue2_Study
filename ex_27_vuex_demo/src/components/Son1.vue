<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }} - {{ title }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="changeTitle">修改标题</button>
    <h1>get state by mapGetters</h1>
    <h2>{{ filterList }}</h2>
    <hr>
    <h1>{{ UpperCaseTheme }}</h1>
    <hr>
    <h1>{{ $store.state.user.userInfo }}</h1>
    <button @click="changeUserInfo">更新个人信息</button>
    <button @click="updateUserInfo">一秒后更新个人信息</button>
    <h1>{{ $store.state.settings.theme }}</h1>
    <button @click="changeTheme">更新主题颜色</button>
    <button @click="updateTheme">一秒后更新主题颜色</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { up } from 'yarn/lib/cli'

export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList']),
    ...mapGetters('settings', ['UpperCaseTheme'])
  },
  methods: {
    up,
    handleAdd (value) {
      this.$store.commit('addCount', value)
    },
    changeTitle () {
      this.$store.commit('changeTitle', 'chorria')
    },
    changeUserInfo () {
      this.$store.commit('user/setUserInfo', { name: 'chow', age: 10 })
    },
    changeTheme () {
      this.$store.commit('settings/setTheme', 'dark')
    },
    updateUserInfo () {
      this.$store.dispatch('user/updateUserInfo', { name: 'xxxx', age: 33 })
    },
    updateTheme () {
      this.$store.dispatch('settings/updateTheme', 'orange')
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
