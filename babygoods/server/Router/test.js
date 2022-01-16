const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Iconv = require("iconv-lite");

router.get("/", (req, res) => {
  res.send({ test: "hi everyone!" });
});

router.get("/crwalling", async (req, res) => {
  let html;
  let hitlist = [];
  try {
    html = await axios.get(
      "https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu&hotlist_flag=2"
    );
  } catch (err) {
    console.log(err);
  }
  // console.log(html);

  const $ = cheerio.load(Iconv.decode(html.data, "EUC-KR"));
  const $hitList = $(".list1");

  $hitList.each((idx, node) => {
    // console.log($(node).find(".list_title").text());
    hitlist.push({
      title: $(node).find(".list_title").text(),
    });
  });

  res.send(hitlist);
});

module.exports = router;
