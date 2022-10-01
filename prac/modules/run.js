// const add = require("./math");
/**
 * exports.add 사용시 쓸 방법
 */
const {add} = require("./math");


/**
 * module.exports 사용법
 */
// console.log(add(3, 2));

/**
 * exports.add 사용법
 * 불러 들일때 객체 구조 분해 할당 방식으로 
 * 하면 간편하다. 
 */
console.log(add(10,20))
