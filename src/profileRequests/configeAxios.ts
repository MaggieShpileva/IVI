import axios, { AxiosRequestConfig } from "axios";
axios.defaults.baseURL = "http://localhost:3000/api";

export const API_URL = "http://localhost:3000/api";
export const VERCEL_UTL = "https://ivi-maggieshpileva.vercel.app/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

export default $api;
