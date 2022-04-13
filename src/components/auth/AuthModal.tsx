import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import styled, { css } from "styled-components";

import { zIndexes, media, transitions } from "@/libs/styles";

const StyledAuthModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndexes.AuthModal};
`;

const StyledAuthModalWrapper = styled.div<{ visible: boolean }>`
  width: 606px;
  height: 550px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  ${media.small} {
    flex: 1;
    width: auto;
    height: 100%;
  }
  ${(props) =>
    props.visible
      ? css`
          animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;

const StyledLeftPanel = styled.div`
  width: 180px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #000;
  h2 {
    font-weight: 400;
  }
  ${media.small} {
    display: none;
  }
`;

const StyledLeftMessageColor = styled.span`
  color: #f67e7d;
`;

const StyledRightPanel = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  background: #121212;
  flex-direction: column;
  ${media.small} {
    overflow-y: auto;
  }
`;

const StyledRightExit = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #868e96;
  font-size: 1.5rem;
  svg {
    cursor: pointer;
  }
  ${media.small} {
    margin-bottom: 0;
  }
`;
interface AuthModalProps {
  visible: boolean;
  children: JSX.Element;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
  visible,
  children,
  onClose,
}) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeOutId: ReturnType<typeof setTimeout> | null = null;
    if (visible) {
      setClosed(false);
    } else {
      timeOutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;
  return (
    <StyledAuthModal>
      <StyledAuthModalWrapper visible={visible}>
        <StyledLeftPanel>
          <h2>
            세상의 모든
            <StyledLeftMessageColor>ISSUE SOLUTION</StyledLeftMessageColor>
            <br />
            <span>NOTWORKING</span>
          </h2>
        </StyledLeftPanel>
        <StyledRightPanel>
          <StyledRightExit>
            <MdClose onClick={onClose} tabIndex={1} />
          </StyledRightExit>
          {children}
        </StyledRightPanel>
      </StyledAuthModalWrapper>
    </StyledAuthModal>
  );
};
export default AuthModal;
