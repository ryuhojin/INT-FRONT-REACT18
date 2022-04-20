import { useRecoilState } from "recoil";
import { useCookie } from "@/libs/utils";
import { userAtom } from "..";
import service from "@/libs/api";
import {
  deleteUser,
  loginUser,
  refreshUser,
  registerUser,
  updateUser,
} from "@/libs/api/modules/authApi";
import { useMemo } from "react";

const useAuth = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const isLoggedIn = () => (user ? true : false);
  const getInfo = useMemo(() => user, [user]);
  const signin = async (params: any) => {
    const response = await loginUser(params);
    if (response.status !== 200) return response;
    await handleResponse(response);
    return response;
  };
  const signup = async (params: any) => {
    const response = await registerUser(params);
    if (response.status !== 200) return response;
    await handleResponse(response);
  };
  const signre = async () => {
    if (!useCookie.getCookie("access-token")) return;
    service.defaults.headers.common["access-token"] = String(
      useCookie.getCookie("access-token")
    );
    service.defaults.headers.common["email"] = String(
      useCookie.getCookie("email")
    );
    const response = await refreshUser();
    if (response.status !== 200) return response;
    await handleResponse(response);
  };
  const signout = () => {
    useCookie.delCookie("access-token");
    useCookie.delCookie("email");
    setUser(null);
  };
  const signdel = async (userId: string) => {
    const response = await deleteUser(userId);
    if (response.status !== 200) return response;
    useCookie.delCookie("access-token");
    useCookie.delCookie("email");
    setUser(null);
  };
  const signupd = async (params: any) => {
    const response = await updateUser(params);
    if (response.status !== 200) return response;
    setUser(response.data);
  };
  const handleResponse = ({ headers, data }: any) => {
    setUser(data);
    useCookie.setCookie("email", data.email);
    service.defaults.headers.common["email"] = data.email;
    if (!headers["access-token"]) return;
    useCookie.setCookie("access-token", headers["access-token"]);
    service.defaults.headers.common["access-token"] = headers["access-token"];
  };

  return {
    getInfo,
    signin,
    signup,
    signre,
    signout,
    signdel,
    signupd,
    isLoggedIn,
  };
};
export default useAuth;
