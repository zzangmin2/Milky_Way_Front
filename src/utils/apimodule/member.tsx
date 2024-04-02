import api from "../api/axiosInstance";

// 인터페이스 써먹고싶다

// email인증 (버튼 활성화 및 검사)
const sendEmailUserInfo = async (email: number | string) => {
  try {
    const response = await api.post("checking", {
      signupEmail: email,
    });
    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};
// signupidcompare 에서 유저 정보
const sendUserCompareInfo = async (
  id: number | string,
  password: string | number
) => {
  try {
    const response = await api.post("", {
      signupId: id,
      signupPwd: password,
    });

    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};
// signupinfo 에서 이름, 학과, 전화번호 넘기기
const sendUserInfo = async (name: string, dpt: string, number: number) => {
  try {
    const response = await api.post("", {
      signupName: name,
      signupPwd: dpt,
      signupNumber: number,
    });

    if (response.data.success) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

export { sendUserCompareInfo, sendEmailUserInfo, sendUserInfo };
