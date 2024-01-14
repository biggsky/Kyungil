// ES7+ React/Redux/React-Native snippets
// rcc 누르면 함수 만들어짐

// 함수형 컴포넌트를 만들어보자.
// rafce   -  React Arrow Function Component Export

import React, {useEffect, useState} from 'react'
// 함수형 컴포넌트의 state와 props의 값은 어떻게 관리 해야하나
// react hook useState useEffect
// useState 상태값을 만들어준다. 상태값을 수정할때 사용할 메서드를 만들어준다.
// useEffect 라이프사이클을 지원 해준다.

// 함수형 컴포넌트의 props값은 함수의 매개변수로 전달 된다.
// 구조분해 할당해서 바로 사용해도 상관 없음
const Mycom3 = ({newnum, newnum2, newnum3}) => {
    console.log("🙂");
    console.log(newnum, newnum2, newnum3); // 이렇게 해도 되는데 구조분해 할당해서 사용해도 상관없음


    // count 변수 선언
    // 다시 리렌더링이 되면 코드를 다시 실행 시키는 과정에서 변수가 초기화된다.
    let count = 0;

    // useState : 첫번째 반환값이 상태변수/ 두번째 값은 상태변수를 업데이트할 setState 함수
    // useState : 매개변수로 전달한 값이 초기값
    // const [num, setNum] = useState(1); 1이라면 1이 초기값이라는 소리

    const [num, setNum] = useState(10);
    const [active, setActive] = useState(false);
    // setNum(2);

    // useEffect 라이프 사이클 함수
    // useEffect의 첫번째 매개변수: 함수를 전달하고, 
    //             두번째 매개변수 : 배열을 전달한다.
    // 첫번째로 전달한 함수를 두번째 매개변수의 상태를 확인하고 실행시킨다.
    // [] 빈배열을 전달한 경우 componentDidMount
    // [num] : 배열에 전달된 값이 수정된 경우에 실행 componentDidMount, componentDidUpdate

    useEffect(()=>{
        console.log("1. componentDidMount");
    }, [])
    useEffect(()=>{
        // num이 변경된 경우 이 업데이트 함수만 실행 된다.
        // 제어문을 사용해서 만들어 주면 된다.
        // componentDidUpdate
        console.log("2. componentDidMount, componentDidUpdate");
        // componentDidUpdate
        // 상태가 변환이후의 값을 사용하는 라이프사이클 함수
        console.log("상태 num : ", num);
    }, [num]);

    useEffect(()=>{
        // active가 변경된 경우 이 업데이트 함수만 실행 된다.
        console.log("나는 active");
    }, [active]);

    useEffect(()=>{
        // num이나 active 둘중 하나라도 변경이 되면 업데이트 함수 실행
        console.log("num이나 active가 변경됐어");
    }, [num,active]);




    function clickHandler(){
        console.log("★클릭함★");
        // 상태를 변경
        // 상태를 값을 사용하는 이유 ????????????????
        // 이전의 상태값이 보관이 됩니다.
        // 상태값이 계속 유지가 되는건데
        setNum(num + 1);
        count++;
        console.log("변수 count : ", count);
        console.log("상태 num : ", num);
        // 실수가 많으니까 주의!! 상태값을 수정하고 바로 값을 사용하면 안됨
    }

    function activeHandler(){
        setActive(!active);
    }
  return (
    <div>
        <button onClick={clickHandler}>클릭</button>
        <button onClick={activeHandler}>활성화/비활성화</button>
    </div>
  )
}

export default Mycom3
