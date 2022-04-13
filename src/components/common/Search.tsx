import styled from "styled-components";
import { BsSortDown } from "react-icons/bs";
const StyleSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0.8rem 0.8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;

  @media only screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-right: 0rem;
    border:0;
    border-top:1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;

const StyledInput = styled.input`
  outline: none;
  background: #fafafa;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  padding: 0.5rem;
  width: 60%;
`;
const StyledSort = styled.div`
  display: flex;
  align-items: center;
  color: #555;
  font-size: 0.9rem;
  svg {
    cursor: pointer;
  }
  svg:hover {
    color: #f67e7d;
  }
`;
const Search = ({ ...rest }: any) => {
  return (
    <StyleSearchContainer>
      <StyledInput {...rest} placeholder="검색어를 입력해주세요" />
      <StyledSort>
        최신순 &nbsp; <BsSortDown size={25} />
      </StyledSort>
    </StyleSearchContainer>
  );
};
export default Search;
