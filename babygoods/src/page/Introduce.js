import React, { Fragment, useEffect } from "react";
import useCrwalling from "../common/Hook/useCrwalling";
import UnitBox from "../components/Unit/unitBox";

const Introduce = () => {
  // setTimeout(() => {
  //   console.log(goodsList[0]?.title ? goodsList[0].title : "none");
  // }, 500);
  return (
    <Fragment>
      <div>
        <h1>소개</h1>
      </div>
      <UnitBox />
    </Fragment>
  );
};

export default Introduce;
