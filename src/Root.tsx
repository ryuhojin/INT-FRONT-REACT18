import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "@/components/App";
//TODO : Recoil Update For TypeScript
const Root = () => {
  return (
    <>
      {/* <RecoilRoot>  */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </RecoilRoot> */}
    </>
  );
};
export default Root;
