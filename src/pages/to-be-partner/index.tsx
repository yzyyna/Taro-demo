/**
 * 合伙人页面
 * @author demon3443002624@outlook.com
 */

import "./index.scss";
import { Component } from "react";
import { toBePartner } from "@/services/api";
import { openidStorageKey } from "@/services/keys";
import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtDivider, AtToast } from "taro-ui";
import {
  showLoading,
  hideLoading,
  getStorageSync,
  showToast,
} from "@tarojs/taro";

export default class ToBePartner extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      dividerColor: "#8c8c8c",
      toastShow: false,
    };
  }

  public imgSrcWeChat = require("/src/assets/icon/wechat-logo.png");
  public imgSize = "32px";

  onShareAppMessage(res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
    }
    return {
      title: "发电熊猫合伙人",
      path:
        "/pages/to-be-partner/index?invitedOpId=" +
        getStorageSync(openidStorageKey),
    };
  }

  getPhoneNumber = async (e) => {
    const code = e.detail?.code;
    if (code) {
      showLoading({
        title: "请求中,请稍后...",
      });
      const result = await toBePartner({
        openid: getStorageSync(openidStorageKey),
        code,
      });
      showToast({ title: "已成为合伙人" });
      hideLoading();
    } else {
      this.setState({ toastShow: true });
    }
  };

  render() {
    return (
      <View className="to-be-partner">
        <Text className="text-center">成为合伙人,共享租赁收益</Text>
        <AtDivider
          content="合伙人特权"
          fontColor={this.state.dividerColor}
          lineColor={this.state.dividerColor}
        />
        <View className="at-row sub-text">
          <View className="at-col"></View>
          <View className="at-col">
            <Text>共享客户租金</Text>
            <Text>共享好友客户租金</Text>
          </View>
          <View className="at-col"></View>
        </View>
        <AtDivider
          content="合伙人义务"
          fontColor={this.state.dividerColor}
          lineColor={this.state.dividerColor}
        />
        <View className="at-row sub-text">
          <View className="at-col"></View>
          <View className="at-col">
            <Text>邀请好友成为合伙人</Text>
            <Text>邀请用户完成发电机机组租赁</Text>
          </View>
          <View className="at-col"></View>
        </View>
        <View className="btn-view">
          <AtButton
            type="primary"
            openType="getPhoneNumber"
            onGetPhoneNumber={this.getPhoneNumber}
          >
            <Image
              style={{ width: this.imgSize, height: this.imgSize }}
              src={this.imgSrcWeChat}
            ></Image>
            成为合伙人
          </AtButton>
        </View>
        <View className="btn-view">
          <AtButton type="primary" openType="share">
            <Image
              style={{
                width: this.imgSize,
                height: this.imgSize,
              }}
              src={this.imgSrcWeChat}
            ></Image>
            邀请好友
          </AtButton>
        </View>
        <AtToast
          isOpened={this.state.toastShow}
          text="用户拒绝授权获取手机号"
          icon="close"
        ></AtToast>
      </View>
    );
  }
}
