import { App } from "@/app";
import ReactDOM from "react-dom/client";
import "@/index.css";

const rootElement = document.getElementById("app");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
