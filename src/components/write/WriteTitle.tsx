import { media } from "@/libs/styles";
import styled from "styled-components";

const StyledWriteTitle = styled.input`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 5px;
  border:1px solid #e1e1e1;
  ${media.small}{
      border:none;
      border-radius: 0;
      border-top:1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
  }
  outline: none;
`;

const WriteTitle = () => {
  return <StyledWriteTitle type={"text"} placeholder="제목을 입력해주세요." />;
};
export default WriteTitle;
