<template>
  <div>
    <van-button type="primary" @click="RouterTo">船位监控</van-button>
    <van-button type="primary">视频监控</van-button>
  </div>
</template>
<script>
// import { getQueryString } from '@/utils/tools';
export default {
  created() {
    //地址截取
    // getQueryString();
  },
  data() {
    return {};
  },
  methods: {
    // 路由跳转
    RouterTo() {
      this.$router.push({ path: '/map', name: 'Map' });
    },
  },
};
</script>
