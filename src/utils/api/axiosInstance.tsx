import axios from "axios";

/**
 * axios를 사용하여 만든 API 인스턴스
 *
 * @type {import("axios").AxiosInstance}
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
    "Content-Type": "application/json",
  },
});

/**
 * 요청 인터셉터
 * 로컬 스토리지에 access_token이 없으면 url login으로 변경 ( /users 경로 제외 )
 */
api.interceptors.request.use((config: any) => {
  if (!localStorage.getItem("access_token") && !config.url.includes("/users")) {
    config.url = "http://localhost:5173/users/login";
  }
  return config;
});

/**
 * 응답 인터셉터
 * refresh token을 사용하여 새로운 access token을 요청 재시도 (클라이언트에는 refresh_token 저장 x)
 */
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const response = await api.post("/refresh_token");
        const accessToken = response.data.access_token;
        error.config.headers["Authorization"] = `Bearer ${accessToken}`;
        return axios.request(error.config);
      } catch (error) {
        console.error("refresh_token없음:", error);
        localStorage.removeItem("access_token");
        window.location.href = "/users/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// 타임아웃 얘기 및 수정? 필요
api.defaults.timeout = 3000;

export default api;
