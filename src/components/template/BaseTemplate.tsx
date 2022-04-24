import HeaderContainer from "@/containers/base/HeaderContainer";
import { memo } from "react";
import styled from "styled-components";
import { media } from "@/libs/styles";

const StyledBaseTemplate = styled.div`
  height: 100%;
`;

const StyledHeaderTemplate = styled.div`
  width: 100%;
  background: #fff;
  dow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const StyledContentTemplate = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${media.small} {
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
        <HeaderContainer />
      </StyledHeaderTemplate>
      <StyledContentTemplate>{children}</StyledContentTemplate>
    </StyledBaseTemplate>
  );
};
export default memo(BaseTemplate);
