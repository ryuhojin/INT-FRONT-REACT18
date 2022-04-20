import { AuthForm, AuthModal } from "@/components/auth";
import useAuth from "@/libs/store/modules/auth";
import {
  stateAuthModal,
  closeAuthModal,
  modeAuthModal,
  useAuthForm,
} from "@/libs/store/modules/modal";
import { useState } from "react";
const AuthModalContainer = () => {
  //상태 및 참조
  const auth = useAuth();
  const state = stateAuthModal();
  const { username, password, name, setMessage } = useAuthForm();
  //이벤트
  const onClose = closeAuthModal();
  const onToggle = modeAuthModal();
  const onSubmit = async () => {
    const response =
      state.mode === "LOGIN"
        ? await auth.signin({ username: username, password: password })
        : await auth.signup({
            userId: username,
            password: password,
            name: name,
          });
    if (response?.status == 200) onClose();
    setMessage(response?.data.message);
  };

  return (
    <AuthModal visible={state.views} onClose={onClose}>
      <AuthForm mode={state.mode} onToggle={onToggle} onSubmit={onSubmit} />
    </AuthModal>
  );
};
export default AuthModalContainer;
