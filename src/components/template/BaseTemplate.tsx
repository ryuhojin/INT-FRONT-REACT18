import { lighten } from "polished";
import styled from "styled-components";

const StyledBaseTemplate = styled.div`
  height: 100%;
`;

const StyledHeaderTemplate = styled.div`
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const StyledContentTemplate = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BaseTemplate = ({
  children,
  header,
}: {
  children: JSX.Element | JSX.Element[];
  header: JSX.Element;
}) => {
  return (
    <StyledBaseTemplate>
      <StyledHeaderTemplate>{header}</StyledHeaderTemplate>
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default BaseTemplate;
