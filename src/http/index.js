import Vue from 'vue';
import axios from 'axios';
import router from '../router/index';
const isDp = process.env.NODE_ENV === 'development' ? true : false;
const baseURL = isDp ? '/' : ''; //正式
let service = axios.create({
  timeout: 30000,
  baseURL: baseURL,
});
// const TOKEN_KEY = 'token';
service.defaults.withCredentials = true;
service.defaults.crossDomain = true;
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
service.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求加token
    const token = sessionStorage.getItem('token');
    // // 设置url白名单
    if (token) {
      config.headers['token'] = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
// 响应拦截
service.interceptors.response.use(
  async (response) => {
    if (response.status === 200) {
      //刷新token
      if (response.headers['token']) {
        sessionStorage.setItem('token', response.headers['token']);
      }
      if (response.data === -1001) {
        setTimeout(() => {
          router.push('*');
        }, 3000);
      } else {
        const data = response.data;
        return Promise.resolve(data);
      }
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

Vue.prototype.$http = service;

// 这里要设置token管理和路由跳转
