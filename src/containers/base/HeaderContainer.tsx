import { useNavigate } from "react-router-dom";
import Header from "@/components/base/Header";

const HeaderContainer = () => {
  const navigate = useNavigate();

  const onClickHomeBtn = () => {
    navigate("/");
  };

  return <Header onClickHomeBtn={onClickHomeBtn}/>;
};

export default HeaderContainer;
