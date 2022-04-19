import { AuthForm, AuthModal } from "@/components/auth";
import { useCallback } from "react";
import {
  stateAuthModal,
  closeAuthModal,
  modeAuthModal,
} from "@/libs/store/modules/modal";
const AuthModalContainer = () => {
  const state = stateAuthModal();
  const onClose = closeAuthModal();
  const onToggle = modeAuthModal();

  return (
    <AuthModal visible={state.views} onClose={onClose}>
      <AuthForm mode={state.mode} onToggle={onToggle} />
    </AuthModal>
  );
};
export default AuthModalContainer;
