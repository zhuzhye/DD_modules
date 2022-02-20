import { Button, Loading, Popup, Col, Row } from 'vant';
const vant = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Loading);
    Vue.use(Popup);
    Vue.use(Col);
    Vue.use(Row);
  },
};
export default vant;
