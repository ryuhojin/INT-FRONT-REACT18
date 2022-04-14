import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

import Core from "@/containers/base/Core";
import BaseTemplate from "@/components/template/BaseTemplate";

import Home from "@/pages/HomePage";

const loadableConfig = {
  fallback: (
    <BaseTemplate>
      <></>
    </BaseTemplate>
  ),
};
const User = loadable(() => import("@/pages/UserPage"), loadableConfig);

const Root = () => {
  return (
    <>
      <Helmet>
        <title>낫 워킹</title>
        <meta
          name="description"
          content="개발자들의 편한 트러블 슈팅들을 도와드립니다."
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>

      <Core />
    </>
  );
};
export default Root;
