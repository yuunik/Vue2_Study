<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input placeholder="请输入任务" class="new-todo" v-model.trim="todoName" @keyup.enter="addTodo"/>
    <button class="add" @click="addTodo">添加任务</button>
  </header>
</template>

<script>
  export  default {
    data() {
      return {
        todoName: ""
      }
    },
    methods: {
      addTodo() {
        // 非空判断
        if (!this.todoName) {
          return alert("待办事项不能为空, 请重新输入!");
        }
        // 利用emit, 添加todo
        this.$emit("addTodo",this.todoName);
        // 清空输入框
        this.todoName = ""
      }
    }
  }
</script>

<style>

</style>
