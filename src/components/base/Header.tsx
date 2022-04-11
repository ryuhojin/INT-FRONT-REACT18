import { darken, lighten } from "polished";
import React, { EventHandler, ReactEventHandler } from "react";
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
  @media only screen and (max-width: 1440px) {
    width: calc(100% - 2rem);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  color: #36558f;
`;

const StyledLogo = styled.h3`
  cursor: pointer;
  :hover {
    color: ${lighten(0.1, "#36558F")};
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  div {
    cursor: pointer;
  }
  div:hover {
    color: ${lighten(0.1, "#36558F")};
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
            <div>이슈목록</div>
            <div>로그인</div>
          </StyledMenuList>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};
export default React.memo(Header);
