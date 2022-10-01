/** 몽구스 라이브러리를 불러온다 */
const mongoose = require("mongoose");

const connect = () => {
  mongoose
    /** 설치한 MongoDB에 접근 (connect)
     * localhost:27017에 있는 spa_mall에 접근
     */
    .connect("mongodb://localhost:27017/spa_mall")
    // .connect("mongodb+srv://test:<password>@cluster0.hg1pk.mongodb.net/?retryWrites=true",{dbname:'spa_mall'})

    /**
     * 접근이 안되거나 에러가 났을때
     * 나타낼 메세지를 띄우는 역할
     */
    .catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

/** 내보낼 모듈 */
module.exports = connect;
