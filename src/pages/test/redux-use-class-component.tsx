import { Button, View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { Component, PropsWithChildren } from "react";
import { add, asyncAdd, minus } from "@/actions/counter";

// @connect(
//   ({ counter }) => ({
//     counter,
//   }),
//   (dispatch) => ({
//     add() {
//       dispatch(add());
//     },
//     dec() {
//       dispatch(minus());
//     },
//     asyncAdd() {
//       dispatch(asyncAdd());
//     },
//   })
// )
/**
 connect 方法接受两个参数 mapStateToProps 与 mapDispatchToProps

mapStateToProps，函数类型，接受最新的 state 作为参数，用于将 state 映射到组件的 props
mapDispatchToProps，函数类型，接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
 */
export default class TestIndex extends Component<any, any> {
  render() {
    return (
      <View>fafaf</View>
      // <View className="index">
      //   <Button className="add_btn" onClick={this.props.add}>
      //     +
      //   </Button>
      //   <Button className="dec_btn" onClick={this.props.dec}>
      //     -
      //   </Button>
      //   <Button className="dec_btn" onClick={this.props.asyncAdd}>
      //     async
      //   </Button>
      //   <View>
      //     <Text>{this.props.counter.num}</Text>
      //   </View>
      // </View>
    );
  }
}
