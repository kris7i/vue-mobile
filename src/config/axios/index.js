import axios from 'axios';
import {Toast} from 'vant';
import store from '@/store';
import router from '@/router';

// 设置请求 baseURL, 根据情况自行修改
// 此处为了模拟， 路径为public下的mockjson目录 https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9
let baseURL = process.env.NODE_ENV === 'development' ? 'mockjson' : process.env.VUE_APP_DOMAIN;

// 创建一个axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 30000, // 请求超时时间
});

//------ 取消重复提交操作-----
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      //当前请求在数组中存在时执行函数体
      pending[p].f();//执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
};
//------ 取消重复提交操作-----

// 如果未登录或者token失效，就清除token和用户信息，跳转到登录界面
const logout = () => {
  store.commit('CLEAR_TOKEN');
  store.commit('CLEAR_USERINFO');
  router.push({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};

// 防抖 200ms请求多次报错，只触发最后一个
let messageTimer = 0;
const showError = (message) => {
  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => {
    Toast.fail(message);
  }, 200);
};

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求前做一些处理
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = store.getters.token;
    }
    //------ 取消重复提交操作-----
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c) => {
      // ajax标识用请求地址&请求方式拼接的字符串
      pending.push({u: config.url + '&' + config.method, f: c});
    });
    //------ 取消重复提交操作-----

    return config;
  },
  error => {
    // 发送失败
    showError('发送失败');
    Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    //------ 取消重复提交操作-----
    removePending(response.config);
    //------ 取消重复提交操作-----

    // 这个状态码是和后端约定的
    const {code = 0} = response.data;
    switch (code) {
      case 401:  //未授权，请登录
      case 403:  //拒绝访问
        logout();
        return response.data;
    }
    return response.data;
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break;
        case 401:
          error.message = '未授权，请登录';
          logout();
          return {success: false, message: '未授权，请登录', code: -1};
        case 403:
          error.message = '拒绝访问';
          logout();
          return {success: false, message: '拒绝访问', code: -1};
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器内部错误';
          break;
        case 501:
          error.message = '服务未实现';
          break;
        case 502:
          error.message = '网关错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网关超时';
          break;
        case 505:
          error.message = 'HTTP版本不受支持';
          break;
        default:
      }
    }
    showError(error.message);
    return Promise.reject(error.message);
  },
);

export default service;