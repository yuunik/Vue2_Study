<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <h1>数字为： {{ number }}</h1>
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <Son :count="number" @changeNum="handleChange"></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue"
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      number: 100
    }
  },
  methods: {
    handleChange(newValue) {
      if (newValue === "-") {
        this.number--;
      } else if (newValue === "+") {
        this.number++;
      } else {
        return alert("请稍后再试...");
      }
    }
  }
}
</script>

<style>
</style>
