<template>
  <div id="map">
    <div class="right-menu" @click="ShowMenu">
      <svg-icon icon-class="map-right-menu" class="menu-icon" />
    </div>
    <van-popup v-model="RightMenu_Show" position="right" :style="{ height: '100%', width: '70%' }">
      <RightMenu></RightMenu>
    </van-popup>
  </div>
</template>
<script>
import MapApi from '@/api/map/methods';
import RightMenu from './RightMenu';
export default {
  components: {
    RightMenu,
  },
  data() {
    return {
      map: null, //地图对象
      MapApi, //地图方法
      layers: MapApi.Layers, //我的api中的内置图层
      RightMenu_Show: false, //右侧菜单
    };
  },
  mounted() {
    //创建地图
    this.CreateNewMap();
  },
  methods: {
    //创建新地图
    CreateNewMap() {
      const map = {
        //初始化定义的图层可以放入多个属性
        layers: this.layers,
      };
      this.map = this.MapApi.CreateMap(map);
    },
    // 展示菜单
    ShowMenu() {
      this.RightMenu_Show = true;
    },
  },
};
</script>
<style lang="less" scoped>
#map {
  width: 100%;
  height: calc(100vh - 20px);
}
.right-menu {
  width: 35px;
  height: 35px;
  line-height: 35px;
  display: inline-block;
  border-radius: 100%;
  position: absolute;
  z-index: 10;
  background: white;
  text-align: center;
  top: 40px;
  right: 10px;
  box-shadow: 0px 2px 3px #888888b5;
  .menu-icon {
    width: 22px;
    color: gray;
    font-weight: bold;
  }
}
</style>
