import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";


function App() {
  /*   
  브라우저에서 이더리움 블록체인 상호작용
  브라우저에서 메타마스크 확장 프로그램을 통해 네트워크에 상호작용을 할 수 있다.
  트랜잭션을 발생시키면 외부 소유 계정 정보를 가지고 있다. 네트워크의 정보도 가지고 있다.
  트랜잭션을 발생시키려면 서명의 정보가 필요한데, 개인키를 직접 전달을 하는게 아니고
  메타마스크 안에 안전하게 보관이 되어있다. 

  원격 프로시저 호출을 통해 컨트랙트의 함수를 실행시킬수 있고
  네트워크의 메서드도 사용을 해서 계정의 정보나 로직을 사용할 수 있다.
  
  데이터베이스를 가지고 로그인 구현을 하면,
  아이디 비밀번호를 입력해서, 중앙화 데이터 베이스에 값이 저장되고 있고, 

  사용자가 로그인 했을때 프로세스를
  지갑 로그인으로 가져간다. (탈중앙화된 어플리케이션 로그인 처리 방식)

  */
 const [web3, setWeb3] = useState(null);
 const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  // 카운트수
  const [counterValue, setCounterValue] = useState("0");

  useEffect(() => {
    // 즉시실행함수
    (async () => {
      // 배열의 구조분해 할당
      // window
      console.log("window.ethereum : ", window.ethereum);
      const [data] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("data:", data);

      // 0x
      // 현재 연결한 지갑의 주소
      // 네트워크 web3 연결
      setWeb3(new Web3(window.ethereum));
      setAccount(data);
    })();
  }, []);

  const balanceBtn = async () => {
    const balance = await web3.eth.getBalance(account);
    console.log(balance);
    const _balance = await web3.utils.fromWei(balance, "ether");
    setBalance(_balance);
  };

  const distributionBtn = () =>{
    web3.eth.sendTransaction({
      from : inputValue,
      gas : "3000000",
      data : inputValue2
    }).then(console.log);

  }

  const abi = [
    // interface와 같은 역할을 한다고 보자.

    // 생성자 함수의 내용이 정의됨
    // inputs 매개변수 전달할 매개변수가 없으니까 []
    // stateMutability === nonpayable 이더리움을 받지 않는 상태 전환 함수
    // payable == 이더를 전달받을 수 있는 상태 변환 함수
    // type == constructor 생성자 함수의 타입
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },

    { 
        // inputs 매개변수 안받으니까 []
        inputs: [], 
        
        // 함수의 이름 getValue
        name: "getValue", 

        // outputs : 함수의 출력의 내용
        // internalType 상태변수의 함수의 값에 대한 타입
        // name : 사용하는 매개변수의 이름
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        
        // stateMutability == view 상태 변경을 하지 않고 view 속성 조회만 한다.
        stateMutability: "view", 

        // type == function 함수 타입
        type: "function" 
    },
    { 
        // 매개변수 받으니까 []
        // internalType 함수의 값에 대한 타입
        // name : 사용하는 매개변수 이름 _value
        inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }], 

        // 함수의 이름 : setValue
        name: "setValue", 

        // 함수의 출력은 없으니까 []
        outputs: [], 

        // stateMutability === nonpayable 이더리움을 받지 않는 상태 전환 함수
        stateMutability: "nonpayable", 

        // type == function 함수 타입
        type: "function" 
    },
    
];

  const getValue = async () =>{
    const getCodeHash = web3.eth.abi.encodeFunctionCall(abi[1], []);
    const data = await web3.eth.call({
      to : "0xdac30b0e58fafb4bfb5eebaf1a8f09673c9bbd48", // CA(contractAddress)
      data : getCodeHash,
    })
    // 코드를 활성화시켜서 실행을 함.

    console.log("data : ", data);
    // data에는 16진수로 변환된 값이 넘어오는데
    console.log(web3.utils);
    console.log(data);
    const result = await web3.utils.toBigInt(data).toString(10);
    console.log("result : ",result)
    // 카운트 업데이트
    
    // counterValue.innerHTML = result;
    setCounterValue(parseInt(result));

    return parseInt(result);
  }

  const plusBtn = async () => {
    const _getValue = await getValue();
    const setCodeHash = await web3.eth.abi.encodeFunctionCall(abi[2],[_getValue+1]);
    // console.log("setCodeHash : ", setCodeHash);
    if(!inputValue) return alert("Account 입력 하셈");
    const tx = {
            from : inputValue, // 트랜잭션을 발생시키는 계정
            to : "0xdac30b0e58fafb4bfb5eebaf1a8f09673c9bbd48", // CA 계정 주소
            data : setCodeHash,
            gas : 500000,
            gasPrice : 20000000,
    };
    const data = await web3.eth.sendTransaction(tx);
    console.log("웬", data);
    getValue();
  }

  const reduceBtn = async () => {
    const _getValue = await getValue();
    const setCodeHash = await web3.eth.abi.encodeFunctionCall(abi[2],[_getValue-1]);
    // console.log("setCodeHash : ", setCodeHash);
    if(!inputValue) return alert("Account 입력 하셈");
    const tx = {
            from : inputValue, // 트랜잭션을 발생시키는 계정
            to : "0xdac30b0e58fafb4bfb5eebaf1a8f09673c9bbd48", // CA 계정 주소
            data : setCodeHash,
            gas : 500000,
            gasPrice : 20000000,
    };
    const data = await web3.eth.sendTransaction(tx);
    console.log(data);
    getValue();
  }

  useEffect(()=>{
    if(web3)
    getValue();
  },[web3])

  // 카운트앱
  // 스마트컨트랙트 배포

  // 트랜잭션 EOA -> EOA로 트랜잭션 발생시켜서 
  // 잔액 송금해보는 버튼

  return (
    <div className='App'>
      <br />
      {account || "로그인 하셈"}
      <br />
      {balance}ETH <br />
      <button onClick={balanceBtn}>잔액 조회</button>
      <br />
      <br />
      <br />
      <label>use Account</label><br />
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  /><br />
      <label>use contract</label><br />
      <textarea value={inputValue2} onChange={(e)=>setInputValue2(e.target.value) } ></textarea> <br />
      <button onClick={distributionBtn}>컨트랙트 배포</button><br /><br />
      <p>카운트 앱</p>
      <button onClick={plusBtn}>증가</button> <button onClick={reduceBtn}>감소</button>
      <div>{counterValue}</div>
      
    </div>
  );
  // npm i web3 리액트 test 폴더안에서 설치
}

export default App;
