import { randomBytes } from "crypto";
import elliptic from "elliptic";
import {SHA256} from "crypto-js";
import fs from "fs";
import path from "path";

// 지갑 클래스 만들고 페이지에서 지갑 생성을 한번 확인 해보기

// elliptic 인스턴스 생성
const ec = new elliptic.ec("secp256k1");

// 기본 지갑 정보 저장 경로
const dir = path.join(__dirname, "../../data");
// 상대 경로는 현재 위치를 기준으로 다른 파일 또는 디렉토리의 위치를 나타내는 경로를 말합니다. 

// 지갑 클래스 정의
export class Wallet{
    public account : string;
    public privateKey : string;
    public publicKey : string;
    public balance : number;

    constructor(privateKey : string = ""){
        // 생성단계에서 개인키값이 없으면 만들어 넣자
        this.privateKey = privateKey || this.getPrivateKey();
        this.publicKey = this.getPublicKey();
        this.account = this.getAccount();
        this.balance = 0
        
        if(privateKey == "")
        Wallet.createWallet(this);
    }

    static createWallet(myWallet : Wallet){
        // fs모듈로 파일 생성
        // 지갑을 생성하면 주소를 저장할 것.
        // 주소안에는 개인키 넣어보기
        const filename = path.join(dir, myWallet.account);
        const filecontent = myWallet.privateKey;
        fs.writeFileSync(filename,filecontent);
    }

    static getWalletList() : string[] {
        // readdirSync 폴더를 읽어서 안에있는 파일 이름을 문자열로 가져온다.
        const files : string[] = fs.readdirSync(dir);
        return files
    }

    // data폴더안에 해당하는 지갑 주소를 찾아서 반환
    static getWalletPrivateKey(account : string) : string{
        const filename = path.join(dir, account);
        const filecontent = fs.readFileSync(filename);
        return filecontent.toString();
    }

    public getPrivateKey() : string {
        return randomBytes(32).toString("hex");
    }

    public getPublicKey() : string{
        // 개인키로 공개키를 만들자
        const keyPair = ec.keyFromPrivate(this.privateKey);
        return keyPair.getPublic().encode("hex", false);
    }

    public getAccount(): string{
        return `0x${this.publicKey.slice(26).toString()}`;
    }
}




