import styled from "styled-components";
import { AiOutlineComment, AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { lighten } from "polished";

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
    border:0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;
const StyledIssuCategoryContainer = styled.div`
  padding: 0.8rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const StyledIssueCategory = styled.p`
  margin: 0.3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIssueCategoryTitle = styled.span`
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const StyledIssueCategorySolve = styled.span`
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  background: ${lighten(0.1, "#9ee9a6")};
  color: #000;
  font-size: 0.9rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const StyledIssueContent = styled.p`
  font-weight: 400;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const StyledIssueDate = styled.p`
  margin: 0.3rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StyledIssueUser = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  @media only screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
const StyledIssueUserName = styled.span``;
const StyledIssueUserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const IssueItem = () => {
  return (
    <StyledIssueItem>
      <StyledIssuCategoryContainer>
        <StyledIssueCategory>
          <StyledIssueCategoryTitle>
            제목입니다.제목입니다
          </StyledIssueCategoryTitle>
          <StyledIssueCategorySolve>해결완료</StyledIssueCategorySolve>
        </StyledIssueCategory>
        <StyledIssueContent>
          내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
        </StyledIssueContent>
        <StyledIssueDate>최종 수정일 : 2022-01-02 PM 03:22</StyledIssueDate>
        <StyledIssueUser>
          <StyledIssueUserName>류호진</StyledIssueUserName>
          <StyledIssueUserInfo>
            <AiOutlineLike />
            &nbsp;1&nbsp;
            <AiOutlineEye />
            &nbsp;7&nbsp;
            <AiOutlineComment />
            &nbsp;3
          </StyledIssueUserInfo>
        </StyledIssueUser>
      </StyledIssuCategoryContainer>
    </StyledIssueItem>
  );
};
export default IssueItem;
