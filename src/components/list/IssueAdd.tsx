import { lighten } from "polished";
import styled from "styled-components";

const StyledIssueAdd = styled.div`
  margin: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #e1e1e1;
  width: -webkit-fill-available;
  height: 2.5rem;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    border: 1px dashed #F67E7D;
  }
`;
const IssueAdd = () => {
  return <StyledIssueAdd>이슈 등록</StyledIssueAdd>;
};
export default IssueAdd;
