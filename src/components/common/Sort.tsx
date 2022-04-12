import styled from "styled-components";

const StyledSort = styled.div`
  margin: 0.5rem .5rem 0 .5rem;
  display: flex;
  justify-content: flex-end;
  select {
    font-size: 1rem;
    padding:.2rem
  }
  select:focus{
    outline-color:#F67E7D;
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
