import "./App.css";
import React from "react";
import MainHome from "./MainHome";
import { Route, Routes } from "react-router-dom";
import Introduce from "./page/Introduce";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
      {/* <MainHome /> */}
    </div>
  );
};

export default App;
