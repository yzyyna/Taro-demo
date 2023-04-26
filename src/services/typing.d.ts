declare namespace API {
  type ADDCUSTOMER = {
    name: string; //姓名[必填]
    phone: string; //手机号[必填]
    openid: string; //用户 openid [必填]
    address?: string; //地址
    city?: string; //市
    estimated?: string; //预估费用\
    power?: string; //需求功率
    province?: string; //省
    remark?: string; //备注信息[预留]
    scene?: string; //用电场景
    term?: string; //租赁时长
    usetype?: string; ////租赁用途
  };

  type LOGIN = {
    code: string; //用户凭证,5分钟内[必填]
    invited: string | null; //邀请用户 openid [必填]
  };

  type TOBEPARTNER = {
    openid: string; // openid [必填]
    code: string; //前端凭证
  };
}
