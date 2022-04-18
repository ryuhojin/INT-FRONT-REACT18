import styled from "styled-components";
import { WriteTitle, WriteEditor, WriteSwitch } from ".";
import { SubTitle } from "../common";

const StyledWritePanel = styled.div`
  display: flex;
  flex-direction: column;
`;
const WritePanel = () => {
  return (
    <StyledWritePanel>
      <SubTitle name={"글쓰기"} />
      <WriteTitle />
      <WriteSwitch />
      <WriteEditor />
    </StyledWritePanel>
  );
};
export default WritePanel;
