import api from "../api/axiosInstance";

const sendEmailUserInfo = async (email: string | any) => {
  try {
  } catch {}
};

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

export { sendUserCompareInfo, sendEmailUserInfo };
