<template>
  <div>
    <MyDialog>
      <template v-slot:header>
        标题1
      </template>
      <template #content>
        内容
      </template>
      <template #footer>
        <button>按钮1</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
