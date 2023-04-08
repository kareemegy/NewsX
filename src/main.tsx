import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Layout";
import { UIProvider } from "./contexts/UIContext";
import "./theme/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <UIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UIProvider>
  </>
);
