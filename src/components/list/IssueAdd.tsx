import { lighten } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledIssueAdd = styled.div`
  margin: 0.5rem;
  a {
    text-decoration: none;
  }
  :hover {
    * {
      color: #444;
      background-color: ${lighten(0.1, "#F67E7D")};
    }
  }
`;

const StyledIssueAddBtn = styled.div`
  cursor: pointer;
  background: #f67e7d;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  height: 2.5rem;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;
const IssueAdd = () => {
  return (
    <StyledIssueAdd>
      <Link to="/write">
        <StyledIssueAddBtn>이슈 등록</StyledIssueAddBtn>
      </Link>
    </StyledIssueAdd>
  );
};
export default IssueAdd;
