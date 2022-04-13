import BackLayer from "@/components/common/BackLayer";
import AuthModalContainer from "../auth/AuthModalContainer";

const Core = () => {
  return (
    <>
      <BackLayer visible={true} />
      <AuthModalContainer />
    </>
  );
};
export default Core;
