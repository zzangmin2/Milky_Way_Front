import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loadingStateAtom } from "../utils/recoil/atom";
import api from "../utils/api/axiosInstance";
import { toast } from "react-toastify";

const useInterceptors = () => {
  const setLoading = useSetRecoilState(loadingStateAtom);

  useEffect(() => {
    const requestHandler = (config: any) => {
      setLoading(false);
      return config;
    };

    const responseHandler = (response: any) => {
      setLoading(true);
      return response;
    };

    const errorHandler = (error: any) => {
      setLoading(true);
      return Promise.reject(error);
    };

    api.interceptors.request.use(
      (config) => {
        const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
        if (ACCESS_TOKEN) {
          config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const requestInterceptor = api.interceptors.request.use(
      requestHandler,
      errorHandler
    );

    const responseInterceptor = api.interceptors.response.use(
      responseHandler,
      errorHandler
    );

    const tokenInterceptor = api.interceptors.request.use(
      (config) => {
        if (window.location.pathname.startsWith("/users")) {
          return config;
        }
        if (!localStorage.getItem("ACCESS_TOKEN")) {
          alert("로그인을 진행해주세요");
          window.location.href = "/users/login";
          return Promise.reject(new Error("토큰이 없습니다."));
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const tokenRefreshInterceptor = api.interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          try {
            const memberNum = localStorage.getItem("memberNum");
            const response = await api.post("/reissue", { memberNum });
            const accessToken = response.data.access_token;
            error.config.headers["Authorization"] = `Bearer ${accessToken}`;
            return api.request(error.config);
          } catch (error) {
            console.error("refresh_token 없음:", error);
            localStorage.removeItem("ACCESS_TOKEN");
            window.location.href = "/users/login";
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
      api.interceptors.request.eject(tokenInterceptor);
      api.interceptors.response.eject(tokenRefreshInterceptor);
    };
  }, [setLoading]);
};

export default useInterceptors;
