import React, {useEffect, useState} from 'react'
import Contents from './Contents';

const Body = () => {
    const [inputValue, setinputvalue] = useState('');
    const [arrState, setarrState] = useState([]);

    const handleinputchange = (event) => {
        setinputvalue(event.target.value);
    }

    const enterClick = ()=>{
        setarrState([...arrState, inputValue]);
    }

    useEffect(()=>{
        // console.log("배열", arrState.length);
    }, [arrState]);

  return (
    <div id='background'>
        <div id='center'>
            <h3>Todo List</h3>
            <input type="text" value={inputValue} onChange={handleinputchange} />
            <button onClick={ enterClick }>Enter</button>

            <br />
            <br />
            <br />

            {arrState.map((item, index, inputValue)=>{
                // console.log("arrState[index] : ", arrState[index]);
                return <Contents key={index} index={index} value={arrState[index]} arrState={arrState} setarrState={setarrState}  />
            })}

            

        </div>
    </div>
  )
}

export default Body