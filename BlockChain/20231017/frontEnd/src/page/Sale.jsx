import React, { useEffect, useState } from 'react'
import { SaleComponent } from './css'
import useWeb3 from "../hooks/web3.hook"
import abi from "../abi/abitest.json";
import abi2 from "../abi/abi2test.json";


const Sale = () => {
  const [contract, setContract] = useState(null);
  const [contract2, setContract2] = useState(null);
  const [Value, setValue] = useState([]);
  const { user, web3 } = useWeb3();
  const [account, setAccount] = useState("");

  // 판매확정 상태변수
  const [decide_sale, setDecide_sale] = useState(false);

  useEffect(() => {
    setAccount(user.account);
    if (web3 !== null) {
      if (contract) return;
      const contractSTART = new web3.eth.Contract(
        abi,
        "0x9B3b0737b818d95BA1a15E513a5F5E57Db5E6Bd9",
        { data: "" },
      );
      setContract(contractSTART);
      const contractSTART2 = new web3.eth.Contract(
        abi2,
        "0x01b8dDD3555dB1D7CA22Cd6283e17450Edf4a877",
        {data : ""},
      );
      setContract2(contractSTART2);
    }
  });

  useEffect(()=>{
    (async()=>{
      if(contract2 != null){
        // console.log("contract: ", contract);
        // console.log("contract2: ", contract2);
        const value = await contract2.methods.sales_registration_list().call({
          from : user.account
        });
        console.log("판매등록된리스트",value);
        setValue(value);
      }
    })()
  },[contract2]);
  // JavaScript - 즉시실행함수(IIFE)
  // (() => {
  //   console.log("IIFE");
  // })();

  // 지갑이 변경될때
  useEffect(() => {
    // 지갑이 변경되면 실행할 이벤트 등록
    window.ethereum.on("accountsChanged", (accounts) => {
      // console.log("지갑이 변경됐습니다", accounts);
      setAccount(accounts[0]);
      console.log("지갑변경됨",accounts[0]);
    });
  });

  const getBalance = async () => {
    console.log(account);
    // 현재 잔액
    try {
      const balanceWei = await web3.eth.getBalance(account);
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  
      console.log(`현재 지갑의 이더 잔액: ${balanceEth} ETH`);
    } catch (error) {
      console.error('이더 잔액 조회 실패:', error);
    }
  }


  const purchasing_requisition = async (a,b) =>{
    // a가 nft의 지갑주소, b는 올린 가격, account는 현재 지갑주소
    if(a != account){
      console.log("구매신청중..");
      console.log("CA에 이더를 전송하세요!");

      // setDecide_sale(true);

      // try {
      //   const receipt = await web3.eth.sendTransaction({
      //     from : account,
      //     to : "주소",
      //     value : web3.utils.toWei('0.01', "ether")
      //   });

      //   console.log("이더전송 성공", receipt);
      // } catch (error) {
      //   console.log("이더 전송 실패", error);
      // }
    }
  }

  return (
    <SaleComponent>
      <>
        <div>
          <button onClick={getBalance}>잔액조회</button>
          {Value.map((item, index)=>(
            <div key={index}>
              
              {item.account} - {item.product_price.toString()}원
              {/* {item} - {item.toString()[0]}원 */}

              { (account.toUpperCase() == (item.account).toUpperCase() ) ? "" : <button onClick={()=>purchasing_requisition(item.account, item.product_price.toString())}>구매신청</button> 
              }
            </div>
          ))}

        </div>
      </>
    </SaleComponent>
  )
}

export default Sale