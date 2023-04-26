/**
 * 用户信息页面
 * @author demon3443002624@outlook.com
 */

import "./index.scss";
import { Text, View } from "@tarojs/components";
import { Component } from "react";
import { AtList, AtListItem } from "taro-ui";
export default class Mine extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      partners: [
        {
          name: "大王",
          time: "2023-04-20 16:54:44",
        },
        {
          name: "大王",
          time: "2023-04-20 16:54:44",
        },
        {
          name: "大王",
          time: "2023-04-20 16:54:44",
        },
        {
          name: "大王",
          time: "2023-04-20 16:54:44",
        },
        {
          name: "大王",
          time: "2023-04-20 16:54:44",
        },
      ],
    };
  }

  render() {
    return (
      <View className="page-mine">
        <View className="at-row title-view">
          <View className="at-col">
            <View className="title">
              <Text>累计邀请</Text>
            </View>
            <View className="at-row content">
              <View className="at-col left-number">126</View>
              <View className="at-col right-describe">好友合伙人</View>
            </View>
          </View>
          <View className="divider"></View>
          <View className="at-col">
            <View className="title">
              <Text>本周累计</Text>
            </View>
            <View className="at-row">
              <View className="at-col left-number">26</View>
              <View className="at-col right-describe">好友合伙人</View>
            </View>
          </View>
        </View>
        <View className="content-view">
          <AtList>
            {this.state?.partners.map((e, i) => (
              <AtListItem title={e.name} key={i} extraText={e.time} />
            ))}
          </AtList>
        </View>
      </View>
    );
  }
}
