import UpBtn from "@/components/common/UpBtn";
import { IssueList } from "@/components/list";
import useIntersectionObserver from "@/libs/hooks/useIntersectionObserver";
import { searchAtom } from "@/libs/store";
import {
  refreshListStatus,
  useSelectAllIssue,
  useSearchForSearch,
} from "@/libs/store/modules/issue";
import React, { useRef } from "react";

const IssueListContainer = () => {
  const hasMoreChecker = useRef();
  const [search, setSearch] = useSearchForSearch();
  refreshListStatus();
  const { status, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSelectAllIssue();

  useIntersectionObserver({
    target: hasMoreChecker,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  return (
    <>
      <IssueList
        search={search}
        setSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        hasMoreChecker={hasMoreChecker}
        data={data?.pages}
        status={status}
        isFetchingNextPage={isFetchingNextPage}
      />
      <UpBtn />
    </>
  );
};
export default IssueListContainer;
