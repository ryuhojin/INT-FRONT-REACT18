import { media } from "@/libs/styles";
import styled from "styled-components";

const StyledSubTitle = styled.h4`
  margin: 1rem;
  text-align: center;
  ${media.small} {
    text-align: left;
  }
`;
interface SubTitleProps {
  name: string;
}
const SubTitle: React.FC<SubTitleProps> = ({ name }) => {
  return <StyledSubTitle>{name}</StyledSubTitle>;
};
export default SubTitle;
