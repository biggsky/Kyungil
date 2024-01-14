/*
머클트리

npm i merkle

merkle tree 데이터의 암호화 구조가 트리 형태

머클 트리

*/

const merkle = require("merkle");

const data = ["A", "B", "C", "D", "E"];
/*
데이터의 무결성 검증에 사용되는 트리 구조
블록의 필수 요소이고 데이터들을 해시화해서 더한후 해시화 반복
트리처럼 뻗어서 마지막 루트 해시값을 구해서 사용한다.

머클루트를 처리할때 홀수일 경우, 마지막 데이터를 한번 더 해시해서 사용한다.
const data = ["A", "B", "C", "D", "E", "E"]; 이렇게 마지막데이터가 복사됨
*/

const merkleTree = merkle("sha256").sync(data);
const Root = merkleTree.root();
console.log(Root);


/*
A 해시화 B 해시화 둘다 더해 AB
C 해시화 D 해시화 둘다 더해 CD
E 해시화 E 해시화 둘다 더해 EE

AB해시화 CD 해시화 더해 ABCD
EE해시화 EE 해시화 더해 EEEE

ABCD 해시화 EEEE 해시화 더해 머클루트

*/




