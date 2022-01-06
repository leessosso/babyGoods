import { useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

// const axios = require("axios");
// const cheerio = require("cheerio");
let hitlist = [];
export default function useCrwalling({ url, listName, itemName, image }) {
  const getPpomppu = async () => {
    try {
      return await axios.get(url);
    } catch (err) {
      console.log(err);
    }
  };

  const parsing = async () => {
    const html = await getPpomppu();
    const $ = cheerio.load(html.data);
    const $hitList = $(listName);

    $hitList.each((idx, node) => {
      const title = $(node).find(itemName).text();
      const src = "https://agabangmall.com" + $(node).find("img").attr("src");
      console.log(idx, src);
      //https://agabangmall.com/data/goods/22/01/01//1000025687/register_main_074.jpg
      hitlist.push({ title: title, src: src });
    });
  };

  useEffect(() => {
    parsing();
  });

  return hitlist;
}
