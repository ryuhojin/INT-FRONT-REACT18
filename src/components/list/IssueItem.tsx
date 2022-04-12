import styled from "styled-components";

const StyledIssueItem = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  @media only screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-right: 0rem;
    border-radius: 0px;
    border-top: 1px solid #ddd;
  }
`;
const StyledIssuCategoryContainer = styled.div`
  padding: 0.3rem 0 0.3rem 0.3rem;
  background: #77b2ff;
`;
const StyledIssueCategory = styled.p`
  margin: 0;
`;
const IssueItem = () => {
  return (
    <StyledIssueItem>
      <StyledIssuCategoryContainer>
        <StyledIssueCategory>타입스크립트 </StyledIssueCategory>
      </StyledIssuCategoryContainer>
      <p>
        asdfadsdfadsfasdfadsf adfasd fa dfadsfasdfadsf adfasd fa dfadsfasdfadsf
        adfasd fa dfadsfasdfadsf adfasd fa dfadsfasdfadsf adfasd fa fasdfadsf
        adfasd fa sd fa sd fa
      </p>
    </StyledIssueItem>
  );
};
export default IssueItem;
