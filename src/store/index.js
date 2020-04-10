import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'; // vuex数据持久化 https://github.com/championswimmer/vuex-persist

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// vuex本地存储配置
const vuexLocal = new VuexPersistence({
  key: 'vue-mobile',            // 名称
  storage: window.localStorage,  // 默认使用 localStorage 保存状态
  reducer: persistedState => {
    const stateFilter = Object.assign({}, persistedState);
    const blackList = ['systemTime']; // 不保存到 storage 中
    blackList.forEach((item) => {
      delete stateFilter[item];
    });
    return stateFilter;
  },
});

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [vuexLocal.plugin],
});