import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-expect-error -- Side-effect CSS import is handled by the bundler.
import "./index.css";
import App from "./App.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
