<template>
  <div class="map-theme">
    <main>地图主题</main>
    <van-row>
      <van-col span="8">
        <div class="samll-map">
          <img src="./image/ditu.png" width="80%" alt="" />
          <p>地图</p>
        </div>
      </van-col>
      <van-col span="8">
        <div class="samll-map">
          <img src="./image/haitu.png" width="80%" alt="" />
          <p>海图</p>
        </div>
      </van-col>
      <van-col span="8">
        <div class="samll-map">
          <img src="./image/weixingtu.png" width="80%" alt="" />
          <p>卫星图</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.map-theme {
  main {
    margin: 0;
    padding: 5px 15px;
    background: #e7e6e696;
    font-size: 14px;
    font-weight: bold;
    color: rgba(34, 33, 33, 0.863);
  }

  .samll-map {
    margin: 0 auto;
    text-align: center;
    position: relative;
    margin-top: 15px;
    p {
      font-size: 12px;
      margin: 0;
      padding: 0;
      font-weight: bold;
    }
  }
  .samll-map ::after {
    content: '';
    border: 1px solid rgb(173, 170, 170);
    border-radius: 4px;
    width: 78%;
    display: inline-block;
    height: 52px;
    position: absolute;
    top: 0;
    left: 9px;
  }
}
</style>
