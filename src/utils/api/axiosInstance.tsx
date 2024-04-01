// require("dotenv");
import Axios from "axios";

const api = Axios.create({
  baseURL: "process.env.BASE_URL",
  withCredentials: true,
  headers: {
    access_token: localStorage.getItem("access_token"),
  },
});

api.defaults.timeout = 1000;

export default api;
