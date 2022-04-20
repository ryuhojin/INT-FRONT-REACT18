import { checkAuthEmail, sendAuthEmail } from "@/libs/api/modules/authApi";
import useValidate from "@/libs/utils/useValidate";
import React from "react";
import {
  useRecoilValue,
  useRecoilTransaction_UNSTABLE,
  useRecoilState,
} from "recoil";
import { layerAtom, authAtom, formAtom } from "..";

const stateBaseLayer = () => useRecoilValue(layerAtom);

const openAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(authAtom, { views: true, mode: "LOGIN" });
    set(layerAtom, { layer: true });
    set(formAtom, {
      email: "",
      password: "",
      name: "",
      message: "",
      emailCert: "",
      isSendCert: false,
      isCert: false,
    });
  });
const closeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(authAtom, { views: false, mode: "LOGIN" });
    set(layerAtom, { layer: false });
    set(formAtom, {
      email: "",
      password: "",
      name: "",
      message: "",
      emailCert: "",
      isSendCert: false,
      isCert: false,
    });
  });
const modeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
    const nextMode = get(authAtom).mode === "LOGIN" ? "REGISTER" : "LOGIN";
    set(authAtom, { views: true, mode: nextMode });
    set(formAtom, {
      email: "",
      password: "",
      name: "",
      message: "",
      emailCert: "",
      isSendCert: false,
      isCert: false,
    });
  });

//TODO : 여기에 두는건 올바르지 않은것 같음.
//나중에 위치 변경하여야됨, 로직이랑 단순 입력이랑 분리시키자
const useAuthForm = () => {
  const [form, setForm] = useRecoilState(formAtom);
  return {
    email: form.email,
    password: form.password,
    name: form.name,
    message: form.message,
    emailCert: form.emailCert,
    isSendCert: form.isSendCert,
    isCert: form.isCert,
    setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({
        ...form,
        ...{
          email: e.target.value,
          isCert: false,
          isSendCert: false,
          emailCert: "",
          message: "",
        },
      }),
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ password: e.target.value } }),
    setName: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ name: e.target.value } }),
    setMessage: (message: string) =>
      setForm({ ...form, ...{ message: message } }),
    setEmailCert: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ emailCert: e.target.value } }),
    setIsSendCert: async () => {
      const isCorrectEmail = useValidate.email(form.email);
      if (isCorrectEmail) await sendAuthEmail(form.email);
      setForm({
        ...form,
        ...{
          isSendCert: isCorrectEmail,
          emailCert: "",
          message: !isCorrectEmail ? "이메일 형식이 아닙니다." : "",
        },
      });
    },
    setIsCert: async () => {
      const { data } = await checkAuthEmail(form.email, form.emailCert);
      data.successYn
        ? setForm({ ...form, ...{ isCert: true,message:"" } })
        : setForm({
            ...form,
            ...{ isCert: false, message: "인증번호가 옳지 않습니다." },
          });
    },
  };
};

const stateAuthModal = () => useRecoilValue(authAtom);

export {
  stateBaseLayer,
  openAuthModal,
  closeAuthModal,
  modeAuthModal,
  stateAuthModal,
  useAuthForm,
};
