import service from "..";

const axiosAll = (api: any) => {
  return Promise.all([...api]);
};

const axiosParams = (params: any) => {
  const qs = require("qs");
  return service({
    method: params.method,
    url: params.url,
    data: qs.stringify(params.data),
    headers: params.header,
  });
};

export { axiosAll, axiosParams };