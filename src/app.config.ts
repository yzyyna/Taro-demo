/**
 * wx mini-programmer global configuration
 * @author demon3443002624@outlook.com
 * @description https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html
 */

import pages from "./route";

export default defineAppConfig({
  debug: true,
  entryPagePath: pages[4], // 主页设置为测试页
  pages,
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#6190E8",
    navigationBarTitleText: "发电熊猫合伙人",
    navigationBarTextStyle: "white",
  },
  tabBar: {
    color: "#a7b1b6",
    selectedColor: "#73ba60",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "assets/icon/main-page.png",
        selectedIconPath: "assets/icon/main-page-selected.png",
        text: "首页",
      },
      {
        pagePath: "pages/enter-customer-information/index",
        iconPath: "assets/icon/customer.png",
        selectedIconPath: "assets/icon/customer-selected.png",
        text: "录入客户",
      },
      {
        pagePath: "pages/to-be-partner/index",
        iconPath: "assets/icon/partner.png",
        selectedIconPath: "assets/icon/partner-selected.png",
        text: "合伙人",
      },
      {
        pagePath: "pages/test/index",
        iconPath: "assets/icon/partner.png",
        selectedIconPath: "assets/icon/partner-selected.png",
        text: "测试",
      },
      // TODO 我的页面,暂隐藏
      // {
      //   pagePath: "pages/mine/index",
      //   iconPath: "assets/icon/about-me.png",
      //   selectedIconPath: "assets/icon/about-me-selected.png",
      //   text: "我的",
      // },
    ],
  },
  plugins: {
    // chooseLocation: {
    //   version: "1.0.10",
    //   provider: "wx76a9a06e5b4e693e",
    // },
  },
  permission: {
    // "scope.userLocation": {
    //   desc: "你的位置信息将用于小程序定位",
    // },
  },
});
