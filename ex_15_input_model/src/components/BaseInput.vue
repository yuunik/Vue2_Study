<template>
  <input type="text" :value="value" @keyup.enter="editContent($event)"/>
</template>

<script>
  export  default {
    props: {
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      editContent(e) {
        this.$emit("input", e.target.value);
        // 清空

      }
    }
  }
</script>

<style>
  input {
    width: 200px;
    height: 100px;
    text-align: center;
    border: 2px solid black;
    border-radius: 5px;
    margin: 0 auto;
    box-shadow: 0 0 10px black;
  }
</style>
