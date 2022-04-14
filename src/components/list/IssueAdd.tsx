import { lighten } from "polished";
import styled from "styled-components";

const StyledIssueAdd = styled.div`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  height: 2.5rem;
  color: #fff;
  background: #f67e7d;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    background-color: ${lighten(0.1, "#F67E7D")};
    color:#444;
  }
`;
const IssueAdd = () => {
  return <StyledIssueAdd>이슈 등록</StyledIssueAdd>;
};
export default IssueAdd;
