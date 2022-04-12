import IssueList from "@/components/list/IssueList";
import BaseTemplate from "@/components/template/BaseTemplate";
import HeaderContainer from "@/containers/base/HeaderContainer";
const Home = () => {
  return (
    <BaseTemplate header={<HeaderContainer />}>
      <IssueList/>
    </BaseTemplate>
  );
};
export default Home;