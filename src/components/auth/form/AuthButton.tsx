import { lighten } from "polished";
import styled from "styled-components";

const StyledAuthButton = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  height: 3rem;
  button {
    flex: 1;
    background: #f67e7d;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: ${lighten(0.1, "#f67e7d")};
    }
  }
`;
const AuthButton = () => {
  return (
    <StyledAuthButton>
      <button>로그인</button>
    </StyledAuthButton>
  );
};
export default AuthButton;
