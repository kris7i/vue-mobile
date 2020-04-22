import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局样式
import './main.scss';

// 全局组件
import './components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
