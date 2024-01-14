import React, {createContext, useContext, useState} from 'react'

/*  
useContext react에서 제공해주는 내장 hook함수이다.
전역 상태 관리를 도와주는 함수
리액트는 데이터의 흐름이 단방향 자식에게 props로 전달 하기 때문에 불편하다.
props로 데이터를 넘겨주지 않아도 컴포넌트들이 데이터를 공유할 수 있도록


*/


const Global = createContext();
// createContext 함수를 호출해서 Global객체 생성 context 객체 생성

const Context01 = () =>{
    return <Context02></Context02>
}

const Context02 = () =>{
    const {name, setName} = useContext(Global);
    // Global.Provider value로 전달한 값을 받기위해
    // useContext() 매개변수로 context 객체를 전달 해준다.
    return <>
        내 이름은 {name}
        <button onClick={()=>{setName("soon2")}}>이름 변경</button>
    </>
}



const Context = () => {
    // Context 최상단 부모 컴포넌트
    
    const [name, setName] = useState("soon")
    // 부모의 상태변수

    const obj = {
        name,
        setName
    }
    // 부모의 상태 변수 name과 상태변수 업데이트 함수 setName을 객체의 키값으로 obj 객체 선언    

  return (
    // 전역 상태를 관리할때 Global.Provider를 최상단 트리로 감싸주고
    // value는 정해진 키 전달할 데이터를 넣어준다 (전역 상태)
    <Global.Provider value={obj}>
        <Context01></Context01>
    </Global.Provider>
  )
}

export default Context