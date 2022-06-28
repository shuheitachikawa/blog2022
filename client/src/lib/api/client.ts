import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: process.env.app_base_url + "/api",
});

// ↓リクエストのたびに入り込む処理
api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    Authorization: `Bearer ${Cookies.get("mogukatsu_access_token")}`,
  };
  return config;
});