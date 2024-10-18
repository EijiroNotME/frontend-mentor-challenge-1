import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Providers
import { ProfileProvider } from "../src/custom-hooks/useProfileContext";

createRoot(document.getElementById("root")).render(
  <ProfileProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ProfileProvider>
);
