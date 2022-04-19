import { selectAllIssue } from "@/libs/api/modules/issueApi";
import useDebounce from "@/libs/hooks/useDebounce";
import { useInfiniteQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { searchAtom, listStatusAtom } from "..";

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

export default useSelectAllIssue;
