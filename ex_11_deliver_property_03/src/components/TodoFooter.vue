<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{ todoList.length }} </strong></span>
    <!-- 清空 -->
    <button class="clear-completed" @click="clearTodoList">
      清空任务
    </button>
  </footer>
</template>

<script>
  export  default {
    props: {
      todoList: {
        type: Array,
        required: true
      }
    },
    methods: {
      clearTodoList() {
        // 利用事件触发, 清空 todoList 数据
        this.$emit("clearTodoList");
      }
    }
  }
</script>

<style>

</style>
