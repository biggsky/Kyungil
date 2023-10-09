// javascript
let num = 20;
const str = "javascript"
const nan = NaN;
const infinity = Infinity;
const bool = true;
const nullValue = null;
const undefinedValue = undefined;

const obj = {};
const arr = [];

const fn = (a: any) =>{
    console.log(a);
}
// 실제로는 자바스크립트에서 any를 사용할수 없지만, 예시로 넣어둠

const sum = (a : any, b:any) =>{
    return a+b;
}
// 실제로는 자바스크립트에서 any를 사용할수 없지만, 예시로 넣어둠

const any = "";

const unknown = "";



// typescript
let num2 : number = 20;
const str2 : string = "typescript"
const nan2 : number = NaN;
const infinity2 : number = infinity;
const bool2 : boolean = true;
const nullValue2 : null = null;
const undefinedValue2 : undefined = undefined;

const obj2 : object = {};

// <> 제네릭 타입 설정. 
// 배열의 요소가 number이라고 지정(데이터 타입을 매개변수 시킬 수 있다.);
// const arr2 : Array<number> = [1,2,3];
const arr2 : Array<number | string> = ["s", 1];

// void : 함수 실행시 비어있다는 것을 의미
// 반환값이 없는 함수라는것
const fn2 = (a:number):void =>{
    console.log(a);
}

// 함수명 = ():return의 타입(반환값의 타입) => {}
const sum2 = (a:number, b:number):number =>{
    return a+b;
}

// any : 어떤 타입이든 할당할 수 있다. 되도록 남발 하지 말자. 타입의 안정성이 보장되지 않음
const any2 : any = "";

// 런타임 컴파일
console.log(any2.length);

// 1. 안정성의 기준이 누구일까?
// 2. [key : string]은 정확히 뭘까? 왜 배열형태를 띌까?
// 3. 타입 추론 그리고 타입스크립트를 왜 사용할까?
/* 
1. 안정성의 기준은 프로그래밍 언어와 해당 언어의 타입 시스템에 의해 결정됨.
이 기준을 따라 코드를 작성하면 컴파일러가 코드를 분석하고 검사하여 안정성을 보장합니다.

2. [key: string]: any; 는 TypeScript 에서 인덱서(Indexer)라고 불리는 것입니다. 이것은 객체의 속성명(key)을 동적으로 정의하는 방법입니다.

3-1. 타입 추론을 왜 사용하는가?
1) 코드 가독성 향상. 
2) 생산성 향상
3) 타입 안정성 제공
4) 유지보수성 향상 : 코드를 읽는 사람들이 변수나 함수의 타입을 빠르게 이해할 수 있음.
5) 동적 타입 언어와의 상호 운용성

타입 추론을 통해 코드의 가독성을 높이고, 타입 에러를 줄이며, 개발자의 생산성을 향상시킬 수 있습니다. 그러나 경우에 따라서는 명시적인 타입 선언이 필요한 상황도 있으니, 상황에 따라 적절히 활용하는 것이 좋습니다.

3-2. TypeScript를 사용하는 이유?
1) 타입 안정성 보장 : TypeScript는 정적 타입을 지원하여 코드 실행 전에 타입 에러를 발견할 수 있습니다. 이는 프로그램이 런타임에 동작 중 에러를 일으키는 상황을 사전에 방지해줍니다.
2) 코드 가독성 향상
3) 개발자 간 협업 향상
4) 




*/


// unknown : 어떤 타입이든 할당 가능 타입의 안정성 보장
const unknown2 : unknown = "";

if(typeof unknown2 === "string")
console.log(unknown2.length);



const asd=(a:any)=>{
return a
}
// ???