import Root from '../views/root';
import Home from '../views/root/home/index';

// 路由path路径 ->对应-> component文件路径, 便于以后修改快速定位到目标文件夹
const routes = [
  {
    path: '/',
    name: 'root',
    component: Root,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: '首页',
        component: Home
      },
      {
        path: '/course',
        name: '课程',
        component: () => import('@/views/root/course'),
      },
      {
        path: '/course/list',
        name: '课程列表',
        component: () => import('@/views/root/course/list'),
      },
      {
        path: '/course/detail/:id',
        name: '课程详情',
        component: () => import('@/views/root/course/detail'),
      },
      {
        path: '/mine',
        name: '我的',
        component: () => import('@/views/root/mine'),
      },
      {
        path: '/mine/about',
        name: '关于我们',
        component: () => import('@/views/root/mine/about'),
      },
      {
        path: '/mine/user',
        name: '个人信息',
        meta: {requireAuth: true},  // 要求登录才能访问
        component: () => import('@/views/root/mine/user'),
      },
    ],
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login'), // 如果app 进来就是登录 此处不要使用异步加载
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page')
  },
];

// 最后添加 *
routes.push({
  path: '*',
  redirect: '/404'
});

export default routes;