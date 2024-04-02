import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // 백에서도 동일하게 true설정(default값 확인)
  headers: {
    access_token: localStorage.getItem("access_token"),
  },
});

api.defaults.timeout = 1000;
export default api;
