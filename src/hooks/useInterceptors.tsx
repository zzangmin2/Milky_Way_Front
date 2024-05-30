import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loadingStateAtom } from "../utils/recoil/atom";
import api from "../utils/api/axiosInstance";

const useInterceptors = () => {
  const setLoading = useSetRecoilState(loadingStateAtom);

  useEffect(() => {
    const requestHandler = (config: any) => {
      setLoading(false);
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      if (ACCESS_TOKEN) {
        config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
      }
      return config;
    };
    (error: any) => {
      return Promise.reject(error);
    };

    const responseHandler = (response: any) => {
      setLoading(true);
      return response;
    };

    const errorHandler = (error: any) => {
      setLoading(true);
      return Promise.reject(error);
    };

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

        config.headers.Authorization = `Bearer ${accessToken}`;
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
            const refresh_Token = localStorage.getItem("REFRESH_TOKEN");
            const response = await api.post("/reissue", {
              headers: {
                Authorization: `Bearer ${refresh_Token}`,
              },
            });
            // 새로발급된 억세스토큰을 로컬스토리지에 저장
            const accessToken = response.data.access_token;
            localStorage.setItem("ACCESS_TOKEN", accessToken);

            // 원래 요청 헤더 업데이트
            error.config.headers["Authorization"] = `Bearer ${accessToken}`;

            // 원래 요청 재시도
            return api.request(error.config);
          } catch (error) {
            // refresh_token이 없을때 에러처리
            console.error(error);
            // 억세스토큰과 리프레시토큰을 삭제시키고 login페이지로 리디렉션
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("REFRESH_TOKEN");
            alert("로그인 세션이 만료되었습니다.");
            window.location.href = "/users/login";
            return Promise.reject(error);
          }
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
