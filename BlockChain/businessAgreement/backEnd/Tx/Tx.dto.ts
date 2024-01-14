import { BaseDTO } from "../database/baseDTO";
import { TxData } from "./Tx.model";

export default class TxDTO extends BaseDTO implements TxData {
  public accessList: string[];
  public chainId: bigint;
  public from: string;
  public gas: bigint;
  public gasPrice: bigint;
  public hash: string;
  public input: string;
  public maxFeePerGas: bigint;
  public maxPriorityFeePerGas: bigint;
  public r: string;
  public s: string;
  public to: string;
  public transactionIndex: bigint;
  public type: bigint;
  public v: bigint;
  public value: string;
  public Method: string;
  public Timestamp: bigint;
  public blocknumber: number;

  constructor(body: TxData) {
    super();
    this.accessList = body.accessList;
    this.chainId = body.chainId;
    this.from = body.from;
    this.gas = body.gas;
    this.gasPrice = body.gasPrice;
    this.hash = body.hash;
    this.input = body.input;
    this.maxFeePerGas = body.maxFeePerGas;
    this.maxPriorityFeePerGas = body.maxPriorityFeePerGas;
    this.r = body.r;
    this.s = body.s;
    this.to = body.to;
    this.transactionIndex = body.transactionIndex;
    this.type = body.type;
    this.v = body.v;
    this.value = body.value;
    this.Method = body.Method;
    this.Timestamp = body.Timestamp;
    this.blocknumber = body.blocknumber;
    this.createDTO(this);
  }
}
