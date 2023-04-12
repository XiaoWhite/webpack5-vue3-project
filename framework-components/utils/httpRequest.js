// 封闭 axios ，对外提供一个实例对象，用于网络请求
import axios from 'axios';
const instance = axios.create();

// 添加响应拦截器，数据处理
instance.interceptors.response.use(
  (res) => {
    // 正常返回
    if (res.status === 200) {
      // 获取数据
      return res.data;
    } else {
      // 其他状态码的处理
      return Promise.reject();
    }
  },
  (error) => {
    // 请求出错
    return Promise.reject(error);
  },
);

export default instance;
