import Vue from 'vue';
import VueRouter from 'vue-router';

// 在升级了ue-Router版本到到3.1.0及以上之后，页面在跳转路由控制台会报Uncaught (in promise)的问题
// https://blog.csdn.net/haidong55/article/details/100939076
const routerReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error);
};
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error => error);
};

// 进度条
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 取消进度条转圈
Nprogress.configure({ showSpinner: false });

import store from '../store';

import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
});


// 路由拦截 权限验证
router.beforeEach((to, from, next) => {
  // 进度条
  Nprogress.start();
  // 验证当前路由 匹配 是否需要有登录验证
  if (to.matched.some(r => r.meta.requireAuth) && !store.getters.token) {
    // 没有登录的时候跳转到登录界面
    // 携带上登陆成功之后需要跳转的页面完整路径
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });

    Nprogress.done();
  } else {
    // 不需要身份校验 直接通过
    next();
  }
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
