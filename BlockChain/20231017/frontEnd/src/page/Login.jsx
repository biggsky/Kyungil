import React, { useEffect, useState } from "react";

// 1019 ~20
import useWeb3 from "../hooks/web3.hook";
import axios from "axios";
import abi from "../abi/abitest.json";
import abi2 from "../abi/abi2test.json";
import { Link, useNavigate } from "react-router-dom";
import { LoginComponent } from "./css";


const Login = () => {
  const nav = useNavigate();
  // const [isConnected, setisConnected] = useState(false);
  const [tokenId, settokenId] = useState(0);

  // 네트워크
  const [network, setNetwork] = useState(false);
  const [networkName, setnetworkName] = useState("");
  const [account, setAccount] = useState("");

  // useWeb3
  const [file, setFile] = useState(null);
  const [contract, setContract] = useState(null);
  const [contract2, setContract2] = useState(null);
  const { user, web3 } = useWeb3();

  // mynft
  const [obj_fetch, setObj_fetch] = useState([]);
  const [mynft, setMynft] = useState([]);
  const [price, setPrice] = useState(null);


  // --------------------------------------------------------------

  useEffect(() => {
    window.ethereum.on("connect", (chainid) => {
      console.log("네트워크 연결됨", chainid.chainId);
      if (chainid.chainId == 0xaa36a7) {
        // console.log("Sepolia 네트워크 접속중");
        setnetworkName("Sepolia 네트워크 접속중");
      } else {
        // console.log("Sepolia 네트워크로 접속하세요!");
        setnetworkName("Sepolia 네트워크로 접속하세요!!!");
      }
    });

    // 이벤트 등록 네트워크가 변경되면 발생하는 이벤트 등록 코드
    window.ethereum.on("chainChanged", (chainid) => {
      console.log("네트워크 변경됨", chainid);

      if (chainid === "0xaa36a7") {
        // console.log("Sepolia 네트워크 접속중");
        setnetworkName("Sepolia 네트워크 접속중");
      } else {
        // console.log("Sepolia 네트워크로 접속하세요!");
        setnetworkName("Sepolia 네트워크로 접속하세요!");
      }
    });
  });

  useEffect(() => {
    // network가 false이면 return
    if (!network) return;

    // 네트워크 변경될때
    window.ethereum.on("chainChanged", (chainid) => {
      console.log("네트워크 변경됨", chainid);

      if (chainid === "0xaa36a7") {
        // console.log("Sepolia 네트워크 접속중");
        setnetworkName("Sepolia 네트워크 접속중");
      } else {
        // console.log("Sepolia 네트워크로 접속하세요!");
        setnetworkName("Sepolia 네트워크로 접속하세요!");
      }
    });

    // 지갑이 변경되면 실행할 이벤트 등록
    window.ethereum.on("accountsChanged", (account) => {
      console.log("지갑이 변경됐습니다", account);
      setAccount(account);
    });

    // 네트워크 종료될때
    window.ethereum.on("disconnect", (chainid) => {
      console.log("네트워크 연결종료됨", chainid);
    });
  }, [network]);

  const btnClick = async () => {
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    // setisConnected(true);

    // 계정 화면에 보여주기
    console.log("현재 로그인된 계정", account);
    setAccount(account);
    setNetwork(true);
  };

  // useEffect(()=>{
  //   if(isConnected == true){
  //     console.log("화면바뀜");
  //   }
  // },[isConnected]);

  // (() => {
  //     console.log("IIFE");
  // })();

  useEffect(() => {
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
      console.log("잘뜸?",contractSTART2);
      setContract2(contractSTART2);
    }
  }, [web3]);

  const pinata_api_key = "";
  const pinata_secret_api_key = "";



  const upload = async() => {
    const fileData = new FormData();
    fileData.append("file", file);
    try {
      // 1
      const process1 = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", fileData, {headers : {
        "Content-Type" :  "multipart/form-data",
        pinata_api_key : pinata_api_key,
        pinata_secret_api_key : pinata_secret_api_key
      },});
      console.log(process1.data.IpfsHash);

      
      // ranking 함수 실행 시키기
      // console.log(contract.methods);
      const ranking1 = await contract.methods.ranking().call({
        from : user.account
      });
      console.log("랭킹: ",ranking1);
      
      let obj = {
        "name" : "Radiator Springs",
        "description" : "NFT description",
        "image" : "https://ivory-traditional-cod-350.mypinata.cloud/ipfs/" + process1.data.IpfsHash,
        "attributes" : {
          "rank" : ranking1,
        }
      }

      const process2 = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", obj, {headers : {
        "Content-Type" : "application/json",
        pinata_api_key : pinata_api_key,
        pinata_secret_api_key : pinata_secret_api_key
      },});
      console.log(process2.data.IpfsHash);

      let minting = await contract.methods.minting(process2.data.IpfsHash).send({
        from : user.account
      });
      console.log(minting);

    } catch (error) {
      console.log(error);
    }
  };

  const myNFT = async() => {
    console.log("현재지갑주소", account);
    try {
      const mynft1 = await contract.methods.nftList().call({
        from : user.account
      });
      console.log("mynft", mynft1);
      let arr1 = [];
      let count = 0;

      for(const item of mynft1){
        const ipfsUrl = `https://ipfs.io/ipfs/${item}`;
        const response = await fetch(ipfsUrl);
        const data = await response.json();
        arr1.push(data);
      }
      console.log("arr1 : ", arr1);
      // fetch를 사용하는 이유
      // IPFS에서 데이터를 가져오기 위해서. IPFS는 분산형 파일 시스템으로, 데이터를 해시로 식별하고 이를 통해 데이터에 액세스함. fetch를 사용하여 특정 해시로부터 데이터를 가져옴.
      // fetch는 네트워크 요청을 보내고 응답을 받아오는 역할을 함. 그리고 이 응답을 JSON 형태로 파싱하여 사용.
      // 결론 IPFS에서 각 NFT의 데이터를 가져오기 위함.

      setMynft(arr1);


    } catch (error) {
      console.log(error);
    }
  }

  let sales_registration_array =[];
  let arr_value = 0;
  const confirmCheck1 = async (index1, value1) => {
    // console.log("id",index1);
    // console.log("value",value1);

    // ipfsvalue 값 뽑아내기
    const mynft1 = await contract.methods.nftList().call({
      from : user.account
    });
    console.log("mynft:", mynft1[index1]);
    // console.log(value1);
    // console.log("name:",value1.name);
    console.log("토큰아이디", tokenId);
    console.log("price:", price);
    console.log("지갑주소", account);

    // (tokenId, mynft1[1], price)
    const confirm = await contract2.methods.sales_registration(tokenId, price, account).send({
      from : user.account
    });
    settokenId(tokenId+1);
    console.log(tokenId);

    const test11111 = await contract2.methods.sales_registration_list().call({
      from : user.account
    });
    console.log("최종테스트:",test11111);

    
  }
  const test21 = async () =>{
    const test11111 = await contract2.methods.sales_registration_list().call({
      from : user.account
    });
    console.log(test11111);
  }

  return (
    <LoginComponent>
      {network == false ? (
        <button onClick={btnClick}>지갑 로그인</button>
      ) : (
        <>
          {/* 지갑 주소 */}
          <div>지갑 주소 : {account}</div>
          {/* 네트워크명 */}
          <div>네트워크명 : {networkName}</div>
          <br />
          {/* 파일 업로드 및 NFT민팅하기 */}
          <div>파일 업로드</div>
          <input
            type='file'
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button onClick={upload}>NFT민팅하기(파일업로드)</button>
          {/* 내가 소유한 NFT 보여주기 */}
          <br /><br />
          <div>
            <button onClick={myNFT}>내가 소유한 NFT</button>
          </div>
          {mynft.map((item, index) => (
            <div key={index}>
              <hr />
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <input type="text" onChange={(e)=>setPrice(Number(e.target.value))} placeholder="판매할 가격을 입력하세요!" />
              <button onClick={()=>confirmCheck1(index, item)}>판매등록</button>
              <br />
              {/* <button onClick={()=>test21()}>테스트</button> */}
            </div>
          ))}
          
        </>
      )}
    </LoginComponent>
  );

};

export default Login;
