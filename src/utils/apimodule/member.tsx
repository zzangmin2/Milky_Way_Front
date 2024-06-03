import { send } from "process";
import api from "../api/axiosInstance";

/**
 * signupemail에서 이메일 최초인증 axios => 성공시 verify 버튼 활성화
 * @param email
 * @type {number | string} 이메일
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
// const sendEmailUserInfo = async (email: number | string) => {
//   try {
//     const response = await api.post("/users/signupemailform", {
//       signupEmail: email,
//     });
//     if (response.data.success) {
//       return { success: true };
//     } else {
//       return { success: false };
//     }
//   } catch (error) {
//     console.error("error:", error);
//     return { success: false, error: "error" };
//   }
// };
/**
 * signupemail에서 이메일 인증번호 확인 => 다음으로 버튼 활성화
 * @param verifyEmail
 * @type {number | string} 이메일 인증번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
// const sendEmailVerify = async (verifyEmail: number | string) => {
//   try {
//     const response = await api.post("users/signupemailverify", {
//       verifyEmail,
//     });
//     if (response.data.success) {
//       return { success: true };
//     } else {
//       return { success: false };
//     }
//   } catch (error) {
//     console.error("error:", error);
//     return { success: false, error: "error" };
//   }
// };
/**
 * signupcompare에서 유저 아이디 중복확인 => 성공시 disabled  // atom으로 머지막에 한번에 넘김
 * @param id
 * @type {string | number}
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendUserCompareInfo = async (id: number | string) => {
  try {
    const response = await api.post("/signup/checkId", {
      memberId: id,
    });

    console.log(response);

    if (response.status === 200) {
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
 * signupinfo 회원가입 데이터 전송 => 성공시 버튼 활성화
 * @param name
 * @param number
 * @param email
 * @param password
 * @param id
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */

const sendUserInfo = async (
  name: string | undefined,
  number: number | string | undefined,
  id: any,
  email: string | undefined,
  password: any
) => {
  try {
    const response = await api.post("/signup", {
      name: name,

      tel: number,
      id: id,
      password: password,
      email: email,
      role: "STUDENT",
    });

    if (response.status === 200) {
      console.log(response.data);

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
 * mypage에서 유저 이메일/이름/전화번호 수정
 * @param name
 * @param userEmail
 * @param phoneNumber
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendUserEditInfo = async (
  editName: string,
  editEmail: string,
  editNumber: string
) => {
  console.log(editName, editEmail, editNumber);
  try {
    const response = await api.put(`/update`, {
      memberName: editName,
      memberEmail: editEmail,
      memberPhoneNum: editNumber,
    });

    const access_token = response.data.accessToken;
    const refresh_Token = response.data.refreshToken;
    const memberName = response.data.memberName;
    console.log(response);

    if (response.status === 200) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("REFRESH_TOKEN");
      localStorage.removeItem("memberName");

      localStorage.setItem("ACCESS_TOKEN", access_token);
      localStorage.setItem("REFRESH_TOKEN", refresh_Token);
      localStorage.setItem("memberName", memberName);
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
 * 이력서에서 유저 경력, 자격증 수정
 * @param {string} method 'put' 또는 'post'
 */
const editUserCareerList = async (method: string, sendCareerData: any) => {
  console.log(sendCareerData);
  try {
    let response;
    if (method === "post") {
      response = await api.post(`/member/update/profile`, sendCareerData);
    } else if (method === "put") {
      response = await api.put(`/member/modify/profile`, sendCareerData);
    } else {
      throw new Error();
    }

    if (response.status === 200) {
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
 * 이력서에서 유저정보 수정
 * @param {string} method 'put' 또는 'post'
 * @param {any} infoEdit
 */
const editUserCareerInfo = async (method: string, userInfoValue: any) => {
  console.log(userInfoValue.userLocation);
  try {
    let response;
    if (method === "post") {
      response = await api.post(`/member/update/info`, {
        studentMajor: userInfoValue.userDpt,
        studentLocate: userInfoValue.userLocation,
        studentOneLineShow: userInfoValue.userLineText,
      });
    } else if (method === "put") {
      response = await api.put(`/member/modify/info`, {
        studentMajor: userInfoValue.userDpt,
        studentLocate: userInfoValue.userLocation,
        studentOneLineShow: userInfoValue.userLineText,
      });
    } else {
      throw new Error();
    }

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(`${error}`);
    return { success: false };
  }
};

export {
  sendUserCompareInfo,
  // sendEmailUserInfo,
  sendUserInfo,
  // sendEmailVerify,
  sendUserEditInfo,
  editUserCareerList,
  editUserCareerInfo,
};
