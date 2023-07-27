import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ActivePage } from "./pages/ActivePage/ActivePage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <ActivePage />
      </div>
    </BrowserRouter>
  );
};

export default App;
