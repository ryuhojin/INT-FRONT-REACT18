import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import BaseTemplate from "@/components/template/BaseTemplate";

const Home = lazy(() => import("@/pages/Home"));

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
      <Suspense
        fallback={
          <BaseTemplate>
            <></>
          </BaseTemplate>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default Root;
