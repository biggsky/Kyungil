/*
// 우리가 window를 생략해서 작성하던 것과 같이 
// window.console.log() 이렇게 안했었음
// console.log() 이렇게 사용했지
    global과 module을 생략해서 작성할 수 있다.
*/
console.log(module.exports === exports);        // true 뜸 -> 생략을 해도 된다.

exports.obj = {a : 1};
exports.add = () =>{
    return 2;
}
function add2(){
    console.log("난 함수임");
}
exports.add2 = add2;