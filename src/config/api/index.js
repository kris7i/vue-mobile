import axios from '../axios';

// 模拟登录
export const login = (params) => {
  return axios({
    url: '/login.json',
    method: 'get',
    params
  });
};

// 模拟退出
export const logout = () => {
  return axios({
    url: '/logout.json',
    method: 'get',
  });
};