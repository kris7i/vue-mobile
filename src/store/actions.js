import {login, logout} from '@api/index'

export default {
  // 用户登录
  login({commit}, params) {
    return new Promise((resolve, reject) => {
      login(params).then(result => {
        const {token, ...userInfo} = result.data;
        commit('SET_TOKEN', token);
        commit('SET_USERINFO', userInfo);
        resolve(result);
      }).catch(reject);
    })
  },
  // 退出登录
  logout({commit}) {
    return new Promise((resolve, reject) => {
      logout().then(result => {
        commit('CLEAR_TOKEN');
        commit('CLEAR_USERINFO');
        resolve(result);
      }).catch(reject)
    })
  },
};