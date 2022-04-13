import styled from "styled-components";

const StyledAuthPasswordForm = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  input {
    flex: 1;
  }
`;
const AuthPasswordForm = () => {
  return (
    <StyledAuthPasswordForm>
      <input type="password" />
    </StyledAuthPasswordForm>
  );
};
export default AuthPasswordForm;
