import styled from "styled-components";
import { WriteTitle, WriteEditor, WriteSwitch } from ".";

const StyledWritePanel = styled.div`
  display: flex;
  flex-direction: column;
`;
const WritePanel = () => {
  return (
    <StyledWritePanel>
      <WriteTitle />
      <WriteSwitch />
      <WriteEditor />
    </StyledWritePanel>
  );
};
export default WritePanel;
