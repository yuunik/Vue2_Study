<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader
      @addTodo="addTodo"
    ></TodoHeader>
    <TodoBody
        :todoList="todoList"
        @deleteTodo="deleteTodo"
    ></TodoBody>
    <TodoFooter
      :todoList="todoList"
      @clearTodoList="clearTodoList"
      v-show="todoList.length > 0"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoBody from "@/components/TodoBody.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  data () {
    return {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [
        {id: 1, name: "打篮球"},
        {id: 2, name: "看电影"},
        {id: 3, name: "逛街"}
      ]
    }
  },
  components: {
    TodoHeader,
    TodoBody,
    TodoFooter
  },
  methods: {
    addTodo(todoName) {
      // 添加 todo
      this.todoList.unshift({
        id: +new Date(),
        name: todoName
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    },
    clearTodoList() {
      this.todoList = []
    }
  },
  watch: {
    todoList: {
      immediate: true,
      deep: true,
      handler(todoList) {
        // 浏览器本地持久化
        localStorage.setItem("todoList", JSON.stringify(todoList));
      }
    }
  }
}
</script>

<style>

</style>
