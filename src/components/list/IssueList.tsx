import styled from "styled-components";
import { Search, Sort, SubTitle } from "@/components/common";
import IssueAdd from "./IssueAdd";

const StyledIssueList = styled.div`
  margin-top: 1rem;
`;
const IssueList = () => {
  return (
    <>
      <StyledIssueList>
        <SubTitle />
        <Search />
        <Sort />
        <IssueAdd />
      </StyledIssueList>
    </>
  );
};
export default IssueList;
