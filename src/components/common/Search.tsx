import styled from "styled-components";

const StyledInput = styled.input`
  width: -webkit-fill-available;
  font-size:1.25rem;
  padding:1rem;
  margin:0 1rem;
  border:1px solid #aaa;
  border-radius: 5px;
  :focus  {
    outline-color: #F67E7D;
  }
`;
const Search = ({ ...rest }: any) => {
  return <StyledInput {...rest} placeholder="검색어를 입력해주세요"/>;
};
export default Search;