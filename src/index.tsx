import { createRoot } from "react-dom/client";
import Root from "./Root";
import "./styles/main.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<Root />);
