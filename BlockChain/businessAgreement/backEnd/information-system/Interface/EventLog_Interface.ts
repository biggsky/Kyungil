export interface EventLog {
  address: string;
  blockHash: string;
  blockNumber: bigint;
  data: string;
  logIndex: bigint;
  removed: boolean;
  topics: string[];
  transactionHash: string;
  transactionIndex: bigint;
}
