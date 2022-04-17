export const buildHttpDecorator = (options) => {
  const { errMsg, successMsg, successCode, errCode, data } = options;
  return () => {
    if (errCode) return { code: errCode, msg: errMsg };
    if (successCode) return { code: successCode, msg: successMsg, data };
  };
};

// 成功返回值
export const HttpSuccess = (successMsg, data) => {
  return buildHttpDecorator({ successMsg, successCode: 200, data })();
};
// 失败返回值
export const HttpError = (errMsg, errCode) => {
  return buildHttpDecorator({ errMsg, errCode })();
};
