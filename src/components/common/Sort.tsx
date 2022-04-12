import styled from "styled-components";

const StyledSort = styled.div`
  margin: 0.5rem 1rem 0 1rem;
  display: flex;
  justify-content: flex-end;
  select {
    font-size: 1rem;
    padding:.2rem
  }
`;
const Sort = () => {
  return (
    <StyledSort>
      <select>
        <option>최신순</option>
        <option>인기순</option>
      </select>
    </StyledSort>
  );
};
export default Sort;
