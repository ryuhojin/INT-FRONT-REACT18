import { media } from "@/libs/styles";
import { darken, lighten } from "polished";
import styled from "styled-components";

const StyledUser = styled.div`
  margin-top: 2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: 1.5;
  padding: 1.5rem;
  ${media.small} {
    margin-top: 1rem;
  }
  h2,
  h4,
  h5 {
    margin: 0;
  }
  h2 {
    font-weight: 500;
    font-size: 1.425rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-weight: 400;
    font-size: 1rem;
    color: #444;
  }
  hr {
    border: 1px solid #e1e1e1;
    margin: 2rem 0 1rem 0;
  }
`;
const StyleUserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;
const StyleUserHeaderItem = styled.div`
  width: 10rem;
  display: flex;
  justify-content: center;
  div + div {
    margin-left: 0.5rem;
  }
  div {
    background: #fff;
    border: 1px solid #ddd;
    p {
      text-align: center;
      :nth-child(1) {
        margin: 0;
        padding: 0.3rem;
        background-color: #f67e7d;
        color: #fff;
      }
      :nth-child(2) {
        margin: 0.3rem 0;
      }
    }
  }
`;
const StyleUserBtnGroup = styled.div`
  margin-top: 1rem;
  text-align: right;
  span {
    cursor: pointer;
  }
  span + span {
    margin-left: 1.2rem;
  }
  .update {
    background: #f67e7d;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
    :hover {
      background: ${lighten(0.1, "#f67e7d")};
      color: #444;
    }
  }
  .delete {
    color: ${darken(0.3, "#f67e7d")};
    font-weight: 500;
    :hover {
      color: ${darken(0.1, "#f67e7d")};
    }
  }
`;

const User = () => {
  return (
    <StyledUser>
      <StyleUserHeader>
        <h2>
          류호진님 <br /> 오늘도 즐거운 코딩되세요.
        </h2>
        <StyleUserHeaderItem>
          <div>
            <p>인기도</p>
            <p>3K</p>
          </div>
          <div>
            <p>포인트</p>
            <p>1K</p>
          </div>
        </StyleUserHeaderItem>
      </StyleUserHeader>
      <hr />
      <section>
        <h4>아이디</h4>
        <h5>interarea@naver.com</h5>
      </section>
      <section>
        <h4>이름</h4>
        <h5>류호진</h5>
      </section>
      <section>
        <h4>깃허브</h4>
        <h5>https://github.com/ryuhojin</h5>
      </section>
      <section>
        <h4>블로그</h4>
        <h5>https://ryuhojin.tistory.com</h5>
      </section>
      <section>
        <h4>자기소개</h4>
        <h5>
          나는 네가 하나도 부럽지가 않아. 전혀 부럽지가 않아. 니가돈이 많겟니
          내가돈이 많겠니? 장기하 노래 좋다 좋아
        </h5>
      </section>
      <hr />
      <StyleUserBtnGroup>
        <span className="update">수정하기</span>
        <span className="delete">탈퇴하기</span>
      </StyleUserBtnGroup>
    </StyledUser>
  );
};
export default User;
