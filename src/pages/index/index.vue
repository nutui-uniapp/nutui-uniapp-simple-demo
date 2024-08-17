<template>
  <view class="container">
    <image class="logo" src="/static/logo.png"></image>

    <nut-button type="primary" size="small">{{ text }}</nut-button>
  </view>
</template>

<script lang="ts" setup>
const text = ref("你好👋");
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 160rpx;
  height: 160rpx;
  margin: 200rpx auto 50rpx;
}
</style>
