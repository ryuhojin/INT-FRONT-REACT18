import { memo } from "react";
import styled from "styled-components";
import Header from "../base/Header";

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
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <StyledBaseTemplate>
      <StyledHeaderTemplate>
        <Header />
      </StyledHeaderTemplate>
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default memo(BaseTemplate);
