// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require("express");
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();
const path = require("path");
const port = 3001;

const test = require("./Router/test");
// 3001 포트로 서버 오픈
app.listen(port, function () {
  console.log(`start! express server on port ${port}`);
});

app.use("/api", test);

app.use(express.static(path.join(__dirname, "../babygoods/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../babygoods/build/index.html"));
});
