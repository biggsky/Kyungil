export interface IPendingTransaction {
  txHash: string;
  method: string;
  nonce: string;
  lastSeen: string;
  gasLimit: string;
  gasPrice: string;
  from: string;
  to: string;
  amount: string;
}

export interface IPendingTransactionProps {
  pendingTransactionData: IPendingTransaction[];
}
