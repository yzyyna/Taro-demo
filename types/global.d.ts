/// <reference types="@tarojs/taro" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd";
  }
}
interface LocationPickerParams {
  key: string; //使用在腾讯位置服务申请的key[必填]
  referer: string; //调用来源，一般为您的应用名称，请务必填写！[必填]
  location?: string; //地图中心点坐标，如果不传则默认当前用户的真实位置坐标
  category?: string; //POI分类关键词，最多3个分类，分类之间用英文逗号隔开
}
