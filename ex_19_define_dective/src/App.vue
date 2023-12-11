<template>
  <div>
    <h1>自定义指令</h1>
    <input v-focus type="text">
    <hr/>
    <h1>自定义指令2</h1>
    <input v-chow type="text"/>
    <hr/>
    <h1 v-color="color1">颜色1</h1>
    <button @click="changeColor">修改颜色</button>
    <hr/>
    <h1 v-color="color2">颜色2</h1>
    <button @click="changeColor2">修改颜色</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "red",
      color2: "green"
    }
  },
  directives: {
    chow: {
      inserted(el) {
        el.focus();
      }
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        el.style.color = binding.value;
      }
    }
  },
  methods: {
    changeColor() {
      this.color1 = "orange";
    },
    changeColor2() {
      this.color2 = "tomato";
    }
  }
}
</script>

<style>

</style>
