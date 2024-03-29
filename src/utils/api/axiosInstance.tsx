require("dotenv").config();

import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
});

export default api;
