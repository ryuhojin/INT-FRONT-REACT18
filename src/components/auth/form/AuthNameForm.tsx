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
const AuthNameForm = () => {
  return (
    <StyledAuthNameForm>
      <input type="text" />
    </StyledAuthNameForm>
  );
};
export default AuthNameForm;
