import api from "../api/axiosInstance";

/**
 * 로그인 axios
 * @description 로그인 성공시 accesstoken을 localstorage에 저장, result값 true 반환 => Login/index.tsx
 * @param {string} loginId 사용자 아이디 && 이메일
 * @param {string} password 사용자 비밀번호
 * @returns {Promise<{ success: boolean,  error?: string }>}
 */

export const loginedIn = async (loginId: string, password: string) => {
  try {
    const response = await api.post("/login", {
      memberId: loginId,
      memberPassword: password,
    });
    if (response.data.success) {
      const token = response.data.access_token;
      localStorage.setItem("ACCESS_TOKEN", token);
      return { success: true };
    } else {
      return { success: false, error: "로그인 실패" };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

/**
 * 로컬스토리지에 저장된 access_token삭제
 * @description 추가 구성 필요 -> 리다이렉트 ?
 */
export const logout = () => {
  localStorage.removeItem("access_token");
};
