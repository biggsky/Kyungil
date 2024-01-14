import { useEffect, useState } from "react";
import useWeb3 from "./hooks/web3.hook";
import abi from "./abi/Baseball.json";

const App = () =>{
    const {user, web3} = useWeb3();
    const [ticket, setTicket] = useState("0");
    // 우리가 입력해서 매개변수로 요청할 값. 우리가 정한 정답
    const [value, setValue] = useState("");

    // 게임을 한사람들이 얼마나 이더를 쌓아놨는지
    // 정답 맞추면 다 그사람 것.
    const [reward, setReward] = useState("");

    // 게임을 몇판이나 사람들이 진행했는지
    const [progress, setProgress] = useState("0");

    // 컨트랙트 배포자만 알수 있는 답
    const [random, setRandom] = useState("000");

    // 게임 끝났는지 안끝났는지 알리려는 메시지
    const [message, setMessage] = useState("");

    // 게임 진행중인지?

    const [baseballContract, setbaseballContract] = useState(null);

    useEffect(()=>{
        if(web3 !== null){
            if(baseballContract === null){
                const Baseball = new web3.eth.Contract(abi, "0xAa62B40BBcFD1096B4e18feC85dd266535317161", {data:"", from: ""});
                Baseball.options.from = "0xAa62B40BBcFD1096B4e18feC85dd266535317161";
                setbaseballContract(Baseball);
            }
        }
    }, [web3]);

    const getTicket = async () => {
        if(baseballContract === null) return
        const result = web3.utils.toBigInt(await baseballContract.methods.getTicketPrice().call()).toString(10);
        setTicket(await web3.utils.fromWei(result, "ether"));
    };

    const getReward = async () => {
        if(baseballContract === null) return
        const result = web3.utils.toBigInt(await baseballContract.methods.getReward().call()).toString(10);
        setReward(await web3.utils.fromWei(result, "ether"));
    }

    const getPlaying = async() => {
        const playing = web3.utils.toBigInt(await baseballContract.methods.getPlaying().call()).toString(10);
        setMessage(playing);
    }

    const getProgress = async () =>{
        const progress = web3.utils.toBigInt(await baseballContract.methods.getProgress().call()).toString(10);
        setProgress(progress);
    }

    const getRandom = async () => {
        if(baseballContract === null) return;
        const result = await baseballContract.methods.isAdmin().call({
            from : user.account,
        });
        console.log("result",result);
        // 요청을 보냈고
        // from 추가해주자

        if(result == true){
            const Random = web3.utils.toBigInt(await baseballContract.methods.getRandom().call({
                from : user.account,
            })).toString(10);

            setRandom(Random);
        }else{
            alert("넌 어드민 권한이 없어!");
        }

        // 어드민 답 보이게 하기 코드
        // const Random = web3.utils.toBigInt(await baseballContract.methods.getRandom().call()).toString(10);
        //     setRandom(Random);

    };


    const gameStart = async () =>{
        if(value.length < 3){
            alert("숫자 3자리 입력해라");
            return;
        }
        await baseballContract.methods.gameStart(Number(value)).send({
            from : user.account,
            value : web3.utils.toWei("5", "ether"),
        });
        render();
    }

    const render = () => {
        getTicket();
        getReward();
        getPlaying();
        getProgress();
    }

    const gamereStart = async() =>{
        
        await baseballContract.methods.gamereStart().send({
            from : user.account
        });
        setProgress(0);
        setReward(0);
    }
    

    useEffect(()=>{
        if(baseballContract !== null){
            // getTicket();
            render();
        }
    },[baseballContract])

    if(user.account === null) return "지갑 연결 하세요"
    return(<>
        <div>account : {user.account}</div>
        <div>티켓 가격 : {ticket}</div>
        <div>현재 게임 진행도 : {progress}</div>
        <div>총 상금 : {reward}</div>
        <div>진행중 ? : {message == 0 ? "게임중" : "게임종료"}</div>
        <input onChange={(e)=>{setValue(e.target.value)}}></input>
        <div>정답 : {random}</div>
        <button onClick={gameStart}>게임시작</button>
        <button onClick={getRandom}>어드민</button>
        <button onClick={gamereStart}>게임 재시작</button>
    </>)
}

export default App;