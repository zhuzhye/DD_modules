import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Vue.use(VueRouter);
import routes from '../menu/menu';
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  undefined;
  return routerPush.call(this, location).catch((error) => error);
};
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
