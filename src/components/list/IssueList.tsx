import styled from "styled-components";
import { Search, Sort, SubTitle } from "@/components/common";
import { IssueAdd, IssueItem } from ".";

const StyledIssueList = styled.div`
  margin-top: 1rem;
`;
const StyledIssueItemList = styled.div`
  div + div {
    margin-top: 0.8rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
    }
  }
`;
const IssueList = () => {
  return (
    <>
      <StyledIssueList>
        <SubTitle />
        <Search />
        <Sort />
        <IssueAdd />
        <StyledIssueItemList>
          <IssueItem />
          <IssueItem />
          <IssueItem />
        </StyledIssueItemList>
      </StyledIssueList>
    </>
  );
};
export default IssueList;
