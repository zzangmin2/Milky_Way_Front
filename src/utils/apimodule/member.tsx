import api from "../api/axiosInstance";

/**
 * signupemail에서 이메일 최초인증 axios => 성공시 verify 버튼 활성화
 * @param email
 * @type {number | string} 이메일
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendEmailUserInfo = async (email: number | string) => {
  try {
    const response = await api.post("users/signupemailform", {
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
/**
 * signupemail에서 이메일 인증번호 확인 => 다음으로 버튼 활성화
 * @param verifyEmail
 * @type {number | string} 이메일 인증번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendEmailVerify = async (verifyEmail: number | string) => {
  try {
    const response = await api.post("users/signupemailverify", {
      verifyEmail,
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
/**
 * signupcompare에서 유저 아이디 및 패스워드 넘기기 => 성공시 버튼 활성화
 * @param id
 * @param password
 * @type {string | number}
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
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

/**
 * signupinfo에서 이름, 학과, 전화번호 넘기기 => 성공시 버튼 활성화
 * @param name
 * @param dpt
 * @param number
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */

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

export {
  sendUserCompareInfo,
  sendEmailUserInfo,
  sendUserInfo,
  sendEmailVerify,
};
