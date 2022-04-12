import styled from "styled-components";

const StyledSubTitle = styled.h3`
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;
const SubTitle = () => {
  return (
    <StyledSubTitle>
      K-스택오버플로우
      <br />
      내 코드의 문제 낫워킹에서 해결하세요
    </StyledSubTitle>
  );
};
export default SubTitle;
