<template>
  <div>
    <index-page>
      <div class="content">
        <img src="./image/404.png" width="100%" alt="" />
        <div class="font-class">抱歉，你访问的页面不存在</div>
      </div>
    </index-page>
  </div>
</template>
<script>
import IndexPage from './index.vue';
import { getQueryString } from '@/utils/tools';
export default {
  components: {
    IndexPage,
  },
  created() {
    //地址截取
    getQueryString('name');
  },
};
</script>
<style lang="less" scoped>
.font-class {
  text-align: center;
  font-size: 15px;
}
.content {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
}
</style>
