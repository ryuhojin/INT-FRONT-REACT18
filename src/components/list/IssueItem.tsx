import styled from "styled-components";

const StyledIssueItem = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ddd;
  @media only screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-right: 0rem;
    border-radius: 0px;
    border-top: 1px solid #ddd;
  }
`;
const StyledIssuCategoryContainer = styled.div`
  padding: 0.5rem;
`;
const StyledIssueCategory = styled.p`
  margin: 0;
`;
const IssueItem = () => {
  return (
    <StyledIssueItem>
      <StyledIssuCategoryContainer>
        <StyledIssueCategory>타입스크립트</StyledIssueCategory>
        <StyledIssueCategory>내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.</StyledIssueCategory>
      </StyledIssuCategoryContainer>
    </StyledIssueItem>
  );
};
export default IssueItem;
