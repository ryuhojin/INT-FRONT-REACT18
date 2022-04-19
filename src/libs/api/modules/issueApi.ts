import service from "..";

interface listParams {
  query: string;
  page: number;
}
const selectAllIssue = async ({ query, page }: listParams) => {
  const queryParam = query ? `&query=${query}` : "";
  const { data } = await service.get(
    `issue/list/latest?page=${page}&size=20${queryParam}`
  );
  const content = data.content;
  const nextId = data.totalPages - 1 > data.number ? data.number + 1 : null;
  return { content, nextId };
};

interface issueParams {
  title: string;
  content: string;
  docType: string;
  hashtags: [];
}
const createIssue = async (params: issueParams) => {
  return await service.post("issue", params);
};

export { selectAllIssue, createIssue };
