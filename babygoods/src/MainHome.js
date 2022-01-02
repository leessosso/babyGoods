import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./MainHome.module.css";
import StyledComponent from "./StyledComponent";

const MainHome = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        유아용품 <span className="something">메인페이지</span>
        <div>
          <Link to="/introduce">사이트 소개</Link>
        </div>
      </div>
      <div>
        <StyledComponent />
      </div>
    </Fragment>
  );
};

export default MainHome;
