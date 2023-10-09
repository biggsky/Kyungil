
import React, {useEffect, useState} from 'react'

const Daynoti = ({startNum, sundayOn, firstWeek, lastWeek}) => {
  const [basicColor, setbasicColor] = useState(Array(7).fill(''));
  // console.log("basicColor", basicColor);
  // console.log("sundayOn", sundayOn);
  console.log("lastWeek : ", lastWeek);
  // console.log("sundayOn : ", sundayOn);
  // let num = startNum;
  let thisMonthDay = true;
  let thisMonthDay2 = true;

  const buttonClick = (index) =>{
    const update1 = [...basicColor];
    update1[index] = update1[index] === '' ? 'skyblue' : '';
    setbasicColor(update1);
  }
  useEffect(()=>{
    // console.log(basicColor);
  }, [basicColor]);
  
    const repeat = Array.from({length:7}, (_, index)=>{
      if(firstWeek == false && startNum == 30){
        startNum = 1;
        thisMonthDay2 = false;
      }
      else if( lastWeek == false && (startNum >= 31) ){
        startNum = 1;
        thisMonthDay = false;
      }
      else{
        startNum++;
      }
        return (<td key={index}>
          
          {sundayOn && ( (startNum ==2) || (startNum==9) || (startNum==16) || (startNum==23) ) && thisMonthDay == true && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "red" }}  >{startNum}</button>
          )}
          
          {!sundayOn && ( (startNum ==2) || (startNum==9) || (startNum==16) || (startNum==23) ) && lastWeek != false && (
            <button></button>
          )}

          { ( (startNum != 2 && startNum != 9 && startNum != 16 && startNum != 23 && startNum != 30 && startNum != 25 ) || ( ( (startNum == 2 || startNum == 9 && startNum != 16 && startNum != 23 && startNum != 30 ) && lastWeek== false) )) && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "black" }}  >{startNum}</button>
          )}
          
          {startNum == 30 && firstWeek == false &&(
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "black" }}  >{startNum}</button>
          )}
          {!sundayOn && startNum == 30 && lastWeek == false && (
            <button></button>
          )}
          {!sundayOn && startNum == 25 && lastWeek == true && firstWeek== false  && (
            <button></button>
          )}
          {sundayOn && startNum == 25 && lastWeek == true && firstWeek== false  && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "red" }}  >{startNum}</button>
          )}

          {!sundayOn && startNum == 25 && firstWeek == true && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "black" }}  >{startNum}</button>
          )}
          {sundayOn && startNum == 25 && firstWeek == true && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "black" }}  >{startNum}</button>
          )}
          {sundayOn && startNum == 30 && lastWeek == false && (
            <button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index], color: "red" }}  >{startNum}</button>
          )}

          



          <div id='header_ribbon'></div>
        </td>)

        // return <td key={index}><button onClick={ () => buttonClick(index) }     style={{ backgroundColor : basicColor[index] }}  >{startNum}</button> <div id='header_ribbon'></div></td>
    });

  return (
    <>
        {repeat}
    </>
  )
}

export default Daynoti