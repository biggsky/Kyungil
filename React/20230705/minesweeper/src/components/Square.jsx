import React, {useState} from 'react'
import { mine } from '../img';
let end = false;

const Square = ({mineon, num, setNum}) => {
    const [isActive, setIsActive] = useState(false);
    const userClick = () =>{
        
        if(isActive == false && end == false){
            setNum(num+1);
            if(mineon == 1){
                end = true;
                alert("게임오버");
            }
            if(num == 5){
                end = true;
                alert("게임승리");
            }

            setIsActive(true);
        }
    }
  return (
    <>
        <td onClick={userClick} className={isActive ? "coloron" : "coloroff"} >
            { (mineon === 1 && isActive) ? <img src={mine} /> : ""}

        </td>
    </>
  )
}

export default Square



//     const tdElement = Array.from({length: 3}).fill().map((_, index) =>{

// let num=0;
// // 예시 1: return 문 사용
// const add = (a, b) => {
//     num=a;
//     return a + b;
//   };
  
//   // 예시 2: 암묵적인 반환
//   const add2 = (a, b) => a + b;