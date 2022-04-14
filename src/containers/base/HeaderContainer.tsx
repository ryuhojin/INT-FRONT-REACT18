import Header from "@/components/base/Header";
import { openAuthModal } from "@/store/modules/modal";

const HeaderContainer = () => {
  const onOpen = openAuthModal();
  return <Header onOpen={onOpen} />;
};
export default HeaderContainer;
