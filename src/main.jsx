import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { initTheme } from "./utils/themeInit.js";

import App from "./App.jsx";
import "modern-normalize";
import "./i18n.js";

import "./index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
