import { media } from "@/libs/styles";
import { lighten } from "polished";
import styled from "styled-components";
import { WriteTitle, WriteEditor, WriteSwitch, WriteViewer } from ".";
import { SubTitle } from "../common";

const StyledWritePanel = styled.div`
  display: flex;
  flex-direction: column;
`;
const WriteBtn = styled.div`
  width: 5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  align-self: flex-end;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f67e7d;
  box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
  cursor: pointer;
  color: #fff;
  :hover {
    background: ${lighten(0.1, "#f67e7d")};
    color: #444;
  }
  ${media.small} {
    width: 100%;
    border-radius: 0%;
  }
`;
interface WritePanelProps {
  mode: string;
  text: string;
  editorRef: React.MutableRefObject<any>;
  onChangeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeText: () => void;
}
const WritePanel: React.FC<WritePanelProps> = ({
  mode,
  text,
  editorRef,
  onChangeMode,
  onChangeText,
}) => {
  return (
    <StyledWritePanel>
      <SubTitle name={"이슈 등록"} />
      <WriteTitle />
      <WriteSwitch mode={mode} onChangeMode={onChangeMode} />
      <WriteEditor
        onChange={onChangeText}
        initialValue={text}
        ref={editorRef}
        mode={mode}
      />
      <WriteViewer value={text} mode={mode} />
      <WriteBtn>이슈 등록</WriteBtn>
    </StyledWritePanel>
  );
};
export default WritePanel;
