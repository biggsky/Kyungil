import './App.css';
import { useState } from 'react';
import {mine} from "./img"
import Square from './components/Square';


let basicNum = Array(9).fill(0);
let mineNum = 1;

let arr = [0,1,2,3,4,5,6,7,8];
let arr2 = [];
for(let i=0; i<3; i++){
  let randomNum = Math.floor(Math.random()*arr.length);
  arr2[i] = arr[randomNum];
  arr.splice(randomNum,1);
}
  
function App() {
  const [num, setNum] = useState(0);

  console.log(arr2);
  for(let i=0; i<3; i++){
    basicNum[arr2[i]] = mineNum;
  }

  return (
    <div className="App">
      <div id='center'>
        <table>
          <tbody>
            <tr>
              <Square mineon={basicNum[0]} num={num} setNum={setNum} />
              <Square mineon={basicNum[1]} num={num} setNum={setNum}/>
              <Square mineon={basicNum[2]} num={num} setNum={setNum} />
            </tr>
            <tr>
              <Square mineon={basicNum[3]} num={num} setNum={setNum} />
              <Square mineon={basicNum[4]} num={num} setNum={setNum} />
              <Square mineon={basicNum[5]} num={num} setNum={setNum} />
            </tr>
            <tr>
              <Square mineon={basicNum[6]} num={num} setNum={setNum} />
              <Square mineon={basicNum[7]} num={num} setNum={setNum} />
              <Square mineon={basicNum[8]} num={num} setNum={setNum} />
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
