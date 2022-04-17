import { lighten } from "polished";
import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";

const StyledUpBtn = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  background: #f9adad;
  &:hover {
    background: ${lighten(0.1, "#f9adad")};
    color: #0a0a0a;
  }
`;

const UpBtn = () => {
  const onClickTopBtn = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <StyledUpBtn onClick={onClickTopBtn}>
      <BsArrowUp />
    </StyledUpBtn>
  );
};
export default UpBtn;
