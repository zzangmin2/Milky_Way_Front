require("dotenv").config();
import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    access_token: localStorage.getItem("access_token"),
  },
});

api.interceptors.request.use(
  (config) => {
    //요청 보내기 전에 수행로직
    return config;
  },
  (error) => {
    //요청 에러가 발생했을때 수행 할 로직 (에러페지이로 res.status전달??)
    console.log(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
api.defaults.timeout = 1000;
export default api;
