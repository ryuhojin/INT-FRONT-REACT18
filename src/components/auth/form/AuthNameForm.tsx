import React from "react";
import styled from "styled-components";

const StyledAuthNameForm = styled.div`
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
      border: 1px solid #c8f2cc;
    }
    &::placeholder {
      color: #acacac;
    }
    &:disabled {
      background: #1e1e1e;
    }
  }
`;
interface AuthNameFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AuthNameForm: React.FC<AuthNameFormProps> = ({ value, onChange }) => {
  return (
    <StyledAuthNameForm>
      <input
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={value}
        onChange={onChange}
      />
    </StyledAuthNameForm>
  );
};
export default AuthNameForm;
