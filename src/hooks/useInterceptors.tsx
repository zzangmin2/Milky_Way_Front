import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loadingStateAtom } from "../utils/recoil/atom";
import api from "../utils/api/axiosInstance";
import refreshApi from "../utils/api/axiosRefreshInstance";
const useInterceptors = () => {
  const setLoading = useSetRecoilState(loadingStateAtom);

  useEffect(() => {
    const requestHandler = (config: any) => {
      setLoading(false);
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      if (ACCESS_TOKEN) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
          "ACCESS_TOKEN"
        )}`;
      }
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

    let isTokenRefreshing = false;

    const tokenInterceptor = api.interceptors.request.use(
      (config) => {
        if (window.location.pathname.startsWith("/users")) {
          return config;
        }

        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (!accessToken) {
          if (window.location.pathname !== "/users/login") {
            alert("로그인을 진행해주세요");
            window.location.href = "/users/login";
          }
          return Promise.reject(new Error("토큰이 없습니다."));
        }

        // config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const tokenRefreshInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response &&
          error.response.status === 401 &&
          error.response.data.message === "expired" &&
          !isTokenRefreshing
        ) {
          isTokenRefreshing = true;
          try {
            const refresh_Token = localStorage.getItem("REFRESH_TOKEN");
            if (!refresh_Token) {
              throw new Error("Refresh token이 없습니다.");
            }

            const response = await refreshApi.post(
              "/reissue",
              {},
              {
                headers: {
                  Authorization: `Bearer ${refresh_Token}`,
                },
              }
            );

            if (response.status === 200) {
              const accessToken = response.data.access_token;
              localStorage.setItem("ACCESS_TOKEN", accessToken);
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              return api(originalRequest);
            } else {
              localStorage.removeItem("ACCESS_TOKEN");
              localStorage.removeItem("REFRESH_TOKEN");
              alert("세션이 만료되었습니다.");

              window.location.href = "/users/login";
              throw new Error("토큰 갱신에 실패했습니다.");
            }
          } catch (refreshError) {
            console.error("토큰 갱신 요청이 실패했습니다.", refreshError);
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("REFRESH_TOKEN");
            alert("세션이 만료되었습니다.");

            window.location.href = "/users/login";

            return Promise.reject(refreshError);
          } finally {
            isTokenRefreshing = false;
          }
        } else if (error.response.data.message === "invaild") {
          alert("로그인 정보가 맞지 않습니다.");
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("REFRESH_TOKEN");
          window.location.href = "/users/login";
        }

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

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
      api.interceptors.request.eject(tokenInterceptor);
      api.interceptors.response.eject(tokenRefreshInterceptor);
    };
  }, [setLoading]);
};

export default useInterceptors;
