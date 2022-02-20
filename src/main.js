import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './http';
// icons
import './icons/index';
// 移动端适配
import 'amfe-flexible';
// 按需引入vant
import vant from './vant/index';
import 'vant/lib/button/style';
Vue.use(vant);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
