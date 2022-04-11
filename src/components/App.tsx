import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { Home } from "@/pages";
import Alert from "@/components/common/Alert";
const App = () => {
  return (
    <>
      <Helmet>
        <title>낫 워킹</title>
        <meta
          name="description"
          content="개발자들의 편한 트러블 슈팅들을 도와드립니다."
        />
        <meta name="keywords" content="프론트엔드, 서버, 백엔드, 화면, UI, UX, 개발, 에러, 트러블, 슈팅, 해결" />
        <meta name="author" content="ryuhojin" />
        <meta name="og:site_name" content="낫 워킹" />
        <meta name="og:title" content="페이지별 제목 들어갈 곳" />
        <meta name="og:description" content="페이지별 요약 내용 들어갈 곳" />
        <meta name="og:type" content="website" />
      </Helmet>
      <Alert/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
