import styled from "styled-components";
import { Search, SubTitle } from "@/components/common";
import { IssueAdd, IssueItem } from ".";

const StyledIssueList = styled.div`
  
`;
const StyledIssueItemList = styled.div`
  div + div {
    margin-top: 0.5rem;
  }
`;
const IssueList = () => {
  return (
    <>
      <StyledIssueList>
        <SubTitle name={"리스트"}/>
        <Search />
        <IssueAdd />
        <StyledIssueItemList>
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
          <IssueItem />
        </StyledIssueItemList>
      </StyledIssueList>
    </>
  );
};
export default IssueList;
