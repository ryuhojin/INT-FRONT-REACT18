import service from "..";

//로그인
interface loginParams {
  username: string;
  password: string;
}
const loginUser = async (params: loginParams) => {
  return await service.post("auth/login", params);
};

// 회원가입
interface registerParams {
  userId: string;
  password: string;
  name: string;
}
const registerUser = async (params: registerParams) => {
  await service.post("developer", params);
  return await service.post("auth/login", {
    username: params.userId,
    password: params.password,
  });
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

export { loginUser, registerUser, refreshUser, deleteUser, updateUser };
