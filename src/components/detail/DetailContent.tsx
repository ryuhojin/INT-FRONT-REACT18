import styled from "styled-components";

const StyledDetailContent = styled.div`
  padding: 0 1rem;
`;

const DetailTitle = styled.h1``;
const DetailInfo = styled.p`
  color: #444;
  display: flex;
  justify-content: space-between;
`;
const DetailContext = styled.div``;
const DetailContent = () => {
  return (
    <StyledDetailContent>
      <DetailTitle>
        이것은 테스트 제목으로 실제와 다를수가 있습니다. 개발에 유의하여 주세요.
      </DetailTitle>
      <DetailInfo>
        <span>테스터</span>
        <span>2022-02-01 PM 01:11</span>
      </DetailInfo>
      <hr />
      <DetailContext></DetailContext>
    </StyledDetailContent>
  );
};
export default DetailContent;
