import styled, { css } from "styled-components";
import { transitions, zIndexes } from "@/libs/styles";
import { useEffect } from "react";
const StyledBackLayer = styled.div<{ visible: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: ${zIndexes.BackLayer};
  background: rgba(0, 0, 0, 0.85);
  ${(props) =>
    props.visible
      ? css`
          animation: ${transitions.fadeIn} 0.25s forwards;
        `
      : css`
          animation: ${transitions.fadeOut} 0.25s forwards;
        `}
`;
interface BackLayerProps {
  visible: boolean;
}

const BackLayer: React.FC<BackLayerProps> = ({ visible }) => {
  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "initial";
  }, [visible]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "initital";
    };
  }, []);
  if (!visible) return null;
  return <StyledBackLayer visible={visible} />;
};
export default BackLayer;
