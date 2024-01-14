export interface ContractABI {
  inputs: ABIInput[];
  stateMutability: string;
  type: string;
  anonymous?: boolean;
  name?: string;
  outputs?: ABIOutput[];
  error?: string;
}

interface ABIInput {
  internalType: string;
  name: string;
  type: string;
  indexed?: boolean;
}

interface ABIOutput {
  internalType: string;
  name: string;
  type: string;
  components?: ABIStructMember[];
}

interface ABIStructMember {
  internalType: string;
  name: string;
  type: string;
}
