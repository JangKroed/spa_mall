const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const goodsRouter = require("./routes/goods");
app.use("/api", [goodsRouter]);

const connect = require("./schemas");
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸습니다.");
});
