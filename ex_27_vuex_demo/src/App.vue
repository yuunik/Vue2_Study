<template>
  <div id="app">
    <h1>根组件 - {{ title }} - {{ count }}</h1>
    <input type="text" :value="count" @input="handleInput">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
    <hr>
    <h1>get state by getters</h1>
    <h2>{{ $store.getters.filterList.join('、') }}</h2>
    <hr>
    <!--  访问模块的 state  -->
    <h1>{{ $store.state.user.userInfo.name }}</h1>
    <hr>
    <h1>{{ $store.getters['settings/UpperCaseTheme'] }}</h1>
  </div>
</template>

<script>
import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  components: {
    Son1,
    Son2
  },
  methods: {
    handleInput (e) {
      const count = e.target.value
      // 提交并调用 mutations
      this.$store.commit('changeCount', count)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
