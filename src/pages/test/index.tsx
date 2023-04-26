import "./index.scss";
import { View } from "@tarojs/components";
import { Component, PropsWithChildren } from "react";
import { AtList, AtListItem } from "taro-ui";
import { navigateTo } from "@tarojs/taro";

export default class TestIndex extends Component<PropsWithChildren> {
  render() {
    return (
      <View>
        <AtList>
          <AtListItem
            title="类"
            arrow="right"
            note="哈哈哈哈"
            onClick={() => {
              navigateTo({
                url: "/pages/test/redux-use-class-component",
              });
            }}
          />
          <AtListItem
            title="函数式"
            arrow="right"
            onClick={() => {
              navigateTo({
                url: "/pages/test/redux-use-func-component",
              });
            }}
          />
        </AtList>
      </View>
    );
  }
}
