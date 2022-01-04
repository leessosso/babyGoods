import React, { Fragment } from "react";
import MainImage from "../components/Base/MainImage/MainImage";
import Logo from "../components/Image/Loge";
import styles from "./MainHome.module.css";
// import StyledComponent from "../StyledComponent";

const MainHome = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        유아용품 <span className="something">메인페이지</span>
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
