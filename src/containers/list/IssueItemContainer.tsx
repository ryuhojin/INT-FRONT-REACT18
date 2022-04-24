import { IssueItem } from "@/components/list";
import { useNavigate } from "react-router-dom";

const IssueItemContainer = ({ value }: any) => {
  const navigate = useNavigate();

  return (
    <IssueItem value={value} onClick={() => navigate(`/detail/${value.id}`)} />
  );
};
export default IssueItemContainer;
