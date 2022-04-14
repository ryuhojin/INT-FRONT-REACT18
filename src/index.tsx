import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";

import Root from "./Root";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <HelmetProvider>
    <RecoilRoot>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </RecoilRoot>
  </HelmetProvider>
);
