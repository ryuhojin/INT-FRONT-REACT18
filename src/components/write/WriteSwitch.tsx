import styled from "styled-components";

const StyledWriteSwitch = styled.div`
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WriteSwitch = () => {
  return (
    <StyledWriteSwitch>
      <span>모드 : 쓰기</span>
      <span>스위치자리</span>
    </StyledWriteSwitch>
  );
};
export default WriteSwitch;
