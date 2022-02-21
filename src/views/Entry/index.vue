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
    this.GetUesrInfo();
  },
  data() {
    return {};
  },
  methods: {
    // 路由跳转
    RouterTo() {
      this.$router.push({ path: '/map', name: 'Map' });
    },
    //获取用户信息
    GetUesrInfo() {
      this.$http.get('/ding/loginSass').then((res) => {
        console.log(res);
        if (res.code == 200) {
          sessionStorage.setItem('token', res.result.token);
          sessionStorage.setItem('realName', res.result.realName);
        }
      });
    },
  },
};
</script>
