/* 
메모이제이션 기법

동일한 연산을 할때 이전에 연산된 값을 메모리에 저장해서
동일한 연산을 줄이는 기법
실행속도를 빠르게 해주는 기술이다.

*/

function Memo(n){
    return str(n);
}

function str(n){
    return `${n}`;
}

// ----------------- 기본 -------------------------//

// 메모리
let memo = {};

function Memo2(n){
    let result;
    // 메모리에 값이 있는지 확인
    // n in memo 키값이 있는지 확인
    // memo 객체에 "a" 값이 있으면
    // 매개변수로 n에 "a"값이 있으면 true를 반환
    if(n in memo){
        // 동일작업 연산 x
        result = memo[n];
    }else{
        result = str2(n);
        memo[n] = result;
    }
    return result;
}

function str2(n){
    return `${n}`;
}





