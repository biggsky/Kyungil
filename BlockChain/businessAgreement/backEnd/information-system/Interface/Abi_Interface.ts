interface InputItem {
  internalType: string;
  name: string;
  type: string;
}

interface OutputItem {
  internalType: string;
  name: string;
  type: string;
}

interface EventItem {
  anonymous: boolean;
  inputs: InputItem[];
  name: string;
  type: string;
}

interface FunctionItem {
  inputs: InputItem[];
  name: string;
  outputs?: OutputItem[];
  stateMutability: string;
  type: string;
}

interface ContractAbi {
  anonymous?: boolean;
  inputs?: InputItem[];
  name?: string;
  outputs?: OutputItem[];
  stateMutability?: string;
  type: string;
}

export interface TokenContractAbi {
  constructor: FunctionItem;
  events: EventItem[];
  functions: FunctionItem[];
}
