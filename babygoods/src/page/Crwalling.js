//크롤링 강의
// https://www.youtube.com/watch?v=xbehh8lWy_A

// 크로스 브라우징 서버없을 때 임시해결법
// https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ko

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Crwalling() {
  const [html, setHtml] = useState("");
  const [hitlist, setHitlist] = useState([]);

  const getPpomppu = async () => {
    return await axios.get("api/crwalling");
  };

  const parsing = async () => {
    const html = await getPpomppu();
    setHitlist(html.data);
  };

  useEffect(() => {
    parsing();
  }, []);

  return (
    <>
      <div>
        {hitlist.map((el, idx) => (
          <div key={idx}>{el.title}</div>
        ))}
      </div>
    </>
  );
}
