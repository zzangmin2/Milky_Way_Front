import api from "../instanceapi/axiosInstance";

export const signUp = (type: any) => {
  return api({ url: `/signup` });
};

export const login = (type: any) => {
  return api({ url: `/login` });
};
export const logout = (type: any) => {
  return api({ url: `/logout` });
};
export const findEmail = (type: any) => {
  return api({ url: `/api/members/` });
};
