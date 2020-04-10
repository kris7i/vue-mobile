export default {
  SET_TOKEN: (state, code) => {
    state.token = code
  },
  CLEAR_TOKEN: (state) => {
    state.token = null;
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = {...userInfo};
  },
  CLEAR_USERINFO: (state) => {
    state.userInfo = {};
  },
};