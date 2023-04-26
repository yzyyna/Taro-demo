/**
 * common tools
 * @author demon3443002624@outlook.com
 */

import { getCurrentPages, navigateTo } from "@tarojs/taro";

export const getCurrentPageUrl = () => {
  let pages = getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
};

// TODO 暂无登录鉴权
export const pageToLogin = () => {
  let path = getCurrentPageUrl();
  if (!path?.includes("login")) {
    navigateTo({
      url: "/pages/index/index",
    });
  }
};

/**
 * 小程序地图选点插件
 * @author demon3443002624@outlook.com
 * @description https://lbs.qq.com/miniProgram/plugin/pluginGuide/locationPicker
 */

export const locationPicker = (p: LocationPickerParams) => {
  navigateTo({
    url:
      "plugin://chooseLocation/index?key=" +
      p.key +
      "&referer=" +
      p.referer +
      "&location=" +
      p.location +
      "&category=" +
      p.category,
  });
};
