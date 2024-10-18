import React from "react";

import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="mx-auto my-16 md:my-0 grid place-items-center h-full md:h-screen w-11/12 md:max-w-4xl">
      <Dashboard />
    </div>
  );
};

export default App;
