import "./App.css";
import React, { useEffect, useState } from "react";
import MainHome from "./page/MainHome";
import { Route, Routes } from "react-router-dom";
import Introduce from "./page/Introduce";
import Crwalling from "./page/Crwalling";
import HeaderContainer from "./containers/Base/HeaderContainer";
import MenuBarContainer from "./containers/Base/menuBarContainer";
import axios from "axios";

const App = () => {
  const [testState, setTestState] = useState("nothing");
  const callApi = async () => {
    axios.get("/api").then((res) => {
      console.log(res.data.test);
      setTestState(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <HeaderContainer />
      <MenuBarContainer />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/crwalling" element={<Crwalling />} />
      </Routes>
      <div>{testState}</div>
      {/* <MainHome /> */}
    </div>
  );
};

export default App;
