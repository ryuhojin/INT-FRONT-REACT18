import styled, { css } from "styled-components";

const StyledAuthPasswordForm = styled.div<{ mode: string }>`
  width: 100%;
  display: flex;
  height: 3rem;
  input {
    flex: 1;
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    background: #1e1e1e;
    color: #fff;
    border: 1px solid #dee2e6;
    &:focus {
      ${(props) =>
        props.mode === "LOGIN"
          ? css`
              border: 1px solid #f67e7d;
            `
          : css`
              border: 1px solid #c8f2cc;
            `}
    }
    &::placeholder {
      color: #acacac;
    }
    &:disabled {
      background: #1e1e1e;
    }
  }
`;
interface AuthPasswordFormProps {
  mode: string;
}
const AuthPasswordForm: React.FC<AuthPasswordFormProps> = ({ mode }) => {
  return (
    <StyledAuthPasswordForm mode={mode}>
      <input type="password" placeholder="비밀번호를 입력해주세욘"/>
    </StyledAuthPasswordForm>
  );
};
export default AuthPasswordForm;
