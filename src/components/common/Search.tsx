import styled from "styled-components";

const StyleSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  background: #fff;
  padding:.8rem .8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-right: 0rem;
  }
`;

const StyledInput = styled.input`
  outline:none;
  background:#fafafa;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  padding:.5rem;
  width:60%;
`;
const Search = ({ ...rest }: any) => {
  return (
    <StyleSearchContainer>
      <StyledInput {...rest} placeholder="검색어를 입력해주세요" />
      <div>정렬</div>
    </StyleSearchContainer>
  );
};
export default Search;
