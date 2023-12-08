<template>
  <div id="app">
    <h1>{{ content }}</h1>
    <BaseInput
      v-model="content"
    ></BaseInput>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: 'App',
  components: {
    BaseInput
  },
  data() {
    return {
      content: "Hello"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
