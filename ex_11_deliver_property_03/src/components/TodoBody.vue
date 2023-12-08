<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="(todo, index) in todoList" :key="todo.id">
        <div class="view">
          <span class="index">{{ index + 1 }}.</span> <label>{{ todo.name }}</label>
          <button class="destroy" @click="deleteTodo(todo.id)"></button>
        </div>
      </li>
    </ul>
  </section>
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
      deleteTodo(id) {
        // 利用emit , 删除父组件数据
        this.$emit("deleteTodo", id);
      }
    }
  }
</script>

<style>

</style>
