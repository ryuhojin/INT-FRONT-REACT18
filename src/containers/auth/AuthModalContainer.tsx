import { AuthForm, AuthModal } from "@/components/auth";
import useAuth from "@/libs/store/modules/auth";
import {
  stateAuthModal,
  closeAuthModal,
  modeAuthModal,
  useAuthForm,
} from "@/libs/store/modules/modal";
const AuthModalContainer = () => {
  //상태 및 참조
  const auth = useAuth();
  const state = stateAuthModal();
  const { email, password, name, isCert, setMessage } = useAuthForm();
  //상태값은 메일인증 / 메일보냄 / 인증완료
  //1.메일인증을 누르면 메일전송 (인증번호창 나옴)//메일보냄이라고바뀜
  //2. 인증번호 입력후 인증이 완료누르면 창사라지고
  //이벤트
  const onClose = closeAuthModal();
  const onToggle = modeAuthModal();
  const onSubmit = async () => {
    const response =
      state.mode === "LOGIN"
        ? await auth.signin({ email: email, password: password })
        : isCert
        ? await auth.signup({
            email: email,
            password: password,
            name: name,
          })
        : setMessage("이메일 인증을 완료해주세요.");
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
