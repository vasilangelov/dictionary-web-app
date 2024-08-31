import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import "@fontsource-variable/inter";
import "@fontsource-variable/lora";
import "@fontsource-variable/inconsolata";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
