import { media } from "@/libs/styles";
import styled from "styled-components";

const StyledSubTitle = styled.h4`
  margin:1rem;
  text-align: center;
  ${media.small} {
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
