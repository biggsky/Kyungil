export interface BlockData {
  number?: bigint;
  hash?: string; // 선택적으로 만들거나 'string'으로 지정
  parentHash?: string;
  sha3Uncles?: string;
  logsBloom?: string;
  transactionsRoot?: string;
  stateRoot?: string;
  receiptsRoot?: string;
  miner?: string;
  difficulty?: bigint;
  extraData?: string;
  gasLimit?: bigint;
  gasUsed?: bigint;
  timestamp?: bigint;
  baseFeePerGas?: bigint;
  withdrawalsRoot?: string; // 'withdrawalsRoot'를 선택적으로 변경
  nonce?: bigint;
  mixHash?: string;
}
