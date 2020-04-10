import Vue from 'vue';
import Mian from './main'; // svg组件

const req = require.context('../../assets/svg-icons', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

// 注册全局 svg-icon
Vue.component('svg-icon', Mian);