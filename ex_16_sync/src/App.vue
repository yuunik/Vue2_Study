<template>
  <div class="app">
    <button @click="showModal">退出按钮</button>
    <BaseDialog :visible.sync="visible"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue"
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showModal() {
      this.visible = !this.visible;
    }
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>
