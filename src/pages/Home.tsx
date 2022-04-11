import BaseTemplate from "@/components/template/BaseTemplate";
import HeaderContainer from "@/containers/base/HeaderContainer";
const Home = () => {
  return (
    <BaseTemplate header={<HeaderContainer />}>
      <div>안녕</div>
    </BaseTemplate>
  );
};
export default Home;