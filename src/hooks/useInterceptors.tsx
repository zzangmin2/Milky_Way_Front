import { useSetRecoilState } from "recoil";
import { loadingStateAtom } from "../utils/recoil/atom";
import api from "../utils/api/axiosInstance";

/**
 * useAxios 커스텀 훅? / 다른 파일로 빼서 관리해야할지 고민중 (interceptors안에서 loadingstate 불린형으로 설정)
 * @returns
 */
const useInterceptors = () => {
  const setLoading = useSetRecoilState(loadingStateAtom);

  /**
   * 요청 핸들러 / loadingstate를 true으로 설정
   * @param config
   * @returns
   */
  const requestHandler = (config: any) => {
    setLoading(true);
    return config;
  };

  /**
   * 응답 핸들러 / loadingstate를 false로 설정
   * @param response
   * @returns
   */
  const responseHandler = (response: any) => {
    setLoading(false);
    return response;
  };

  /**
   * 응답 핸들러 / loadingstate를 false로 설정 (promise를 거부(reject))
   * @param error
   * @returns {Promise}
   */
  const errorHandler = (error: any) => {
    setLoading(false);
    return Promise.reject(error);
  };

  /**
   * 요청과 응답 인터셉터 (loadingstate상태를 true와 false로 변경)
   */
  api.interceptors.request.use(requestHandler, errorHandler);

  api.interceptors.response.use(responseHandler, errorHandler);

  /**
   * 헤더를 처리하는데 instance에서말고 한번 더 보내는게 맞는지 잘 모르겠음? /users로 시작하는 Pathname 제외한 나머지에서 로컬스토리지에 토큰값이 없을경우 로그인 페이지로 리디렉션
   */
  api.interceptors.request.use(
    // config.headers.Authorization =
    //   "Bearer " + localStorage.getItem("ACCESS_TOKEN");
    (config) => {
      if (window.location.pathname.startsWith("/users")) {
        return config;
      }
      if (!localStorage.getItem("ACCESS_TOKEN")) {
        alert("로그인을 진행해주세요");
        window.location.href = "/users/login";
        return Promise.reject(new Error("토큰이 업습니다."));
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /**
   * 응답 인터셉터로 토큰이 갱신되었거나 권한이 없을경우 ? 로그인 페이지로 리디렉션 및 refresh_token재발급
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
          return api.request(error.config);
        } catch (error) {
          console.error("refresh_token없음:", error);
          localStorage.removeItem("ACCESS_TOKEN");
          window.location.href = "/users/login";
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
};

export default useInterceptors;
