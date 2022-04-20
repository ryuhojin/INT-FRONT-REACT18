import styled from "styled-components";
import { Search, SubTitle } from "@/components/common";
import { IssueAdd, IssueItem } from ".";
import React, { Fragment } from "react";

const StyledIssueList = styled.div``;
const StyledIssueItemList = styled.div`
  div + div {
    margin-top: 0.5rem;
  }
`;
const EmptyList = styled.p`
  color: #a1a1a1;
  text-align: center;
`;
const LastItemChecker = styled.div``;

interface IssueListProps {
  search: string;
  setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasMoreChecker: React.MutableRefObject<any>;
  status: string;
  isFetchingNextPage: boolean;
  data: any;
}
//TODO : SKELETON 작업 해야됨 ( 로딩 중 - > 검색중 -> 에러 디자인 추후 해야됨)
//1차 release 후 작업하자.
const IssueList: React.FC<IssueListProps> = ({
  search,
  setSearch,
  hasMoreChecker,
  status,
  isFetchingNextPage,
  data,
}) => {
  return (
    <>
      <StyledIssueList>
        <SubTitle name={"리스트"} />
        <Search value={search} onChange={setSearch} />
        <IssueAdd />
        <StyledIssueItemList>
          {
            {
              loading: <span></span>, //초기검색
              success: (
                <Fragment>
                  {data && data[0].content.length ? (
                    data.map((value: any, index: number) => {
                      return (
                        <Fragment key={index}>
                          {value.content.map((value: any, index: number) => {
                            return <IssueItem key={index} value={value} />;
                          })}
                        </Fragment>
                      );
                    })
                  ) : (
                    <EmptyList>검색결과가 없습니다</EmptyList>
                  )}
                </Fragment>
              ),
              error: <span></span>, //에러
            }[status]
          }
          {
            isFetchingNextPage && <span></span> //로딩중
          }
        </StyledIssueItemList>
        <LastItemChecker ref={hasMoreChecker} />
      </StyledIssueList>
    </>
  );
};
export default IssueList;
