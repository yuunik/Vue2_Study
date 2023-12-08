<template>
  <div>
    <input type="text" :value="textContent" @keyup.enter="editContent($event)"/>
  </div>
</template>

<script>
  export  default {
    props: {
      textContent: {
        type: String,
        required: true
      }
    },
    methods: {
      editContent(e) {
        // 修改父组件的 textContent
        this.$emit("changContext", e.target.value);
      }
    }
  }
</script>

<style scoped>
  input {
    border: 1px solid skyblue;
    border-radius: 5px;
    width: 200px;
    height: 50px;
    text-align: center;
  }
</style>
