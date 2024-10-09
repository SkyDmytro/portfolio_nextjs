import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./fonts/SourceSansPro-Black.otf";
import "./fonts/SourceSansPro-BlackIt.otf";
import "./fonts/SourceSansPro-Bold.otf";
import "./fonts/SourceSansPro-BoldIt.otf";
import "./fonts/SourceSansPro-ExtraLight.otf";
import "./fonts/SourceSansPro-ExtraLightIt.otf";
import "./fonts/SourceSansPro-Regular.otf";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
