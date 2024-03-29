import api from "../instanceapi/axiosInstance";

export const signUp = (type: any) => {
  //회원가입
  return api({ url: `/signup` });
};

export const login = (type: any) => {
  //로그인
  return api({ url: `/login` });
};
export const logout = (type: any) => {
  //로그아웃
  return api({ url: `/logout` });
};
export const findEmail = (type: any) => {
  //유저 상세정보
  return api({ url: `/api/members/` });
};

/*
type 설정이랑 엔드포인트랑 기타 등등 나중에 설정할건데
일단 이런식으로 할거다? 라고만 이해함

*/
