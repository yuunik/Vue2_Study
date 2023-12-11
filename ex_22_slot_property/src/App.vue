<template>
  <div>
    <MyTable :data="list">
      <template #default="{ item, msg }">
        <button @click="deleteItem(item)">删除</button>
        {{ msg }}
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="{ item, msg }">
        <h1>{{ msg }}</h1>
        <button @click="showItem(item)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  components: {
    MyTable
  },
  methods: {
    deleteItem(item) {
      const { id } = item;
      this.list = this.list.filter(item => item.id !== id);
    },
    showItem(item) {
      console.log(item);
    }
  }
}
</script>
