<template>
  <view class="container">
    <image class="logo" src="/static/logo.png"></image>

    <nut-button type="primary" size="small" @click="onClick">{{ text }}</nut-button>

    <nut-notify></nut-notify>
  </view>
</template>

<script lang="ts" setup>
const notify = useNotify();

const text = ref("你好👋");

function onClick() {
  notify.primary("欢迎使用 nutui-uniapp");
}
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
