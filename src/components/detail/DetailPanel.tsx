import styled from "styled-components";

const StyledDetailPanel = styled.div`
  display: flex;
  flex-direction: column;
`;
interface DetailPanelProps {
  children: JSX.Element;
}
const DetailPanel: React.FC<DetailPanelProps> = ({ children }) => {
  return <StyledDetailPanel>{children}</StyledDetailPanel>;
};

export default DetailPanel;
