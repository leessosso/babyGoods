import React, { Fragment } from "react";
import MainImage from "../components/Base/MainImage/MainImage";
import SearchBar from "../components/Base/searchBar/SearchBar";
import Logo from "../components/Image/Loge";
import styles from "./MainHome.module.css";
// import StyledComponent from "../StyledComponent";

const MainHome = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <SearchBar />
      </div>

      <div>
        <MainImage>
          <Logo />
        </MainImage>
      </div>
    </Fragment>
  );
};

export default MainHome;
