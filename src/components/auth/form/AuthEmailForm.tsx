import { lighten } from "polished";
import styled, { css } from "styled-components";

const StyledAuthEmailForm = styled.div<{ mode: string }>`
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
  button {
    width: 5rem;
    background: #c8f2cc;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover,
    &:focus {
      background: ${lighten(0.1, "#c8f2cc")};
    }
    &:disabled {
      background: #f1f3f5;
      color: #ced4da;
      cursor: default;
    }
  }
`;
interface AuthEmailFormProps {
  mode: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AuthEmailForm: React.FC<AuthEmailFormProps> = ({
  mode,
  value,
  onChange,
}) => {
  return (
    <StyledAuthEmailForm mode={mode}>
      <input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      {mode === "REGISTER" ? <button>메일인증</button> : <></>}
    </StyledAuthEmailForm>
  );
};
export default AuthEmailForm;
