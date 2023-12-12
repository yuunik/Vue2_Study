<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }} - {{ title }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeCountAction(666)">一秒后修改为 666 </button>
    <button @click="changeTitle('FontEnd')">修改标题</button>
    <hr/>
    <h1>{{ user.userInfo.name }}</h1>
    <h2>{{ userInfo.age }}</h2>
    <h3>{{ theme }}</h3>
    <h4>{{ desc }}</h4>
    <hr>
    <h1>{{ userInfo }}</h1>
    <button @click="setUserInfo({ name: 'lisi', age: 30})">更新个人信息</button>
    <h1>{{ theme }}</h1>
    <button @click="setTheme('blue')">修改主题颜色</button>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['title', 'count', 'user', 'settings']),
    ...mapState('user', ['userInfo', 'address']),
    ...mapState('settings', ['theme', 'desc'])
  },
  methods: {
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction']),
    ...mapMutations('user', ['setUserInfo']),
    ...mapMutations('settings', ['setTheme'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
