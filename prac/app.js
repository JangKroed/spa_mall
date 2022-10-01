const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const goodsRouter = require("./routes/goods");
app.use("/api", [goodsRouter]);


/**
 * body parser middle ware를 사용하기 위한 문법
 */
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.send("기본 URL에 POST 메소드가 정상적으로 실행되었습니다.");
});

// app.get("/", (req, res) => {
//   /**
//    * body, params, query 확인
//    */
//   console.log(req.query);

//   res.send("정상적으로 반환되었습니다.");
// });

app.get("/", (req, res) => {
  console.log(req.query);

  // const obj = {
  //   "keykey": "value 입니다.",
  //   "이름입니다": "이름일까요?",
  // };

  /**
   * 바로 넣어줘도 사용가능.
   * 변수명만 넣어줄 시 res.json(obj)
   */
  // res.json({
  //   "keykey": "value 입니다.",
  //   "이름입니다": "이름일까요?",
  // });
  /**
   * 이렇게하면 에러메세지 처럼 사용가능
   */
  res.status(400).json({
    keykey: "value 입니다.",
    이름입니다: "이름일까요?",
  });
});

/**
 * ':' id을 기본 URL 뒤에 들어오는 모든 정보값은 id로 들어온다는 뜻.
 */
app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(":id URL에 정상적으로 반환되었습니다.");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

/**
 * .use는 app이라는 express객체에 전역으로 쓰고 모든 미들웨어가 통과시킬때 사용
 * localhost:3000/api -> goodsRouter
 */
// app.use("/api", [goodsRouter]);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

// 수정 하고나서 바로 페이지 적용하는 방법이 따로 있나 ?

/** 스키마를 connect에 할당 */
const connect = require("./schemas");
connect();

