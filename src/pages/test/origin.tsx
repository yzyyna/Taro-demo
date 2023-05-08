import { Component, PropsWithChildren } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import { add, minus, asyncAdd } from "../../actions/counter";

// @ts-ignore
@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
  })
)
export default class Index extends Component<PropsWithChildren> {
  constructor(props:any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props?.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props?.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props?.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props?.counter?.num}</Text>
        </View>
      </View>
    );
  }
}
