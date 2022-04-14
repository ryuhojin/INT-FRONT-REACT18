import { lighten } from "polished";
import styled, { css } from "styled-components";

const StyledAuthButton = styled.div<{ mode: string }>`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  height: 3rem;
  button {
    flex: 1;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;

    ${(props) =>
      props.mode === "LOGIN"
        ? css`
            background: #f67e7d;
            &:hover {
              background: ${lighten(0.1, "#f67e7d")};
            }
          `
        : css`
            background: #c8f2cc;
            &:hover {
              background: ${lighten(0.1, "#c8f2cc")};
            }
          `}
  }
`;
interface AuthButtonProps {
  mode: string;
}
const AuthButton: React.FC<AuthButtonProps> = ({ mode }) => {
  return (
    <StyledAuthButton mode={mode}>
      <button>{mode === "LOGIN" ? "로그인" : "회원가입"}</button>
    </StyledAuthButton>
  );
};
export default AuthButton;
