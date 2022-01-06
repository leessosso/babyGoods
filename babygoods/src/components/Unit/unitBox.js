import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import useCrwalling from "../../common/Hook/useCrwalling";

const Box = styled.div`
  /*props로 넣어 준 값을 직접 전달해 줄 수 있음*/
  border: 1px solid #dddddd;
  padding: 0 0 50px;
  display: inline-block;
  width: 25%;
  position: relative;
  margin: 0 3px;
`;

export const UnitBox = () => {
  const [title, setTitle] = useState("");
  const [Image, setImage] = useState("");

  const goodsList = useCrwalling({
    url: "https://agabangmall.com/goods/goods_list.php?cateCd=061",
    listName: ".goodsBOX1",
    itemName: ".item_name",
    image: ".middle gd_image_lazy",
  });

  useEffect(() => {
    if (title) return;
    if (goodsList[0]?.title) {
      console.log(goodsList[0]?.title ? goodsList[0].title : "none");
      setTitle(goodsList[0]?.title);
      setImage(goodsList[0]?.src);
    } else {
      setTimeout(() => {
        // 크롤링 시간 때문에 값이 늦게 와서 방어코드
        console.log("1000", goodsList[0]?.title ? goodsList[0].title : "none");
        setTitle(goodsList[0]?.title);
        setImage(goodsList[0]?.src);
      }, 1000);
      return;
    }
  }, [goodsList, setTitle, title]);

  return (
    <Fragment>
      <Box color="black">
        <li className="goodsBOX1">
          <div className="item_cont">
            <div className="item_photo_box">
              <a href="../goods/goods_view.php?goodsNo=1000025491">
                <img
                  width="100%"
                  vertical-align="top"
                  alt={title}
                  title={title}
                  className="middle gd_image_lazy"
                  src={Image}
                />
              </a>
              <div className="item_icon_box"></div>
            </div>
            <div className="item_info_cont">
              <div className="item_tit_box">
                <a href=" ">
                  <strong className="item_name">{title}</strong>
                </a>
              </div>
              <div className="item_money_box Montserrat ">
                <strong className="item_price">
                  <span>
                    19,000<span className="price_unit">원</span>{" "}
                  </span>
                </strong>
              </div>
              <span className="rating_star crema-product-reviews-score">
                <span>별 다섯개중 다섯개</span>
              </span>
              <span
                className="rating_count crema-product-reviews-count"
                data-product-code="1000025491"
                data-format="(&#123;&#123;&#123;count&#125;&#125;&#125;)"
                data-hide-if-zero="1"
              ></span>
              <div className="rank">
                <i
                  className="crema-product-reviews-score"
                  data-product-code="1000025491"
                ></i>
                <span
                  className="crema-product-reviews-count"
                  data-product-code="1000025491"
                  data-hide-if-zero="1"
                ></span>
              </div>
            </div>
          </div>
        </li>
      </Box>
    </Fragment>
  );
};

export default UnitBox;
