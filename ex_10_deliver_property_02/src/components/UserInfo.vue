<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    <div>姓名：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>是否单身：{{ isSingle ? "是" : "否" }}</div>
    <div>座驾：{{ car.brand }}</div>
    <div>兴趣爱好: {{ hobby.join("、") }}</div>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
      default: "chow",
      validator (value) {
        if (value === "zhangsan") {
          return true;
        } else {
          console.error(`你是 ${value}, 不是 张三.校验失败`);
          return false;
        }
      }
    },
    age: Number,
    isSingle: Boolean,
    car: Object,
    hobby: Array
  }
}
</script>

<style>
.userinfo {
  width: 300px;
  border: 3px solid #000;
  padding: 20px;
}
.userinfo > div {
  margin: 20px 10px;
}
</style>
