import { useCallback, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";

import { searchAtom, listStatusAtom } from "..";

import { selectAllIssue } from "@/libs/api/modules/issueApi";
import useDebounce from "@/libs/hooks/useDebounce";

const refreshListStatus = () => {
  const [status, setStatus] = useRecoilState(listStatusAtom);
  return useEffect(() => {
    if (!status) return;
    setStatus(false);
  });
};

const useSearchForSearch = () => useRecoilState(searchAtom);

const useSelectAllIssue = () => {
  const search = useRecoilValue(searchAtom);
  const status = useRecoilValue(listStatusAtom);
  return useInfiniteQuery(
    ["selectAllIssue", useDebounce({ value: search, delay: 1000 }), status],
    async ({ pageParam = { query: search, page: 0 } }) => {
      return selectAllIssue({
        query: pageParam.query,
        page: pageParam.page,
      });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextId
          ? { query: search, page: lastPage.nextId }
          : false;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
};

export { refreshListStatus, useSelectAllIssue, useSearchForSearch };
