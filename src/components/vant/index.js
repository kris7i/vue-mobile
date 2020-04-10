import Vue from 'vue';
import {
  Button,
  Icon,
  Loading,
  Toast,
  Lazyload,
  Swipe,
  SwipeItem,
  NavBar,
  Tabbar,
  TabbarItem,
  Field,
  Form,
} from 'vant'; // 按需使用的vant组件 https://youzan.github.io/vant/#/zh-CN/

Vue.use(Button);
Vue.use(Icon);
Vue.use(Loading);
Vue.use(Toast);
Vue.use(Lazyload, {lazyComponent: true});
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Field);
Vue.use(Form);