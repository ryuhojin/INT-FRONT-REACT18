import UpBtn from "@/components/common/UpBtn";
import { IssueList } from "@/components/list";
import useIntersectionObserver from "@/libs/hooks/useIntersectionObserver";
import {
  refreshListStatus,
  useSelectAllIssue,
} from "@/libs/store/modules/issue";
import { useRef } from "react";

const IssueListContainer = () => {
  const hasMoreChecker = useRef();

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
      <IssueList />
      <UpBtn />
    </>
  );
};
export default IssueListContainer;
