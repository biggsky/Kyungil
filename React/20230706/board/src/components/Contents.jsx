import React, {useState} from "react";

const Contents = ({index, value, arrState, setarrState}) => {
  const [isChecked, setIsChecked] = useState(false);

    const delClick = (index) =>{
      const updatedArrState  = [...arrState];
      updatedArrState.splice(index, 1);
      console.log(updatedArrState);
      setarrState(updatedArrState);

      // const abc = arrState.splice(index, 1);
      // console.log(abc);
      // console.log(arrState);
      // setarrState(arrState);
    }

    const checkboxClick = () => {
      setIsChecked(!isChecked);
    }
  return (
    <>
      <div className={`contents ${isChecked ? "checked" : ""}`} >
        <div className='left'>
          {index}<input type='checkbox' checked={isChecked} disabled={isChecked} onChange={checkboxClick} />
        </div>
        <div className='right'>
          <button onClick={()=> delClick(index)}>삭제</button>
        </div>
        <div className='center'>{value}</div>
      </div>
      <style>
        {
          `
          .checked {
            background-color : dimgrey;
          }
          `
        }
      </style>
    </>
  );
};

export default Contents;
