import { QUERY_CLIENT } from "@/config/reactQuery.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import "@fontsource-variable/inconsolata";
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";

import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
