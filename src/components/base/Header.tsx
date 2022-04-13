import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 1728px;
  margin-left: auto;
  font-size: 1.125rem;
  margin-right: auto;
  @media only screen and (max-width: 1919px) {
    width: 1376px;
  }
  @media only screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media only screen and (max-width: 1056px) {
    width: calc(100% - 2rem);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
`;

const StyledLogo = styled.h4`
  cursor: pointer;
  color:#F67E7D;
  :hover {
    color: ${lighten(0.1, "#F67E7D")};
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  color:#000;
  font-size:0.9rem;
  div {
    cursor: pointer;
  }
  div:hover {
    color: ${lighten(0.1, "#000")};
  }
  div + div {
    margin-left: 1rem;
  }
`;

const Header = ({
  onClickHomeBtn,
}: {
  onClickHomeBtn: React.ReactEventHandler<Element>;
}) => {
  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <StyledLogo onClick={onClickHomeBtn}>NOTWORKING</StyledLogo>
          <StyledMenuList>
            <div>로그인</div>
          </StyledMenuList>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};
export default React.memo(Header);
