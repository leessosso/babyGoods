//크롤링 강의
// https://www.youtube.com/watch?v=xbehh8lWy_A

// 크로스 브라우징 서버없을 때 임시해결법
// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ko

import React from "react";
import axios from "axios";
import cheerio from "cheerio";

// const axios = require("axios");
// const cheerio = require("cheerio");

const getPpomppu = async () => {
  try {
    return await axios.get(
      "https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu&hotlist_flag=2"
    );
  } catch (err) {
    console.log(err);
  }
};

let hitlist = [];

const parsing = async () => {
  const html = await getPpomppu();
  //   console.log(html.data);
  const $ = cheerio.load(html.data);
  const $hitList = $(".list1");

  $hitList.each((idx, node) => {
    console.log($(node).find(".list_title").text());
    hitlist.push({
      title: $(node).find(".list_title").text(),
    });
  });
};

parsing();

export default function crwalling() {
  return (
    <div>
      {hitlist.map((el) => (
        <div>{el.title}</div>
      ))}
    </div>
  );
}
