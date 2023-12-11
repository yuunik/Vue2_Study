<template>
  <div class="my-tag">
    <input
      class="input"
      type="text"
      placeholder="输入标签"
      v-if="isEdit"
      ref="inp"
      v-focus
      @blur="isEdit = false"
      :value="value"
      @keyup.enter="handleEnter"
    />
    <div
      class="text"
      @dblclick="handleEdit"
      v-else
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
  export  default {
    data() {
      return {
        isEdit: false
      }
    },
    methods: {
      handleEdit() {
        // 修改编辑状态
        this.isEdit = true;
        // 编辑框立即获取焦点
        // 代码过长, 可封装为全局指令
        // this.$nextTick(() => {
        //   this.$refs.inp.focus();
        // })
      },
      handleEnter(e) {
        // 触发 input 事件
        this.$emit("input", e.target.value);
        // 修改编辑状态
        this.isEdit = false;
      }
    },
    props: {
      value: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>

.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
