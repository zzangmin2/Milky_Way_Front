import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
    "Content-Type": "application/json",
  },
  timeout: 3000,
});
export default api;
