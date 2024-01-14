import { useEffect } from 'react';
import './App.css';
import Block from "./components/Block"
import {img01, img02,img03} from "./img"
import { useState } from 'react';
// 추억의 자바스크립트
// 가위바위보
// 플레이어 하나 컴퓨터 하나
// 컴포넌트로 만들고
// 컴퓨터는 랜덤 가위 바위 보 중에 하나를 내고
// 플레이어는 선택할수 있게
// 플레이어 컴퓨터
/*  
가위     가위        무승부
가위     바위        패
가위     보          승
바위     바위        무
바위     가위        승
바위     보          패
보       보          무
보       가위        패
보       바위        승



*/

function App() {
  // 컴퓨터와 유저가 사용할 가위 바위 보의 객체를 하나 만들어주자
  // 선택 값을 담아 놓을 객체
  // const scissors = "가위";
  // const rock = "바위";
  // const paper = "보";

  // 선택값을 다루고 있어
  // select 객체 안에 데이터가 다 들어있으면
  // select 동작을 하는 프로그램을 작성할때
  // select 객체안에 있는 값은 전부 select 동작을 하기위해 만든 것이라고 알수 있음
  
  // select 컴퓨터와 유저가 가위 바위 보를 냈을때 필요한 데이터들을 모아둘 객체
  const select = {
    scissors : {
      name : "가위",
      img : img01
    },
    rock :{
      name : "바위",
      img : img02
    },
    paper : {
      name : "보",
      img : img03
    }
  }

  // 유저가 선택한 값은 주시하자. 선택하면 데이터 바뀐상태로 다시 그려줘야 하기 때문에
  
  // 유저의 선택 useState
  const [userSelect, setUserSelect] = useState(null);
  
  // 컴퓨터의 선택 값을 담을 useState
  const [comSelect, setComSelect] = useState(null);

  // 승패 결과를 담을 useState
  const [result, setResult] = useState("");



  function userClick(_select){
    // _select == "scissors"
    // select["scissors"]
    // _select == "rock"
    // select["rock"]
    // 선택한 객체를 상태변수에 담아주자
    setUserSelect(select[_select]);

    // 플레이어 선택 이후에 컴퓨터도 랜덤한 값을 가지고 가위 바위 보를 선택 시키자.
    // 컴퓨터는 랜덤으로 선택을 시켜야하는데
    let arr = Object.keys(select);
    // Object.keys
    // 객체의 키값만 뽑아서 배열로 반환 해준다.
    console.log("arr : ", arr);
    // 소수점 제외시키고 랜덤한 정수값 0~2
    let comRandom = Math.floor(Math.random()*3);
    console.log(comRandom);

    // console.log("select[arr[comRandom]] // select[scissors] : ", select["scissors"]);
    
    // comRandom 랜덤한 값이고 0~2
    // arr = ['scissors', 'rock', 'paper']
    // arr[comRandom] = ['scissors', 'rock', 'paper']
    setComSelect(select[arr[comRandom]]);

    let player = select[_select];
    let computer = select[arr[comRandom]];
    if(player.name === computer.name){
      // 처음에 무승부 거르고
      setResult("무승부");
    }else if(player.name == "가위"){
      let result = computer.name === "보" ? "Win" : "Lose";
      setResult(result);
    }else if(player.name == "바위"){
      let result = computer.name === "가위" ? "Win" : "Lose";
      setResult(result);
    }else if(player.name == "보"){
      let result = computer.name === "바위" ? "Win" : "Lose";
      setResult(result);
    }
  }

  useEffect(()=>{
    console.log("userSelect : ", userSelect);
  }, [userSelect])
  // 빈배열이면 mount
  // 주시할값 들어가면 update




  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"유저"} result={result} />
        <Block data={comSelect} name={"컴퓨터"} result={result} />
      </div>
      <div>
        {/* 버튼은 여기에 */}
        <button onClick={()=>{userClick("scissors")}}>가위</button>
        <button onClick={()=>{userClick("rock")}}>바위</button>
        <button onClick={()=>{userClick("paper")}}>보</button>
      </div>
    </>
  );
}

export default App;
