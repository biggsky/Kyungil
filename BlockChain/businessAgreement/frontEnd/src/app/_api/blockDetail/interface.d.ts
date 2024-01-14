export interface IResponseBLockItemData {
  id: string;
  number: string;
  hash: string;
  parentHash: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  baseFeePerGas: string;
  withdrawalsRoot: string;
  nonce: string;
  mixHash: string;
  txcount: string;
  createdAt: string;
  updatedAt: string;
}

export interface IBlockItemData {
    blockNumber:string
    status:boolean
    timeStamp:string
    txCount:string
    withdrawalsRoot:string
    feeRecipient:string
    difficulty:string
    nonce:string
    gas:string
    gasLimit:string
    baseFeePerGas:string
    extraData:string
    hash:string
    parentHash:string
    stateRoot:string

}
