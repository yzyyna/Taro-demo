/**
 * 用户首页
 * @author demon3443002624@outlook.com
 */

import "./index.scss";
import { useState } from "react";
import { AtButton } from "taro-ui";
import { View, RichText } from "@tarojs/components";
import { publicityGetRichText } from "@/services/api";
import { useReady, useShareAppMessage } from "@tarojs/taro";

export default function index() {
  const [html, setHtml] = useState<string>("");
  const getRichText = () => {
    publicityGetRichText().then((value) => {
      const arr = value?.data;
      if (arr) {
        let html = arr[0].content;
        html && (html = html.replaceAll("<img", '<img style="width:100%"'));
        setHtml(html);
      }
    });
  };

  useReady(() => {
    getRichText();
  });

  useShareAppMessage((res) => {
    let obj = {
      title: "发电熊猫合伙人",
      path: "/pages/index/index",
    };
    if (res.from === "button") {
      obj = {
        title: "发电熊猫合伙人",
        // path: "/pages/index/index?type=share",
        path: "/pages/h5-fpss/index",
      };
    }
    return obj;
  });

  return (
    <View className="index">
      <RichText nodes={html ? html : `<p>暂无内容</p>`}></RichText>
      <View className="bottom-btn-view">
        <AtButton openType="share" size="small" type="primary">
          分享给客户,获取收益
        </AtButton>
      </View>
    </View>
  );
}
