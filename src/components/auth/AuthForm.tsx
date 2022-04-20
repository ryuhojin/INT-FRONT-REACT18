import styled from "styled-components";

import { media } from "@/libs/styles";
import {
  AuthButton,
  AuthEmailForm,
  AuthNameForm,
  AuthPasswordForm,
} from "./form";
import { useAuthForm } from "@/libs/store/modules/modal";
import AuthCertForm from "./form/AuthCertForm";

const StyledAuthForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
`;
const StyledAuthWrapper = styled.div`
  ${media.small} {
    margin-top: 2rem;
  }
  h2,
  h4 {
    font-weight: 400;
    margin: 0;
  }
  h2 {
    font-size: 1.125rem;
    color: #ececec;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #acacac;
  }
  p {
    color: #ececec;
    text-align: center;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      color: #f67e7d;
    }
  }
  .errMsg {
    color: #ff4c4c;
  }
`;
const StyledAuthFoot = styled.div`
  ${media.small} {
    margin-top: 2rem;
  }
  text-align: right;
  span {
    font-weight: 400;
    margin-right: 0.25rem;
    color: #ececec;
  }
  .link {
    font-weight: 400;
    display: inline-block;
    font-weight: bold;
    color: #f67e7d;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledErrorMessage = styled.p`
  text-align: center;
  color: #fe7676 !important;
`;
interface AuthFormProps {
  mode: string;
  onToggle: () => void;
  onSubmit: () => void;
}
const AuthForm: React.FC<AuthFormProps> = ({ mode, onToggle, onSubmit }) => {
  const modeText = mode === "REGISTER" ? "회원가입" : "로그인";
  const {
    email,
    emailCert,
    isSendCert,
    isCert,
    password,
    name,
    message,
    setEmail,
    setEmailCert,
    setPassword,
    setName,
    setIsSendCert,
    setIsCert
  } = useAuthForm();

  return (
    <StyledAuthForm>
      <StyledAuthWrapper>
        <h2 data-testid="title">{modeText}</h2>
        <section>
          <h4>이메일</h4>
          <AuthEmailForm
            mode={mode}
            value={email}
            onChange={setEmail}
            btnValue={isSendCert}
            isCert={isCert}
            onClick={setIsSendCert}
          />
        </section>
        {mode === "REGISTER" && isSendCert && !isCert && (
          <section>
            <h4>인증번호</h4>
            <AuthCertForm
              mode={mode}
              value={emailCert}
              onChange={setEmailCert}
              onClick={setIsCert}
              btnValue={isCert}
            />
          </section>
        )}

        <section>
          <h4>비밀번호</h4>
          <AuthPasswordForm
            mode={mode}
            value={password}
            onChange={setPassword}
          />
        </section>
        {mode === "REGISTER" && isSendCert && isCert && (
          <section>
            <h4>이름</h4>
            <AuthNameForm value={name} onChange={setName} />
          </section>
        )}
        <AuthButton mode={mode} onClick={onSubmit} />
        {mode === "LOGIN" ? <p>Github로 로그인하기</p> : <></>}
        <p className="errMsg">{message}</p>
      </StyledAuthWrapper>
      <StyledAuthFoot>
        <span>
          {mode === "LOGIN"
            ? "아직 회원이 아니신가요?"
            : "계정이 이미 있으신가요?"}
        </span>
        <div
          className="link"
          tabIndex={7}
          data-testid="switchmode"
          onClick={onToggle}
        >
          {mode === "LOGIN" ? "회원가입" : "로그인"}
        </div>
      </StyledAuthFoot>
    </StyledAuthForm>
  );
};
export default AuthForm;
