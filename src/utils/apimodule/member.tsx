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
 * @param dpt
 * @param number
 * @param email
 * @param password
 * @param id
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */

const sendUserInfo = async (
  name: string | undefined,
  // dpt: string | undefined,
  number: number | string | undefined,
  id: any,
  password: any,
  email: string | undefined
) => {
  try {
    const response = await api.post("/signup", {
      name: name,
      // Role: dpt,
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
 * mypage에서 유저 이메일/닉네임/이름/커리어카드/전화번호 수정
 * @param name
 * @param nickName
 * @param careerCard
 * @param userEmail
 * @param phoneNumber
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendUserEditInfo = async (
  name: string,
  userEmail: string,
  phoneNumber: string
) => {
  try {
    const memberIds = localStorage.getItem("memberNo");
    const response = await api.post(`/${memberIds}/input-student-info/update`, {
      userName: name,
      userEmail: userEmail,
      userPhoneNumber: phoneNumber,
    });
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
 * mypage에서 유저 이메일/닉네임/이름/커리어카드/전화번호 수정
 * @param userName
 * @param userCareer
 * @param userCertificate
 * @param userLineText
 * @type {string | number} 이름 / 학과 / 전화번호
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
const sendUserEditCareer = async (
  userCareer: any,
  // userCertificate: any,
  userLineText: any
) => {
  try {
    // const token = localStorage.getItem("ACCESS_TOKEN");
    const memberIds = localStorage.getItem("memberNo");
    const response = await api.put(`/${memberIds}/input-student-info/update`, {
      careerStartDay: userCareer.careerFirstDate,
      careerEndDay: userCareer.careerEndDay,
      careerName: userCareer.careerCompany,
      studentOneLineShow: userLineText,
    });
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

const postUserEditCareer = async (userCareer: any, userLineText: any) => {
  try {
    const memberIds = localStorage.getItem("memberNo");
    const response = await api.post(`/${memberIds}/input-student-info`, {
      careerName: userCareer.careerCompany,
      careerStartDay: userCareer.careerFirstDate,
      careerEndDay: userCareer.careerEndDay,
    });

    console.log(response.data);
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(`${error}`);
  }
};

export {
  sendUserCompareInfo,
  // sendEmailUserInfo,
  sendUserInfo,
  // sendEmailVerify,
  sendUserEditInfo,
  sendUserEditCareer,
  postUserEditCareer,
};
