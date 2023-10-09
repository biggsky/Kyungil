// 우리가 제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면 되요.
console.log("객체: 상태(데이터)와 동작(코드)가 있다는 부분이 중요하다.");

// if문 비교문
if (true) {
    // 여기 있는 구문을 실행시키는 조건은
    // if () 괄호안에 true 냐? false의 차이로 실행을 시킨다.
    console.log()
    // 불이 꺼져있으면 실행될일 자체가 없다. 너 괜찮니? 이거 왜써?
    // 불이 켜져있으면 실행될수도 있겠네?
    // 여기 내용을 실행시키고 싶을때도 있고, 실행시키고 싶지 않을때도 있는데.
    // 이 괄호에다 연산자를 넣어주면 값을 비교하면서 실행시키거나
    // 실행 안되게 할수 있겠구나?
}

let age = 1;
let age2 = 10;

// age 나야
// age보다 age2가 값이 크니까 true 라서 if문 조건에 맞아.
// if(age < age2){
//     // 조건이 맞으니까 실행
//     console.log("내 나이가 작구나")
// }

// false면 실행 시키고 싶은데...

// else if가 아닐때 false
if (age < age2) {
    // 조건이 맞으니까 실행
    console.log("내 나이가 작구나");
} else {
    // false면 else문 실행
    console.log("나는 else문");
}

// 참과 거짓 말고 더 없나? 비교를 더하고 싶은데.
if (age < age2) {
    // age보다 age2가 더 커야지 true 여기선 5,5 같은 값이니까
    // false가 나온다.

    // if문이 맞으면 이 코드 실행
} else if (age == age2) {
    // if문이 틀리면 여기로 와서 조건이 맞는지 확인 맞으면 실행
    // 5 ==5 이니까 값이 같다 true
    // 여기를 실행
    console.log("나는 else if문");
} else {
    // else if문의 조건이 맞지 않으면 else 실행
    console.log("나는 두번째 else문")
}

// 반복문 for문
// 여러번 반복 실행해야할 구문이 있을때 사용한다.
// 반복문중에 하나이고

let b = 9;
// 변수 선언하고, 값을 확인하고, for문 안에 있는 구문을 실행 하고 나서
// 값을 증가시킵니다.
// 증가 시킨다음에 비교를 하고 true면 구문 다시 실행
// 다시 실행후에 증가 시키고 비교문 확인
// 증가되다가 비교문이 false로 안맞게되면 그때 반복문 종료
// 무한으로 반복시키면 사이트가 터짐 이러면 안된다.(조건식을 잘 확인하세요.)

let gu = 1;
let res;
for (let a = 1; a <= b; a++) {
    for (let b = 1; b < 10; b++) {
        res = a * b;
        console.log(a + "*" + b + "=" + res);
    }
    console.log('\n');
}

console.log("----------------------------------");
let students = ["토니스타크", "스파이더맨", "캡틴아메리카", "블랙위도우", "토르"];
let award = ["스파이더맨"];

for(let a =0; a<3; a++){
    if(students[a] == award[0]){
        console.log(students[a]);
    }
}
console.log("----------------------------------");

for(let a=1; a<=60; a++){
    if(a%3 == 0){
        console.log("짝");
    }else{
        console.log(a);
    }
}


