const getBaseUrl = () => {
  let BASE_URL = "";
  if (process.env.NODE_ENV === "development") {
    // 开发环境
    BASE_URL = "http://192.168.110.133";
    console.info(
      "*** getBaseUrl ***\nprocess.env.NODE_ENV:",
      process.env.NODE_ENV
    );
  } else {
    // 生产环境
    BASE_URL = "https://minimp.fortrust.cn/api";
    console.info(
      "*** getBaseUrl ***\nprocess.env.NODE_ENV:",
      process.env.NODE_ENV
    );
  }
  return BASE_URL;
};

export default getBaseUrl;
