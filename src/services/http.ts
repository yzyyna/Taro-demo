import getBaseUrl from "./base-url";
import interceptors from "./interceptors";
import { addInterceptor, request } from "@tarojs/taro";

interceptors.forEach((interceptorItem) => addInterceptor(interceptorItem));

function baseOptions(params, method: keyof Taro.request.Method = "GET") {
  let { url, data } = params;
  let contentType = "application/json";
  const BASE_URL = getBaseUrl();
  const option: Taro.request.Option = {
    url: BASE_URL + url,
    data: data,
    method: method,
    // 请求超时时间:20s
    timeout: 20000,
    header: {
      "content-type": contentType,
      // TODO 暂无登录鉴权
      // 'Authorization': Taro.getStorageSync('Authorization')
    },
  };

  contentType = params.contentType || contentType;
  return request(option);
}

export default {
  get(url, data = "") {
    let option = { url, data };
    return baseOptions(option);
  },

  post(url, data = {}, contentType = "application/json") {
    let params = { url, data, contentType };
    return baseOptions(params, "POST");
  },

  put(url, data = "") {
    let option = { url, data };
    return baseOptions(option, "PUT");
  },

  delete(url, data = "") {
    let option = { url, data };
    return baseOptions(option, "DELETE");
  },
};
