import BackLayer from "@/components/common/BackLayer";
import AuthModalContainer from "../auth/AuthModalContainer";
import { stateBaseLayer } from "@/libs/store/modules/modal";
const Core = () => {
  const state = stateBaseLayer();
  return (
    <>
      <BackLayer visible={state.layer} />
      <AuthModalContainer />
    </>
  );
};
export default Core;
