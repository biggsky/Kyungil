// 타입 추론 없이 배열 선언
// interface _any {
//     a :string,
//     b : number
// }
// const strArr : _any[] = [{a:2,b:2}, "2", "3"];

const numArr : number[] = [1,2,3];

// 튜플
// 각 배열의 자리에 타입을 지정

const tuple : [string, number, object] = ["hello", 123, {a:1,b:2}];
// 순서도 일치해야함!!
