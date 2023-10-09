import Block from "@core/block/block";
import P2P from "./p2p";
import express, {Express, Request, Response} from "express"
import os from "os";

// 다른사람꺼 해보고싶다.
import cors from "cors";

const app : Express = express();
const ws : P2P  = new P2P();

app.use(cors()); // --------------------------------

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/chains", (req : Request, res : Response)=>{
    res.json(ws.get());
})

app.post("/block/mine", (req:Request, res : Response)=>{
    // 블록에 기록할 내용을 받고
    const {data} : {data : Array<string>} = req.body;
    const newBlock : Block | null = Block.generateBlock(ws.latestBlock(), data, ws.getAdjustmentBlock() );
    if(newBlock === null) res.send("error");

    ws.addToChain(newBlock);
    res.json(newBlock);
})

// post 작성을 했었는데 get으로 바꿀거임. 오타 이슈 때문에
// v4 확인도 귀찮죠?

app.get("/peer/add", (req:Request, res: Response)=>{
    const networkinterface = os.networkInterfaces();
    let v4 : string;
    for(const key in networkinterface){
        const Array = networkinterface[key];
        for(const value of Array){
            if(!value.internal && value.family === "IPv4")
            v4 = value.address;
            //v4 ip 주소
        }
    }
    ws.addToPeer(`ws://${v4}:7545`);
    res.end();
})

app.get("/peer", (req: Request, res: Response)=>{
    const sockets = ws.getSockets();
    res.json(sockets);
});

app.listen(8080, ()=>{
    console.log("server on~");
    ws.listen(7545);
});


// npm i -D @types/express
// npm i @types/ws
// npm i ws
// npm i express
// http://172.25.176.1:8080/peer/add