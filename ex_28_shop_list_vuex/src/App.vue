<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 -->
    <cart-item v-for="cart in cartList" :key="cart.id" :cart="cart"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  created () {
    this.$store.dispatch('cart/getCartList')
  },
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  computed: {
    // 获取 cartList 数据
    ...mapState('cart', ['cartList'])
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>
