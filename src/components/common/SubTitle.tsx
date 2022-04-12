import styled from "styled-components";

const StyledSubTitle = styled.h4`
  margin:1rem;
  text-align: center;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;
const SubTitle = () => {
  return (
    <StyledSubTitle>
     리스트
    </StyledSubTitle>
  );
};
export default SubTitle;
