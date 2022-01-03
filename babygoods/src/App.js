import "./App.css";
import React from "react";
import MainHome from "./page/MainHome";
import { Route, Routes } from "react-router-dom";
import Introduce from "./page/Introduce";
import HeaderContainer from "./containers/Base/HeaderContainer";
import MenuBarContainer from "./containers/Base/menuBarContainer";
const App = () => {
  return (
    <div>
      <HeaderContainer />
      <MenuBarContainer />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
      {/* <MainHome /> */}
    </div>
  );
};

export default App;
