import React from "react";
import { ProfileProvider } from "../src/custom-hooks/useProfileContext";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <ProfileProvider>
      <div className="mx-auto my-16 md:my-0 grid place-items-center h-full md:h-screen w-11/12 md:max-w-4xl">
        <Dashboard />
      </div>
    </ProfileProvider>
  );
};

export default App;
