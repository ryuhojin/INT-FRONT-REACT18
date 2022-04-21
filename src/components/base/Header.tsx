import { lighten } from "polished";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "@/libs/styles";
import useAuth from "@/libs/store/modules/auth";

const StyledHeader = styled.div`
  width: 1728px;
  margin-left: auto;
  font-size: 1.125rem;
  margin-right: auto;
  ${media.xxlarge} {
    width: 1376px;
  }
  ${media.xlarge} {
    width: 1024px;
  }
  ${media.medium} {
    width: calc(100% - 2rem);
  }
  a {
    text-decoration: none;
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
  color: #f67e7d;
  :hover {
    color: ${lighten(0.1, "#F67E7D")};
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  height: 100%;
  font-size: 0.9rem;
  .menu {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
  }
  .menu-group {
    display: flex;
    height: 100%;
    align-items: center;
    div {
      cursor: pointer;
    }
    div + div {
      margin-left: 1rem;
    }
  }
`;
interface HeaderProps {
  onOpen: () => void;
}
const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const auth = useAuth();

  return (
    <>
      <StyledHeader>
        <StyledContainer>
          <Link to="/">
            <StyledLogo>NOTWORKING</StyledLogo>
          </Link>
          <StyledMenuList>
            {auth.isLoggedIn() ? (
              <>
                <div className="menu-group">
                  <div>내정보</div>
                  <div onClick={auth.signout}>로그아웃</div>
                </div>
              </>
            ) : (
              <div className="menu" onClick={onOpen}>
                로그인
              </div>
            )}
          </StyledMenuList>
        </StyledContainer>
      </StyledHeader>
    </>
  );
};
export default React.memo(Header);
