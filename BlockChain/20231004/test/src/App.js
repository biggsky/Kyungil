import useWeb3 from "./hooks/web3.hook";
import { useEffect, useState } from "react";
import abi from "./abi/Counter.json";

const App = () =>{
  const {user, web3} = useWeb3();
  const [count, setCount] = useState(0);

  // CA 컨트랙트 주소에 상태변수를 조회하는 함수를 작성
  const getCount = () =>{
    // web3 있는지 확인
    if(web3 === null) return;

    // find배열을 순회하면서 값을 찾는데
    // 순회하는 요소는 객체 data
    // 순회하는 요소 객체에 name키가 getValue인지 확인하고 맞으면 return
    const getValueData = abi.find((data)=>data?.name === "getValue");
    // getValueData = {
    //   "inputs": [],
    //   "name": "getValue",
    //   "outputs": [
    //     {
    //       "internalType": "uint256",
    //       "name": "",
    //       "type": "uint256"
    //     }
    //   ],
    //   "stateMutability": "view",
    //   "type": "function",
    //   "constant": true
    // }

    const data = web3.eth.abi.encodeFunctionCall(getValueData, []);
    // data 실행시킬 내용이 담겨있음
    // 원격 프로시저 호출
    web3.eth.call({
      to : "0xF3C1eC6780b081E7b12651A7e87D7738D8E4071e", // CA
      data,
    }).then((data)=>{
      // toBN 큰 자리수의 값을 다루기 때문에
      // .toString(10) 10진수 변경 16진수에서

      // const result = web3.utils.toBigInt(data).toString(10);
      const result = parseInt(data, 16); //16진수 -> 10진수

      setCount(result);
    });
  };

  // 값을 블록체인 네트워크에 요청해서 상태변수를 변경하는 함수
  const increment = async() => {
    const incrementData = abi.find((data)=>data.name === "increment");
    const data = web3.eth.abi.encodeFunctionCall(incrementData, []);
    
    // 접속한 지갑의 주소
    // useWeb3 hook에서 지갑의 정보를 받아 왔음
    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from : from,
      to : "0xF3C1eC6780b081E7b12651A7e87D7738D8E4071e",   // CA
      data,
    });
    console.log("data확인 : ",_data);
    getCount();
    
  };

  const decrement = async() =>{
    const decrementData = abi.find((data)=>data.name === "decrement");
    const data = web3.eth.abi.encodeFunctionCall(decrementData, []);

    const from = user.account;
    const _data = await web3.eth.sendTransaction({
      from : from,
      to : "0xF3C1eC6780b081E7b12651A7e87D7738D8E4071e",   // CA
      data,
    });
    console.log(_data);
    getCount();
  };

  useEffect(()=>{
    // 최초에 값 조회
    if(web3 != null) getCount();
  }, [web3]);

  if(user.account === "") return "지갑 로그인 하셈";
  return (<>
    <div>
      <div>지갑주소 : {user.account}</div>
      <h2>카운트 : {count} </h2>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  </>)

};

export default App;