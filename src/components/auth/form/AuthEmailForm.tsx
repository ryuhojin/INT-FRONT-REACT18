import styled from "styled-components";

const StyledAuthEmailForm = styled.div`
  width: 100%;
  display: flex;
  height: 3rem;
  input {
    flex: 1;
  }
  button {
    width: 6rem;
  }
`;
const AuthEmailForm = () => {
  return (
    <StyledAuthEmailForm>
      <input />
    </StyledAuthEmailForm>
  );
};
export default AuthEmailForm;
