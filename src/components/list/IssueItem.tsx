import styled, { css } from "styled-components";
import { AiOutlineComment, AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { media } from "@/libs/styles";

const StyledIssueItem = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  border: 1px solid #ddd;
  ${media.small} {
    margin-left: 0rem;
    margin-right: 0rem;
    border-radius: 0px;
    border: 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  :hover {
    background: #fff9f9;
    transform: translate(0, -5px);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    ${media.small} {
      transform: none;
    }
  }
`;
const StyledIssuCategoryContainer = styled.div`
  padding: 0.8rem;
  ${media.small} {
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
  ${media.small} {
    font-size: 0.8rem;
  }
`;
const StyledIssueCategorySolve = styled.span<{ solved: boolean }>`
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  color: #000;
  font-size: 0.9rem;
  ${media.small} {
    font-size: 0.7rem;
  }
  ${(props) => {
    return props.solved
      ? css`
          background: #c8f2cc;
        `
      : css`
          background: #e1e1e1;
        `;
  }}
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
  ${media.small} {
    font-size: 0.7rem;
  }
`;

const StyledIssueUser = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  ${media.small} {
    font-size: 0.7rem;
  }
`;
const StyledIssueUserName = styled.span``;
const StyledIssueUserInfo = styled.span`
  display: flex;
  align-items: center;
`;

interface IssueItemProps {
  value: any;
  onClick: () => void;
}
const IssueItem: React.FC<IssueItemProps> = ({ value, onClick }) => {
  return (
    <StyledIssueItem onClick={onClick}>
      <StyledIssuCategoryContainer>
        <StyledIssueCategory>
          <StyledIssueCategoryTitle>{value.title}</StyledIssueCategoryTitle>
          <StyledIssueCategorySolve solved={value.adoptYn}>
            {value.adoptYn ? "해결완료" : "미해결"}
          </StyledIssueCategorySolve>
        </StyledIssueCategory>
        <StyledIssueContent>
          {value.content.replaceAll("```", "").replaceAll("#", "")}
        </StyledIssueContent>
        <StyledIssueDate>{value.modifiedDate}</StyledIssueDate>
        <StyledIssueUser>
          <StyledIssueUserName>{value.developer.name}</StyledIssueUserName>
          <StyledIssueUserInfo>
            <AiOutlineLike />
            &nbsp;{value.recommendationCount}&nbsp;
            <AiOutlineEye />
            &nbsp;{value.hits}&nbsp;
            <AiOutlineComment />
            &nbsp;{value.solutionCount}
          </StyledIssueUserInfo>
        </StyledIssueUser>
      </StyledIssuCategoryContainer>
    </StyledIssueItem>
  );
};
export default IssueItem;
