import styled from "styled-components";

const StyledDetailContent = styled.div`
  padding: 0 1rem;
`;

const DetailTitle = styled.h1``;
const DetailInfo = styled.p`
  color: #555555;
  display: flex;
  justify-content: space-between;
`;
const DetailContext = styled.div`
  ::before {
    content: "테스트공간";
  }
  height: 200px;
`;
const DetailUser = styled.div``;
const DetailUserContent = styled.p`
  margin: 0.5rem 0;
`;
const DetailUserIcons = styled.p`
  text-align: right;
  span {
    cursor: pointer;
  }
  span + span {
    margin-left: 1rem;
  }
`;
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
      <hr />
      <DetailUser>
        <h3>테스터</h3>
        <DetailUserContent>
          테스터 유저에 대한 설명은 지금 이 글과 같습니다 이사람은 이렇고 저렇고
          저렇고입니다. 가나다라마바사아자카타파하
        </DetailUserContent>
        <DetailUserIcons>
          <span>블로그</span>
          <span>깃허브</span>
        </DetailUserIcons>
      </DetailUser>
    </StyledDetailContent>
  );
};
export default DetailContent;
