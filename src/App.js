import React from "react";
import AppRoutes from "./components/routes/Routes";
import Header from "./components/pages/Header";

const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
