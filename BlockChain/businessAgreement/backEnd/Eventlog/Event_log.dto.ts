import { BaseDTO } from "../database/baseDTO";
import { Event_log } from "./Event_log.model";

export default class Event_logDTO extends BaseDTO implements Event_log {
  public address: string;
  public blockHash: string;
  public blockNumber: bigint;
  public data: string;
  public logIndex: bigint;
  public removed: boolean;
  public transactionHash: string;
  public transactionIndex: bigint;
  public event: string;
  public signature: string;
  public topics: string[];
  public returnValues: string[];

  constructor(body: Event_log) {
    super();
    this.address = body.address;
    this.blockHash = body.blockHash;
    this.blockNumber = body.blockNumber;
    this.data = body.data;
    this.logIndex = body.logIndex;
    this.removed = body.removed;
    this.transactionHash = body.transactionHash;
    this.transactionIndex = body.transactionIndex;
    this.event = body.event;
    this.signature = body.signature;
    this.topics = body.topics;
    this.returnValues = body.returnValues;
    this.createDTO(this);
  }
}
