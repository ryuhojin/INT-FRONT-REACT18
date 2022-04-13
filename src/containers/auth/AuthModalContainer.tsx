import { AuthForm, AuthModal } from "@/components/auth";
import { useCallback } from "react";

const AuthModalContainer = () => {
  const onClose = useCallback(() => {}, []);

  return (
    <AuthModal visible={true} onClose={onClose}>
      <AuthForm mode="LOGIN" />
    </AuthModal>
  );
};
export default AuthModalContainer;
