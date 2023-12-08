<template>
  <div class="app">
    <h1>{{ textContent }}</h1>
    <BaseSelect
      v-model="selectId"
    ></BaseSelect>
    <hr/>
    <BaseInput
      :textContent="textContent"
      @changContext="textContent = $event"
    ></BaseInput>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
import BaseInput from "@/components/BaseInput.vue";
import {value} from "yarn/lib/cli";
export default {
  data() {
    return {
      selectId: "104",
      textContent: "hello"
    }
  },
  components: {
    BaseInput,
    BaseSelect,
  },
  methods: {
    value() {
      return value
    },
    handleChange(value) {
      this.selectId = value;
    }
  }
}
</script>

<style>
</style>
