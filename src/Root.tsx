import { Helmet } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
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
const Write = loadable(() => import("@/pages/WritePage"), loadableConfig);
const Detail = loadable(() => import("@/pages/DetailPage"), loadableConfig);
const Root = () => {
  // console.log(useLocation());
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
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

      <Core />
    </>
  );
};
export default Root;
