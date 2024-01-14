export interface EthereumBlock {
  baseFeePerGas?: bigint;
  difficulty?: bigint;
  extraData?: string;
  gasLimit?: bigint;
  gasUsed?: bigint;
  hash?: string;
  logsBloom?: string;
  miner?: string;
  mixHash?: string;
  nonce?: bigint;
  number?: bigint;
  parentHash?: string;
  receiptsRoot?: string;
  sha3Uncles?: string;
  size?: bigint;
  stateRoot?: string;
  timestamp?: bigint;
  totalDifficulty?: bigint;
  transactions?: EthereumTransaction[];
}

interface EthereumTransaction {
  accessList?: any[]; // 여기에 accessList의 구체적인 타입을 추가해야 합니다.
  blockHash?: string;
  blockNumber?: bigint;
  chainId?: bigint;
  from?: string;
  gas?: bigint;
  gasPrice?: bigint;
  hash?: string;
  input?: string;
  maxFeePerGas?: bigint;
  maxPriorityFeePerGas?: bigint;
  nonce?: bigint;
  r?: string;
  s?: string;
  to?: string;
  transactionIndex?: bigint;
  type?: bigint;
  v?: bigint;
  value?: bigint;
}
