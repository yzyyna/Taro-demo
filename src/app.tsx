/**
 * entrance
 * @author demon3443002624@outlook.com
 * @description 非必要所有模块请按需引入
 */

import "./app.scss";
import { openidStorageKey } from "@/services/keys";
import { login as fpssLogin } from "@/services/api";
import { Component, PropsWithChildren } from "react";
import {
  login,
  setStorage,
  getStorageSync,
  getCurrentInstance,
} from "@tarojs/taro";
import { Provider } from "react-redux";
import configStore from "@/store";

const store = configStore();

class App extends Component<PropsWithChildren> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let p: API.LOGIN = {
      code: "",
      invited: null,
    };

    login({
      success: (res) => {
        const params = getCurrentInstance().router?.params;
        const invitedOpId = params?.invitedOpId;
        const code = res?.code;
        let openid = getStorageSync(openidStorageKey);

        code && (p.code = code);
        invitedOpId && (p.invited = invitedOpId);
        openid && console.info("*** 用户非首次加载 ***\n", openid);
        (openid && !invitedOpId) ||
          fpssLogin(p).then((value) => {
            openid = value?.data?.openid;
            (openid &&
              setStorage({
                key: openidStorageKey,
                data: openid,
                success: () => {
                  console.info(
                    "*** 用户静默登录成功(首次) ***\n",
                    value,
                    openid
                  );
                },
              })) ||
              new Error("*** 获取用户凭证失败,请检查网络 ***");
          });
      },
    });
  }

  render() {
    // this.props.children 是将要会渲染的页面
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
