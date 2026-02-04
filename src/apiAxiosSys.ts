import axios from "axios";
import { createVNode } from "vue";

const apiAxiosSys = axios.create();

apiAxiosSys.defaults.baseURL = "//";
apiAxiosSys.defaults.timeout = 300 * 1000;

/**
 * 发请求前统一处理：
 * 1.在此处统一处理参数|Header
 * 2.请求前进行校验和拦截
 *  */
apiAxiosSys.interceptors.request.use(
  function (config) {
    // 配置请求成功
    return config;
  },
  function (error) {
    // 配置请求失败
    return Promise.reject(error);
  },
);

/**
 * 拿到响应后统一处理
 * 1.解包 data
 * 2.错误码处理
 * 3.登录过期
 */
apiAxiosSys.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default apiAxiosSys;
