/**
 * api
 * @author demon3443002624@outlook.com
 */

import hr from "./http";

export const publicityGetRichText = () => {
  return hr.post("/wx/api/index/leafletData");
};
export const addCustomer = (p: API.ADDCUSTOMER) => {
  return hr.post("/wx/api/clue/add", p);
};
export const login = (p: API.LOGIN) => {
  return hr.post("/wx/api/auth/login", p);
};
export const toBePartner = (p: API.TOBEPARTNER) => {
  return hr.post("/wx/api/wx_partner/apply", p);
};
