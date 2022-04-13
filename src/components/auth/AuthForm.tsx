import styled from "styled-components";

import { media } from "@/libs/styles";

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
    font-size: 1.3125rem;
    color: #ececec;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #acacac;
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

interface AuthFormProps {
  mode: "REGISTER" | "LOGIN";
}
const AuthForm: React.FC<AuthFormProps> = ({ mode }) => {
  const modeText = mode === "REGISTER" ? "회원가입" : "로그인";

  return (
    <StyledAuthForm>
      <StyledAuthWrapper>
        <h2 data-testid="title">{modeText}</h2>
      </StyledAuthWrapper>
      <StyledAuthFoot>
        <span>
          {mode === "LOGIN"
            ? "아직 회원이 아니신가요?"
            : "계정이 이미 있으신가요?"}
        </span>
        <div className="link" tabIndex={7} data-testid="switchmode">
          {mode === "LOGIN" ? "회원가입" : "로그인"}
        </div>
      </StyledAuthFoot>
    </StyledAuthForm>
  );
};
export default AuthForm;