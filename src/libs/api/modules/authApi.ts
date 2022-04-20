import service from "..";

//로그인
interface loginParams {
  email: string;
  password: string;
}
const loginUser = async (params: loginParams) => {
  return await service.post("auth/login", params);
};

// 회원가입
interface registerParams {
  email: string;
  password: string;
  name: string;
}
const registerUser = async (params: registerParams) => {
  const response = await service.post("developer", params);
  if(response.status !== 200) return response;
  return await service.post("auth/login", {
    username: params.email,
    password: params.password,
  });
};
//인증메일 발송
const sendAuthEmail = async (email: string) => {
  return await service.get(`auth/sendAuthMail/${email}`);
};
//인증메일 확인
const checkAuthEmail = async (email: string, number: string) => {
  return await service.get(`auth/checkAuthNum/${email}?authNum=${number}`);
};

//새로고침
const refreshUser = async () => {
  return await service.get("common/refreshtoken");
};

//유저삭제
const deleteUser = async (userId: string) => {
  return await service.delete(`developer/${userId}`);
};

//유저수정
interface updateUserParams {
  userId: string;
  name: string;
  email: string;
  gitUrl: string;
  webSiteUrl: string;
}
const updateUser = async (params: updateUserParams) => {
  return await service.put("developer", params);
};

export {
  loginUser,
  registerUser,
  sendAuthEmail,
  checkAuthEmail,
  refreshUser,
  deleteUser,
  updateUser,
};
