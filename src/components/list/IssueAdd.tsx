import { lighten } from "polished";
import styled from "styled-components";

const StyledIssueAdd = styled.button`
  margin: .5rem 1rem 0 1rem;
  border: 1px dashed #000;
  width: -webkit-fill-available;
  height: 3rem;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: ${lighten(0.25, "#F67E7D")};
  }
`;
const IssueAdd = () => {
  return <StyledIssueAdd>이슈 등록</StyledIssueAdd>;
};
export default IssueAdd;
