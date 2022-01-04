import React, { Fragment } from "react";
import useCrwalling from "../common/Hook/useCrwalling";
import UnitBox from "../components/Unit/unitBox";

const Introduce = () => {
  const goodsList = useCrwalling(
    "https://agabangmall.com/goods/goods_list.php?cateCd=061",
    ".goodsBOX1"
  );
  return (
    <Fragment>
      <div>
        <h1>소개</h1>
      </div>
      <UnitBox goodsList={goodsList} />
    </Fragment>
  );
};

export default Introduce;
