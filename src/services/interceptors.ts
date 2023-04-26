/**
 * 洋葱模型拦截器
 * @author demon3443002624@outlook.com
 */

import { pageToLogin } from "./utils";
import { HTTP_STATUS } from "./config";
import { setStorageSync, interceptors as ic } from "@tarojs/taro";

const customInterceptor = (chain) => {
  const requestParams = chain.requestParams;

  return chain.proceed(requestParams).then((res) => {
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject("*** 请求资源不存在 ***");
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject("*** 服务端出现了问题 ***");
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      pageToLogin();
      setStorageSync("Authorization", "");
      return Promise.reject("*** 没有权限访问 ***");
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      pageToLogin();
      setStorageSync("Authorization", "");
      return Promise.reject("*** 需要鉴权 ***");
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res.data;
    }
  });
};

// Taro 提供了两个内置拦截器,logInterceptor - 用于打印请求相关信息,timeoutInterceptor - 在请求超时时抛出错误
const interceptors = [
  customInterceptor,
  ic.logInterceptor,
  ic.timeoutInterceptor,
];

export default interceptors;
