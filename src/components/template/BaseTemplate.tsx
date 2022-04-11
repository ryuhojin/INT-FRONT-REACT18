import styled from "styled-components";

const StyledBaseTemplate = styled.div`
  background: #fff;
  height: 100%;
`;

const StyledContentTemplate = styled.div`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 2rem);
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
      {header}
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default BaseTemplate;