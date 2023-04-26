/**
 * 录入合伙人页面
 * @author demon3443002624@outlook.com
 */

import "./index.scss";
import { useState } from "react";
import agreement from "./agreement";
import { locationPicker } from "@/services/utils";
import {
  getStorageSync,
  showToast,
  hideLoading,
  showLoading,
  requirePlugin,
  useDidShow,
  useUnload,
} from "@tarojs/taro";
import {
  View,
  Text,
  Input,
  Picker,
  BaseEventOrig,
  Image,
  Radio,
  RichText,
} from "@tarojs/components";
import { addCustomer } from "@/services/api";
import { txMapKey, openidStorageKey } from "@/services/keys";
import {
  AtForm,
  AtInput,
  AtButton,
  AtList,
  AtListItem,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
} from "taro-ui";

// const chooseLocation = requirePlugin("chooseLocation");
interface Address {
  province: string;
  city: string;
  address: string;
}
interface Form {
  name: string;
  phone: string;
  scene: string;
  power: string;
  rentTime: string;
}

export default function enterCustomerInformation() {
  // React Hook must be top call
  const [address, setAddress] = useState<Address>();
  // Must initial this state *** 避免更新 state 时 ts 报错找不着参数
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    scene: "",
    power: "",
    rentTime: "",
  });
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string>("");
  const [radioCheckedAgreement, setRadioCheckedAgreement] =
    useState<boolean>(false);
  const selector = ["工地用电", "工业用电", "展会用电", "演唱会用电", "其他"];
  const selectorRentTime: string[] = [];
  const imageSrcLocation = require("/src/assets/icon/select-location.png");
  const imageSrcLocationSize = "28px";
  const lpShowToast = (title: string): void => {
    showToast({ title: title, icon: "error" });
  };
  const judgeFormValid = (): boolean => {
    let result = true;
    !form.name && (lpShowToast("请输入姓名"), (result = false));
    !form.phone && (lpShowToast("请输入手机号码"), (result = false));
    return result;
  };
  const onSubmit = () => {
    const openid = getStorageSync(openidStorageKey);
    const submitForm = {
      ...address,
      ...form,
      openid,
      term: form.rentTime,
    };
    showLoading({ title: "数据提交中...", mask: true });
    if (judgeFormValid()) {
      if (radioCheckedAgreement) {
        addCustomer({
          ...submitForm,
        })
          .then(() => {
            showToast({ title: "提交成功" });
          })
          .finally(() => {
            // 微信文档:Taro.showLoading 和 Taro.showToast 同时只能显示一个,所以调不调用 hideLoading 都无所吊谓
            hideLoading();
          });
      } else {
        showToast({
          title: "请查看同意《用户服务协议》《隐私政策》等条款",
          icon: "none",
        });
      }
    }
  };
  const onChangeFrom = {
    name: (name) => {
      setForm({
        ...form,
        name,
      });
      return name;
    },
    phone: (phone) => {
      setForm({
        ...form,
        phone,
      });
      return phone;
    },
    power: (power) => {
      setForm({
        ...form,
        power,
      });
      return power;
    },
    scene: (e: BaseEventOrig) => {
      const value = Number(e?.detail?.value);
      setForm({
        ...form,
        scene: selector[value],
      });
    },
    rentTime: (e: BaseEventOrig) => {
      const value = Number(e?.detail?.value);
      setForm({
        ...form,
        rentTime: selectorRentTime[value],
      });
    },
  };
  const onClickSelectAddress = () => {
    // locationPicker({
    //   key: txMapKey,
    //   referer: "fortrust-panda",
    //   location: "",
    //   category: "",
    // });
  };
  const onClickShowAgreement = (type: string) => {
    setIsOpened(true);
    if (type === "agreement") {
      setModalTitle("《用户服务协议》");
      setModalContent(agreement.agreement);
    }
    if (type === "privacy") {
      setModalTitle("《隐私政策》");
      setModalContent(agreement.privacy);
    }
  };

  useDidShow(() => {
    // const location = chooseLocation.getLocation();
    // location &&
    //   setAddress({
    //     province: location?.province,
    //     city: location?.city,
    //     address: location?.address,
    //   });
  });

  useUnload(() => {
    chooseLocation.setLocation(null);
  });

  for (let i = 1; i < 13; i++) {
    selectorRentTime.push(i + "个月");
  }

  return (
    <View className="index">
      <AtForm onSubmit={onSubmit}>
        <AtInput
          title="姓名"
          name="name"
          required={true}
          value={form?.name}
          type="text"
          placeholder="请输入您的姓名"
          focus
          onChange={onChangeFrom.name}
        ></AtInput>
        <AtInput
          title="手机号"
          name="phone"
          required={true}
          value={form?.phone}
          type="phone"
          placeholder="请输入联系方式"
          onChange={onChangeFrom.phone}
        ></AtInput>
        <AtInput
          title="需求功能(kW)"
          name="power"
          value={form?.power}
          type="number"
          placeholder="请输入需求功率"
          onChange={onChangeFrom.power}
        ></AtInput>
        <View className="at-input-simulation">
          <Picker
            name="scene"
            mode="selector"
            range={selector}
            onChange={onChangeFrom.scene}
          >
            <AtList>
              <AtListItem title="用电场景" extraText={form?.scene} />
            </AtList>
          </Picker>
        </View>

        <View className="at-input-simulation">
          <Picker
            name="rentTime"
            mode="selector"
            range={selectorRentTime}
            onChange={onChangeFrom.rentTime}
          >
            <AtList>
              <AtListItem title="租赁时长" extraText={form?.rentTime} />
            </AtList>
          </Picker>
        </View>
        <View className="rent-location-view at-input">
          <Text
            style={{
              width: "172rpx",
            }}
          >
            租赁地址
          </Text>
          <Input
            name="rentAddress"
            type="text"
            placeholder="点击右侧图标选择"
            disabled={true}
            value={address?.address}
          ></Input>
          <Image
            style={{
              width: imageSrcLocationSize,
              height: imageSrcLocationSize,
            }}
            mode="aspectFit"
            onClick={onClickSelectAddress}
            src={imageSrcLocation}
          ></Image>
        </View>
        <View className="at-input">
          <Text>预估费用:xxxx元/月,合计:xxxx元/月</Text>
        </View>
        <View className="at-input describe">
          <Text>预估费用仅供参考，不作为最终合同价格。</Text>
          <Text>
            预估费用为裸机费用，不包括运输、吊装、燃油、值守人员相关费用。
          </Text>
          <Text>运输、吊装、燃油以实际发生情况为准，由客户承担。</Text>
        </View>
        <View className="user-agreement">
          <Radio
            checked={radioCheckedAgreement}
            onClick={() => {
              setRadioCheckedAgreement(!radioCheckedAgreement);
            }}
          ></Radio>
          <View>
            本人已阅读并同意
            <Text
              className="click-text"
              onClick={() => onClickShowAgreement("agreeent")}
            >
              《用户服务协议》
            </Text>
            <Text
              className="click-text"
              onClick={() => onClickShowAgreement("privacy")}
            >
              《隐私政策》
            </Text>
            等条款。
          </View>
        </View>
        <View className="btn-view">
          <AtButton type="primary" onClick={onSubmit}>
            提交需求
          </AtButton>
        </View>
      </AtForm>
      <AtModal isOpened={isOpened} className="modal-agreement">
        <AtModalHeader>{modalTitle}</AtModalHeader>
        <AtModalContent>
          <RichText nodes={modalContent}></RichText>
        </AtModalContent>
        <AtModalAction>
          <Text
            onClick={() => {
              setIsOpened(false);
            }}
          >
            关闭
          </Text>
        </AtModalAction>
      </AtModal>
    </View>
  );
}
