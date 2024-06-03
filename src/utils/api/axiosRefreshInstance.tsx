import axios from "axios";

const refreshApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },

  timeout: 3000,
});
export default refreshApi;
