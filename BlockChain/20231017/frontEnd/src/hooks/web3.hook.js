import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
    const [user, setUser] = useState({
        account : "",
        balance : ""
    });

    const [web3, setWeb3] = useState(null);

    useEffect(()=>{
        if(window.ethereum){
            window.ethereum.request({method: "eth_requestAccounts"}).then(async([data])=>{
                const web3Provider = new Web3(window.ethereum);

                setUser({
                    account : data,
                    balance : web3Provider.utils.toWei(await web3Provider.eth.getBalance(data), "ether"),
                });

                setWeb3(web3Provider);
            })
        }else{
            alert("메타마스크 설치하세요!");
        }
    },[]);
    return {user, web3};
}

export default useWeb3;