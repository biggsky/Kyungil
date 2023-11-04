import {useEffect, useState} from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Pokemon.json";

const App = () => {
  const {user, web3} = useWeb3();
  const [contract, setContract] = useState(null);
  const [token, setToken] = useState("0");

  const [accounts, setAccounts] = useState([]);
  const [arr, setArr] = useState([]);
  
  // input 값
  const [from_value, setfrom_value] = useState("");
  const [to_value, setTo_value] = useState("");
  const [card, setCard] = useState("");
  

  useEffect(()=>{
    if(web3 !== null){
      if(contract) return;
      const pokemon = new web3.eth.Contract(abi, "0xDDBf067EcBd88508a2b0cfe270973fD1D2632471", {data : ""});
      setContract(pokemon);
    }
  }, [web3]);

  // 해당 지갑의 포켓몬 조회
  const getPokemon = async (account) => {
    const result = await contract.methods.getPokemon().call({
      from : account
    });
    return result;
  };

  // 지갑의 토큰량 조회
  const getToken = async (account) => {
    if(!contract) return;
    let result = web3.utils.toBigInt(await contract.methods.balanceOf(account).call()).toString(10);
    result = await web3.utils.fromWei(result, "ether");
    return result;
  };

  // 메타마스크 계정들 조회
  const getAccounts = async () => {
    const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
    const _accounts = await Promise.all(
      accounts.map(async(account)=>{
        const token = await getToken(account);
        const pokemon = await getPokemon(account);

        // 추가로 포켓몬들도 어떤 포켓몬을 가지고 있는지 추가할 부분
        return {account,token, pokemon};
      })
    );
    console.log("accounts:::::",_accounts);

    setAccounts(_accounts);
  };

  // const randomClick = async () => {
  //   try {
  //     await contract.methods.buyPokemon().send({ from: user.account });
  //     console.log("포켓몬을 성공적으로 구매했습니다!");
  //     // 여기서 필요한 업데이트를 수행할 수 있습니다.
  //   } catch (error) {
  //     console.error("포켓몬 구매 중 오류 발생:", error);
  //   }
  // };

  const randomClick = async () => {
    try {
      await contract.methods.buyPokemon().send({ from: user.account });
    } catch (error) {
      console.log(error);
    }
  }

  const secondClick = async () => {
    try {
      let abc = await contract.methods.getPokemonUsers().call();
      let arr = [];
      let count = 0;
      for(let i=0; i<abc.length; i++){
        // console.log(abc[i].account);
        // send가 트랜잭션 발생시키기, call이 조회
        let all1 = await contract.methods.getPokemon().call({
          from : abc[i].account
        });
        for(let j=0; j<all1.length; j++){
          // console.log(all1[j].url);
          // console.log(all1[j].name);
        }
        arr[count] = all1;
        count++;
        // console.log(all1);
      }
      setArr(arr);
      console.log(arr);
      // for(let i=0; i< arr.length; i++){
      //   // console.log(arr[i]);
      //   for(let j=0;j<arr[i].length; j++){
      //     console.log(arr[i][j][0]);
      //     console.log(arr[i][j][1]);
      //   }
      // }
      
    } catch (error) {
      console.log(error);
    }
  }

  const thirdClick = async () => {
    try {
      // await contract.methods.buyPokemon().send({ from: user.account });

      
      // console.log(contract.methods);
      let abc = await contract.methods.transferPokemon(to_value, card).send({
        from: user.account
      });
      console.log("피터",abc);
      
      let abc2 = await contract.methods.getPokemon().call({
        from : user.account
      });
      console.log("what:",abc2);

      // console.log(to_value);
      // console.log(card);

    } catch (error) {
      console.log(error);
    }
  }

  const checkapprove = async () => {
    let abc = await contract.methods.getPokemon().call({
      from : user.account
    });
    console.log(abc);
  }

  // 1. 포켓몬 랜덤으로 뽑을수있는 함수를 만들고(버튼)
  // 2. 포켓몬 한번이라도 뽑은 계정들만 모아놓고 어떤 포켓몬을 가지고 있는지 보여주기
  // 3. 포켓몬 소유권 넘길수 있는 함수 만들기
  // 4. 포켓몬 대전
  // 5. 보상개념도 추가해도 됨

  useEffect(()=>{
    if(!contract) return;
    console.log("확인: ", accounts);
    getAccounts();
  },[contract]);

  if(user.account === null) return "지갑 연결하세요";
  return (
    <>
    <button onClick={randomClick}>랜덤 뽑기</button>
    <div>토큰 보유량 : {token}</div>
    {accounts.map((item, index)=>(
      <div key={index}>
        계정 {item.account} : 토큰 값 : {item.token}
        <div>포켓몬들 <br />
          {item.pokemon.map((item2, index2)=>(
            <span key={index2}>
              {item2.name} : <img width={100} src={item2.url} alt="" />
            </span>
          ))}
        </div>
      </div>
    ))}
    <br />
    <button onClick={secondClick}>모든 포켓몬 카드</button>
    <br />
    {arr.map((aitem,aindex)=>(
      <div key={aindex}>
      {aitem.map((aitem2, aindex2)=>(
        // 0 1 0 1 2
        <>
          <span key={aindex2.id}>
            <img width={50} src={aitem2[0]} />
            <span>{aitem2[1]}</span>
          </span>
        </>
      ))}
      </div>
    ))}
    <br />
    <button onClick={thirdClick}>소유권넘기기</button>
    <br />
    {/* <input value={from_value} onChange={(e) => setfrom_value(e.target.value)} placeholder="from" /> <br /> */}
    <input value={to_value} onChange={(e)=>setTo_value(e.target.value)} placeholder="to" /> <br />
    <input value={card} onChange={(e)=>setCard(e.target.value)} placeholder="소유권 넘길 카드" />

    <br />
    <button onClick={checkapprove}>소유권확인!</button>
    <br />
    <br />
    </>
  );

};

export default App;