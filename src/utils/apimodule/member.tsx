import api from "../api/axiosInstance";
import { isLoggedInUserName } from "../recoil/atom";
import { useSetRecoilState } from "recoil";

/**
 * signupemail에서 이메일 최초인증 axios => 성공시 버튼 활성화
 * @param email @type number | string
 * @return success
 */
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
/**
 * signupcompare에서 유저 아이디 및 패스워드 넘기기 => 성공시 버튼 활성화
 * @param id
 * @param password
 * @type string | number
 * @return success
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
 * @type string | number
 * @return success
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

/**
 * login으로 id, password넘긴후 accesstoken, refreshtoken 확인필요 => 성공시 success:true
 * auth.tsx 별도 파일 관리? 필요
 * @param loginId
 * @param loginPwd
 * @type string
 * @return success
 */

const sendLogin = async (loginId: string, loginPwd: string) => {
  const username: any = useSetRecoilState(isLoggedInUserName); //유저 이름 저장
  try {
    const response = await api.post("", {
      loginId: loginId,
      loginPwd: loginPwd,
    });

    if (response.data.success) {
      username(response.data.username); // response로 가입시 받은 username?: 이름 등 받아서 뿌리기
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("error:", error);
    return { success: false, error: "error" };
  }
};

export { sendUserCompareInfo, sendEmailUserInfo, sendUserInfo, sendLogin };
