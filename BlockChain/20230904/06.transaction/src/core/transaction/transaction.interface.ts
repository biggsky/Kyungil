import {SignatureInput} from "elliptic";

// 트랜잭션 입력 구조 정의
export class TxIn{
    txOutId?  : string; // 이전 트랜잭션의 ID(해시값)
    txOutIndex : number; // 이전 트랜잭션의 출력 인덱스
    signature? : SignatureInput // 트랜잭션의 입력 서명
}

// 트랜잭션 출력 구조 정의
export class TxOut{
    account : string; // 수신자 계정 공개키 or 주소
    amount : number;  // 전송된 금액
}

// 50 50 50 50 50

// 200 account utxo

// TxIn에는 utxo에 잔액을 가져오고
// TxOut 보낸 수신자 총 금액을 출력

// 트랜잭션 정보 구조 정의
export class TransactionRow {
    txIns : TxIn[]; // 트랜잭션 입력 목록 (utxo의 값을 참조)
    txOuts : TxOut[]; // 트랜잭션 출력 목록 새로 생성되는 출력을 나타냄
    hash?: string; // 트랜잭션의 식별자 (해시값)
}

// UTXO 구조 정의
export class UnspentTxOut{
    txOutId : string; // 해당 UTXO가 포함된 트랜잭션 hash 값
    txOutIndex : number; // 해당 UTXO가 포함된 트랜잭션의 출력 인덱스
    account : string; // UTXO 소유 계정
    amount : number; // 잔액

}



// 트랜잭션 데이터 타입 정의
// 전송시 문자열로
export type TransactionData = string | TransactionRow[];

// 사용되지 않은 UTXO 출력
export type UnspentTxOutPool = UnspentTxOut[];

// 트랜잭션 pool의 타입 정의
// 트랜잭션을 발생시키면 바로 처리되는게 아니라
// 트랜잭션 pool라는 공간에 처리되지 않은 트랜잭션이 대기상태로 쌓이고
// 블록이 생성될때 트랜잭션 pool에 있는 대기상태의 트랜잭션을 처리하고 블록에 기록한다.

export type TransactionPool = TransactionRow[];

