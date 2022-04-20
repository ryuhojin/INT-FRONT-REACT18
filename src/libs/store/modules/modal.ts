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
    set(formAtom, { username: "", password: "", name: "", message: "" });
  });
const closeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(authAtom, { views: false, mode: "LOGIN" });
    set(layerAtom, { layer: false });
    set(formAtom, { username: "", password: "", name: "", message: "" });
  });
const modeAuthModal = () =>
  useRecoilTransaction_UNSTABLE(({ get, set }) => () => {
    const nextMode = get(authAtom).mode === "LOGIN" ? "REGISTER" : "LOGIN";
    set(authAtom, { views: true, mode: nextMode });
    set(formAtom, { username: "", password: "", name: "", message: "" });
  });

const useAuthForm = () => {
  const [form, setForm] = useRecoilState(formAtom);
  return {
    username: form.username,
    password: form.password,
    name: form.name,
    message: form.message,
    setUsername: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ username: e.target.value } }),
    setPassword: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ password: e.target.value } }),
    setName: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, ...{ name: e.target.value } }),
    setMessage: (message: string) =>
      setForm({ ...form, ...{ message: message } }),
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
