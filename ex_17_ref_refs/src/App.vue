<template>
  <div class="app">
    <h4>父组件 -- <button @click="getBaseForm">获取组件实例</button></h4>
    <BaseForm ref="bfPosition"></BaseForm>
  </div>
</template>

<script>
import BaseForm from './components/BaseForm.vue'
export default {
  components: {
    BaseForm,
  },
  methods: {
   getBaseForm() {
     console.log(" --------------------- 2- --------")
     this.$refs.bfPosition.getFormData();
   }
  }
}
</script>

<style>
</style>
