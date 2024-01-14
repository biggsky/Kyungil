import { BaseDTO } from "../database/baseDTO";
import { BlockData } from "./Block.model";

export default class BlockDTO extends BaseDTO implements BlockData {
  public number: bigint;
  public hash: string; // 선택적으로 만들거나 'string'으로 지정
  public parentHash: string;
  public sha3Uncles: string;
  public logsBloom: string;
  public transactionsRoot: string;
  public stateRoot: string;
  public receiptsRoot: string;
  public miner: string;
  public difficulty: bigint;
  public extraData: string;
  public gasLimit: bigint;
  public gasUsed: bigint;
  public timestamp: bigint;
  public baseFeePerGas: bigint;
  public withdrawalsRoot?: string; // 'withdrawalsRoot'를 선택적으로 변경
  public nonce: bigint;
  public mixHash: string;
  public txcount: number;

  constructor(body: BlockData) {
    super();
    this.number = body.number;
    this.hash = body.hash;
    this.parentHash = body.parentHash;
    this.sha3Uncles = body.sha3Uncles;
    this.logsBloom = body.logsBloom;
    this.transactionsRoot = body.transactionsRoot;
    this.stateRoot = body.stateRoot;
    this.receiptsRoot = body.receiptsRoot;
    this.miner = body.miner;
    this.difficulty = body.difficulty;
    this.extraData = body.extraData;
    this.gasLimit = body.gasLimit;
    this.gasUsed = body.gasUsed;
    this.timestamp = body.timestamp;
    this.baseFeePerGas = body.baseFeePerGas;
    this.nonce = body.nonce;
    this.mixHash = body.mixHash;
    this.txcount = body.txcount;
    this.createDTO(this);
  }
}
