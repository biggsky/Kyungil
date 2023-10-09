// ES7+ React/Redux/React-Native snippets
// rcc 누르면 함수 만들어짐

// 함수형 컴포넌트를 만들어보자.
// rafce   -  React Arrow Function Component Export

import React, {useEffect, useState} from 'react'
import Daynoti from './Daynoti';
import img from "./Hamburger_icon.png"
// 함수형 컴포넌트의 state와 props의 값은 어떻게 관리 해야하나
// react hook useState useEffect
// useState 상태값을 만들어준다. 상태값을 수정할때 사용할 메서드를 만들어준다.
// useEffect 라이프사이클을 지원 해준다.

// 함수형 컴포넌트의 props값은 함수의 매개변수로 전달 된다.
// 구조분해 할당해서 바로 사용해도 상관 없음
const Mycom3 = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [sundayOn, setsundayOn] = useState(false);
    const [firstWeek, setfirstWeek] = useState(false);
    const [lastWeek, setlastWeek] = useState(false);


    useEffect(()=>{
        console.log("showCalendar:", showCalendar);
    }, [showCalendar]);


    function clickHandler(){
        setShowCalendar(!showCalendar);
    }

    function sundayClick(){
        setsundayOn(!sundayOn);
    }
  return (
    <div id='div'>
        <div id='calendar' style={{display: showCalendar ? 'block' : 'none'}}>
        <img id='hamburger' src={img} alt="" />
            <table>
                <tbody>
                    {/* calendar_header */}
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>

                    {/* calendar_body */}
                    <tr>
                        <Daynoti startNum={24} sundayOn={sundayOn} firstWeek = {firstWeek} lastWeek={true} />
                    </tr>
                    <tr>
                        <Daynoti startNum={1} sundayOn={sundayOn} firstWeek={true} lastWeek={true} />
                    </tr>
                    <tr>
                        <Daynoti startNum={8} sundayOn={sundayOn} firstWeek={true} lastWeek={true} />
                    </tr>
                    <tr>
                        <Daynoti startNum={15} sundayOn={sundayOn} firstWeek={true} lastWeek={true} />
                    </tr>
                    <tr>
                        <Daynoti startNum={22} sundayOn={sundayOn} firstWeek={true} lastWeek={true} />
                    </tr>
                    <tr>
                        <Daynoti startNum={29} sundayOn={sundayOn} firstWeek={true} lastWeek = {false} />
                    </tr>

                </tbody>
            </table>
            <div id='calendar_footer'>
                seognhyun
            </div>
        </div>
        <br /><br /><br />
        <div id='calendar2'>
            <button onClick={clickHandler}>달력 보이기</button>

            <button onClick={sundayClick} >빨간날 보이기</button>
        </div>
    </div>
  )
}

export default Mycom3