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

  const REST_API_KEY = "2cb7bc17e1fa44e5da8e222a35c49b43";
  const REDIRECT_URI = "http://localhost:3000/crwalling";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <HeaderContainer />
      <MenuBarContainer />
      <div>{testState}</div>
      <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/mainHome" element={<MainHome />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/crwalling" element={<Crwalling />} />
      </Routes>
      {/* <MainHome /> */}
    </div>
  );
};

export default App;
