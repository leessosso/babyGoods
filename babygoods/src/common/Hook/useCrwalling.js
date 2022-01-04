import { useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";

// const axios = require("axios");
// const cheerio = require("cheerio");
let hitlist = [];
export default function useCrwalling(url, listName) {
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
      const title = $(node).find(".item_name").text();
      console.log(idx);
      hitlist.push({ title: title });
    });
  };

  useEffect(() => {
    parsing();
  });

  return hitlist;
}
