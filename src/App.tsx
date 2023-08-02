import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ActivePage } from "./pages/ActivePage/ActivePage";
import { ArchivedPage } from "./pages/ArchivedPage/ArchivedPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto my-5">
        <Routes>
          <Route path="/" Component={ActivePage} />
          <Route path="/:archived" Component={ArchivedPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
