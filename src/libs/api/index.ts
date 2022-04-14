import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8080/api";

const service: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
