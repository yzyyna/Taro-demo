/**
 * 跳转H5页面
 * @author demon3443002624@outlook.com
 */

import { Component } from "react";
import { getStorageSync } from "@tarojs/taro";
import { View, WebView } from "@tarojs/components";
import { openidStorageKey } from "@/services/keys";

export default class H5 extends Component {
  // handleMessage(mes) {}
  render() {
    return (
      <View className="h5">
        <WebView
          src={
            "https://minimp.fortrust.cn/leaseh5/#/leaseConsulting?openid=" +
            getStorageSync(openidStorageKey)
          }
          // onMessage={this.handleMessage}
        />
      </View>
    );
  }
}
